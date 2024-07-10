import { modifyBeltSchema, modifyPointsSchema, modifyStudentNumberSchema } from '$lib/utils/validationSchema';
import { error, redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async ({ params, locals: { supabase, safeGetSession } }) => {
  const session = await safeGetSession();
  if (!session) {
    throw error(401, "Unauthorized")
  }
  else {

    const modifyPointsForm = await superValidate(zod(modifyPointsSchema), {
      id: "modifyPoints"
    });
    const modifyBeltForm = await superValidate(zod(modifyBeltSchema), {
      id: "modifyBelt"
    });
    const modifyStudentNumberForm = await superValidate(zod(modifyStudentNumberSchema), {
      id: "modifyStudentNumber"
    });
    const { data, error } = await supabase.from('student_profiles').select('*').eq('username', params.username)

    if (data) {
      return {
        modifyPointsForm,
        modifyBeltForm,
        modifyStudentNumberForm,
        student: data[0]
      }
    }
  }
});

export const actions = {
  addPoints: async ({ params, request, locals: { supabase } }) => {
    const modifyPointsForm = await superValidate(request, zod(modifyPointsSchema));
    if (!modifyPointsForm.valid) {
      return message(modifyPointsForm, "Invalid input.")
    }
    else {
      let { data, error } = await supabase.from('student_profiles').select("points").eq('username', params.username)

      if (data) {
        let value = data[0].points
        if (value != null) {
          if (value + modifyPointsForm.data.pointsValue >= 0) {
            let { data, error } = await supabase.from('student_profiles').update({
              points: value + modifyPointsForm.data.pointsValue,
            }).eq('username', params.username);

            return message(modifyPointsForm, "Operation successful.")
          }
          else {
            return message(modifyPointsForm, "Points will be negative!")
          }
        }
        else {
          console.log(value)
          return message(modifyPointsForm, "Value error.")
        }
      }
    }
  },
  removePoints: async ({ params, request, locals: { supabase } }) => {
    const modifyPointsForm = await superValidate(request, zod(modifyPointsSchema));
    if (!modifyPointsForm.valid) {
      return message(modifyPointsForm, "Invalid input.")
    }
    else {
      let { data, error } = await supabase.from('student_profiles').select("points").eq('username', params.username)

      if (data) {
        let value = data[0].points
        if (value != null) {
          if (value - modifyPointsForm.data.pointsValue >= 0) {
            let { data, error } = await supabase.from('student_profiles').update({
              points: value - modifyPointsForm.data.pointsValue,
            }).eq('username', params.username);

            return message(modifyPointsForm, "Operation successful.")
          }
          else {
            return message(modifyPointsForm, "Not enough points!")
          }
        }
      }
    }
  },
  updateBelt: async ({ params, request, locals: { supabase } }) => {
    const modifyBeltForm = await superValidate(request, zod(modifyBeltSchema));
    if (!modifyBeltForm.valid) {
      return message(modifyBeltForm, "Invalid input.")
    }
    else {
      let { data, error } = await supabase.from('student_profiles').update({
        belt: modifyBeltForm.data.newBelt,
      }).eq('username', params.username);
      if (error) {
        return message(modifyBeltForm, "Unable to modify belt.")
      }
      else {
        return message(modifyBeltForm, "Operation sucessful.")
      }
    }
  },
  updateStudetnNumber: async ({ params, request, locals: { supabase } }) => {
    const modifyStudentNumberForm = await superValidate(request, zod(modifyStudentNumberSchema));
    if (!modifyStudentNumberForm.valid) {
      return message(modifyStudentNumberForm, "Invalid input.")
    }
    else {
      let { data, error } = await supabase.from('student_profiles').update({
        student_number: modifyStudentNumberForm.data.newStudentNumber,
      }).eq('username', params.username);
      if (error) {
        return message(modifyStudentNumberForm, "Unable to modify student number.")
      }
      else {
        return message(modifyStudentNumberForm, "Operation sucessful.")
      }
    }
  },
};
