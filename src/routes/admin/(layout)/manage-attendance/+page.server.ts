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

  async function getAdmin() {
    const { data: admins, error } = await supabase.from('admins').select('*').eq('id', user?.id || "")

    return admins?.at(0)
  }

  let admin = await getAdmin()

  const addAttendeeForm = await superValidate(zod(addByStudentNumberSchema), {
    id: "addStudent"
  });
  const removeAttendeeForm = await superValidate(zod(removeByStudentNumberSchema), {
    id: "removeStudent"
  });

  async function getAttendingStudents() {
    let { data: center_profiles, error } = await supabase.from('center_profiles').select('attendance').eq('id', user?.id || "")
    if(center_profiles) {
      if(center_profiles[0].attendance) {
        let { data: student_profiles, error } = await supabase.from('student_profiles').select('*').eq('center', admin?.location || "")

        if(student_profiles) {
          let attendingStudents = []
          for(let i = 0; i < center_profiles[0].attendance?.length; i++) {
            for(let j = 0; j < student_profiles.length; j++) {
              if(student_profiles[j].student_number == center_profiles[0].attendance[i]) {
                attendingStudents.push(student_profiles[j])
              }
            }
          }
          return attendingStudents
        }
      }
    }
  }

  if (admin?.location) {
    addAttendeeForm.data.center = admin?.location
    removeAttendeeForm.data.center = admin?.location
  }
  return {
    addAttendeeForm,
    removeAttendeeForm,
    attendingStudents: await getAttendingStudents()
  };
});

export const actions = {
  addAttendee: async ({ request, locals: { supabase } }) => {
    let { data: { user } } = await supabase.auth.getUser()

    const addAttendeeForm = await superValidate(request, zod(addByStudentNumberSchema));

    if (user) {
      if (!addAttendeeForm.valid) {
        return message(addAttendeeForm, "Invalid input.")
      }
      else {
        let { data: center_profiles, error } = await supabase.from('center_profiles').select('attendance').eq('id', user?.id || "")

        if (error) {
          return message(addAttendeeForm, "Server side error occurred while fetching exisitng attendance.")
        }
        else {
          if (error) {
            return message(addAttendeeForm, "Server side error occurred while adding attendee.")
          }
          else if (center_profiles) {
            if (center_profiles[0].attendance) {
              for (let i = 0; i < center_profiles[0].attendance.length; i++) {
                if (addAttendeeForm.data.studentNumber == center_profiles[0].attendance[i]) {
                  return message(addAttendeeForm, "Student is already attending.")
                }
              }
              let updatedAttendance: string[] = [...center_profiles[0].attendance, addAttendeeForm.data.studentNumber]

              const { data, error } = await supabase
                .from('center_profiles')
                .update({ attendance: updatedAttendance })
                .eq('id', user?.id)
                .select()

              if (error) {
                return message(addAttendeeForm, "Error adding attendee.")
              }
              else {
                return message(addAttendeeForm, "Attendee added successfully.")
              }
            }
          }
        }
      }
    }
  },
  removeAttendee: async ({ request, locals: { supabase } }) => {
    let { data: { user } } = await supabase.auth.getUser()

    const removeAttendeeForm = await superValidate(request, zod(addByStudentNumberSchema));

    if (user) {
      if (!removeAttendeeForm.valid) {
        return message(removeAttendeeForm, "Invalid input.")
      }
      else {
        let { data: center_profiles, error } = await supabase.from('center_profiles').select('attendance').eq('id', user?.id || "")

        if (error) {
          return message(removeAttendeeForm, "Server side error occurred while fetching exisitng attendance.")
        }
        else {
          if (error) {
            return message(removeAttendeeForm, "Server side error occurred while adding attendee.")
          }
          else if (center_profiles) {
            if (center_profiles[0].attendance) {
              for (let i = 0; i < center_profiles[0].attendance.length; i++) {
                if (removeAttendeeForm.data.studentNumber == center_profiles[0].attendance[i]) {
                  let attendance = center_profiles[0].attendance
                  attendance.splice(center_profiles[0].attendance.indexOf(removeAttendeeForm.data.studentNumber), 1)

                  const { data, error } = await supabase
                    .from('center_profiles')
                    .update({ attendance: attendance })
                    .eq('id', user?.id)
                    .select()
                  console.log(attendance)
                  if (error) {
                    return message(removeAttendeeForm, "Error removing attendee.")
                  }
                  else {
                    return message(removeAttendeeForm, "Attendee removed successfully.")
                  }
                }
              }
              return message(removeAttendeeForm, "Student is  not attending.")
            }
          }
        }
      }
    }
  },
};
