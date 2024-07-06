import { modifyPointsSchema } from '$lib/utils/validationSchema';
import { error, redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async ({ params, locals: { supabase, safeGetSession } }) => {
  const session = await safeGetSession();
  if (!session) {
    throw error(401, "Unauthorized")
  }
  else {
    const form = await superValidate(zod(modifyPointsSchema));
    const { data, error } = await supabase.from('student_profiles').select('*').eq('username', params.username)

    if(data) {
      return {
        form,
        student: data.at(0)
      }
    }
  }
});

export const actions = {
  addPoints: async ({ params, request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(modifyPointsSchema));
    if(!form.valid) {
      return message(form, "Invalid input.")
    }
    else {
      let value = form.data.currentPoints + form.data.pointsValue
      if(value < 0) {
        return message(form, "Not enough points!");
      }
      let { data, error } = await supabase.from('student_profiles').update({
        points: value,
      }).eq('username', params.username);

      return message(form, "Operation successful.")
    }
  },
  removePoints: async ({ params, request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(modifyPointsSchema));
    if(!form.valid) {
      return message(form, "Invalid input.")
    }
    else {
      let value = form.data.currentPoints - form.data.pointsValue
      if(value < 0) {
        return message(form, "Not enough points!");
      }
      let { data, error } = await supabase.from('student_profiles').update({
        points: value,
      }).eq('username', params.username);

      return message(form, "Operation successful.")
    }
  }
};
