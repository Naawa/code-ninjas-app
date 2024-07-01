import { studentSchema } from '$lib/utils/validationSchema';
import { error, redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async ({ locals: { supabase, safeGetSession } }) => {
  const form = await superValidate(zod(studentSchema));
  const session = await safeGetSession();
  
  if(!session) {
    throw error(401, "Unauthorized")
  }
  
  return { 
    form 
  };
});

export const actions = {
  addStudent: async ({ request, cookies, locals: { supabase } }) => {
    // Validate Form
    // Add student to db
  },
  removeStudent: async ({ request, cookies, locals: { supabase } }) => {
    // Remove Student
  }
};
