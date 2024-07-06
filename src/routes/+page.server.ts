import { loginSchema } from '$lib/utils/validationSchema';
import { redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async ({ cookies, locals: { supabase, safeGetSession } }) => {
  const form = await superValidate(zod(loginSchema));
  const session = await safeGetSession();
  let user_role = cookies.get("user_role");
  
  if(session) {
    let user = await supabase.auth.getUser()
    if(!user_role) { 
      let { data: admins, error } = await supabase.from('admins')
      .select('email').eq('email', user.data.user?.email || "")

      if(admins?.at(0)) {
        user_role = "admin"
      }
      else {
        user_role = "student"
        
      }
    }
  }
  
  return { 
    user_role,
    form 
  };
});

export const actions = {
  default: async ({ request, cookies, locals: { supabase } }) => {
    const form = await superValidate(request, zod(loginSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    if(form.data.user_role == 'admin') {
      let { data: admins, error } = await supabase.from('admins')
      .select('email').eq('username', form.data.username);

      if(error) {
        return message(form, 'Invalid credentials.') 
      }
      else if(admins) {
        let { data, error } = await supabase.auth.signInWithPassword({
          email: admins[0].email,
          password: form.data.password,
        })
        if(error) {
          return message(form, 'API Error: Invalid credentials')
        }
        else {
          cookies.set("user_role", form.data.user_role, {
            path: "/"
          })
          throw redirect(302, '/admin/dashboard')
        }
      }
    }
    else {
      let { data: students, error } = await supabase.from('student_profiles')
      .select('email').eq('username', form.data.username);

      if(error) {
        return message(form, 'Invalid credentials.')
      }
      else if(students) {
        if(students[0].email) {
          let { data, error } = await supabase.auth.signInWithPassword({
            email: students[0].email,
            password: form.data.password,
          })
          if(error) {
            return message(form, 'Invalid credentials.')
          }
          else {
            cookies.set("user_role", form.data.user_role, {
              path: "/"
            })
            throw redirect(302, '/student/dashboard')
          }
        }
      }
    }
  }
};
