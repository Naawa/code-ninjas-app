import { addItemSchema, removeItemSchema } from '$lib/utils/validationSchema';
import { error, redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async ({ locals: { supabase, safeGetSession } }) => {
  const session = await safeGetSession();
  if (!session) {
    throw error(401, "Unauthorized")
  }
  let { data: { user } } = await supabase.auth.getUser()
  let admin;

  if (user) {
    const { data: admins, error } = await supabase.from('admins').select('*').eq('id', user.id)
    admin = admins?.at(0)
  }
  
  const addItemForm = await superValidate(zod(addItemSchema), {
    id: "addItem"
  });
  const removeItemForm = await superValidate(zod(removeItemSchema), {
    id: "removeItem"
  });
  if(admin?.location) {
    addItemForm.data.center = admin?.location
    removeItemForm.data.center = admin?.location
  }
  return {
    addItemForm,
    removeItemForm
  };
});

export const actions = {
  addItem: async ({ request, locals: { supabase } }) => {
    const addItemForm = await superValidate(request, zod(addItemSchema));
    if (!addItemForm.valid) {
      return message(addItemForm, "Form is invalid.")
    }
    else {
      let { data: student_profiles } = await supabase
        .from('student_profiles')
        .select('email').eq('email', addItemForm.data.email)

      if (student_profiles?.length) {
        return message(addItemForm, "Student already exists.")
      }
      else {
        let { data, error } = await supabase.auth.admin.createUser({
          email: addItemForm.data.email,
          password: addItemForm.data.password,
          email_confirm: true
        })
        let user = data.user
        if (error) {
          return message(addItemForm, "Server side auth error has occurered, please report this problem and try again later.")
        }
        else if (user) {
          let { data, error } = await supabase
            .from('student_profiles')
            .insert([{
              id: user?.id,
              name: addItemForm.data.name,
              username: addItemForm.data.username,
              email: addItemForm.data.email,
              date_of_birth: addItemForm.data.date_of_birth,
              belt: addItemForm.data.belt,
              center: addItemForm.data.center,
              student_number: addItemForm.data.student_number
            }])
            .select()
          if (error) {
            return message(addItemForm, "Account has been made, but profile creation has failed.")
          }
          else if (data) {
            return message(addItemForm, "Account created successfully");
          }
        }
      }
    }
    return { addItemForm }
  },
  removeItem: async ({ request, locals: { supabase } }) => {
    const removeItemForm = await superValidate(request, zod(removeItemSchema));
    if (!removeItemForm.valid) {
      return message(removeItemForm, "Form is invalid.")
    }
    else {
      let { data, error } = await supabase.from('student_profiles').select('*').eq('username', removeItemForm.data.username).eq('center', removeItemForm.data.center)

      if (error) {
        return message(removeItemForm, "An error has occured.")
      }
      let students = data;
      if (students) {
        const { data, error } = await supabase.auth.admin.deleteUser(
          `${students?.at(0)?.id}`
        )

        if (error) {
          return message(removeItemForm, "Student does not exist.")
        }
        else {
          return message(removeItemForm, "Student removed sucessfully.")
        }
      }
    }

    return { removeItemForm }
  }
};
