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

    if (data) {
      return {
        form,
        student: data[0]
      }
    }
  }
});

export const actions = {
  addPoints: async ({ params, request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(modifyPointsSchema));
    if (!form.valid) {
      return message(form, "Invalid input.")
    }
    else {
      let { data, error } = await supabase.from('student_profiles').select("points").eq('username', params.username)

      if (data) {
        let value = data[0].points
        if (value != null) {
          if (value + form.data.pointsValue >= 0) {
            let { data, error } = await supabase.from('student_profiles').update({
              points: value + form.data.pointsValue,
            }).eq('username', params.username);

            return message(form, "Operation successful.")
          }
          else {
            return message(form, "Points will be negative!")
          }
        }
        else {
          console.log(value)
          return message(form, "Value error.")
        }
      }
    }
  },
  removePoints: async ({ params, request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(modifyPointsSchema));
    if (!form.valid) {
      return message(form, "Invalid input.")
    }
    else {
      let { data, error } = await supabase.from('student_profiles').select("points").eq('username', params.username)

      if (data) {
        let value = data[0].points
        if (value != null) {
          if (value - form.data.pointsValue >= 0) {
            let { data, error } = await supabase.from('student_profiles').update({
              points: value - form.data.pointsValue,
            }).eq('username', params.username);

            return message(form, "Operation successful.")
          }
          else {
            return message(form, "Not enough points!")
          }
        }
      }
    }
  }
};
