import { addStudentSchema, removeStudentSchema } from '$lib/utils/validationSchema';
import { error, redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async ({ params, locals: { supabase, safeGetSession } }) => {
  const session = await safeGetSession();
  if (!session) {
    throw error(401, "Unauthorized")
  }
  else {
    const { data, error } = await supabase.from('student_profiles').select('*').eq('username', params.username)

    if(data) {
      return {
        student: data[0]
      }
    }
  }
});
