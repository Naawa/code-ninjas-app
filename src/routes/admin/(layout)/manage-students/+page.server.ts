import { addStudentSchema, removeStudentSchema } from '$lib/utils/validationSchema';
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
  const addStudentForm = await superValidate(zod(addStudentSchema), {
    id: "addStudent"
  });
  const removeStudentForm = await superValidate(zod(removeStudentSchema), {
    id: "removeStudent"
  });
  if(admin?.location) {
    addStudentForm.data.center = admin?.location
    removeStudentForm.data.center = admin?.location
  }
  return {
    addStudentForm,
    removeStudentForm
  };
});

export const actions = {
  addStudent: async ({ request, locals: { supabase } }) => {
    const addStudentForm = await superValidate(request, zod(addStudentSchema));
    console.log(addStudentForm.data)
    if (!addStudentForm.valid) {
      return message(addStudentForm, "Form is invalid.")
    }
    else {
      let { data: student_profiles } = await supabase
        .from('student_profiles')
        .select('email').eq('email', addStudentForm.data.email)

      if (student_profiles?.length) {
        return message(addStudentForm, "Student already exists.")
      }
      else {
        let { data, error } = await supabase.auth.admin.createUser({
          email: addStudentForm.data.email,
          password: addStudentForm.data.password,
          email_confirm: true
        })
        let user = data.user
        if (error) {
          return message(addStudentForm, "Server side auth error has occurered, please report this problem and try again later.")
        }
        else if (user) {
          let { data, error } = await supabase
            .from('student_profiles')
            .insert([{
              id: user?.id,
              name: addStudentForm.data.name,
              username: addStudentForm.data.username,
              email: addStudentForm.data.email,
              date_of_birth: addStudentForm.data.date_of_birth,
              belt: addStudentForm.data.belt,
              center: addStudentForm.data.center,
            }])
            .select()
          if (error) {
            return message(addStudentForm, "Account has been made, but profile creation has failed.")
          }
          else if (data) {
            return message(addStudentForm, "Account created successfully");
          }
        }
      }
    }
    return { addStudentForm }
  },
  removeStudent: async ({ request, locals: { supabase } }) => {
    const removeStudentForm = await superValidate(request, zod(removeStudentSchema));

    if (!removeStudentForm.valid) {
      return message(removeStudentForm, "Form is invalid.")
    }
    else {
      let { data, error } = await supabase.from('student_profiles').select('*').eq('username', removeStudentForm.data.username).eq('center', removeStudentForm.data.center)

      if (error) {
        return message(removeStudentForm, "An error has occured.")
      }
      let students = data;
      if (students) {
        const { data, error } = await supabase.auth.admin.deleteUser(
          `${students?.at(0)?.id}`
        )

        if (error) {
          console.log(students)
          return message(removeStudentForm, "Student does not exist.")
        }
        else {
          return message(removeStudentForm, "Student removed sucessfully.")
        }
      }
    }

    return { removeStudentForm }
  }
};
