import { addByStudentNumberSchema, removeByStudentNumberSchema } from '$lib/utils/validationSchema';
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
  
  const addAttendeeForm = await superValidate(zod(addByStudentNumberSchema), {
    id: "addStudent"
  });
  const removeAttendeeForm = await superValidate(zod(removeByStudentNumberSchema), {
    id: "removeStudent"
  });
  if(admin?.location) {
    addAttendeeForm.data.center = admin?.location
    removeAttendeeForm.data.center = admin?.location
  }
  return {
    addAttendeeForm,
    removeAttendeeForm
  };
});

export const actions = {
  addAttendee: async ({ request, locals: { supabase } }) => {
    const addAttendeeForm = await superValidate(request, zod(addByStudentNumberSchema));

    if(!addAttendeeForm.valid) {
        return message(addAttendeeForm, "Invalid input.")
    }
    else {
        
    }
  },
  removeAttendee: async ({ request, locals: { supabase } }) => {
    const addAttendeeForm = await superValidate(request, zod(addByStudentNumberSchema));

    if(!addAttendeeForm.valid) {
        return message(addAttendeeForm, "Invalid input.")
    }
    else {
        
    }
  }
};
