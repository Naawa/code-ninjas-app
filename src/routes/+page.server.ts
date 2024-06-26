import { loginSchema } from '$lib/utils/validationSchema';
import { redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async ({ cookies }) => {
  const form = await superValidate(zod(loginSchema));
  
  return { 
    user_role: cookies.get("user_role"),
    form 
  };
});

export const actions = {
  default: async ({ request, cookies, locals: { supabase } }) => {
    const form = await superValidate(request, zod(loginSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    /**
     * Check if admin or student account exists by matching username or email to referenced tables.
     * 
     * If does not exist, return error.
     * 
     * If exists, complete auth with password.
     * If error, return.
     * 
     * Else redirect to referenced dashboard.
     */

    if(form.data.user_role == 'admin') {
      let { data: admins, error } = await supabase.from('admins')
      .select('email').eq('username', form.data.username);

      if(error) {
        return message(form, 'Invalid credentials.') 
      }
      else {
        console.log(admins[0].email, form.data.password)
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
      let { data: students, error } = await supabase.from('students')
      .select('email').eq('username', form.data.username);

      if(error) {
        return message(form, 'Invalid credentials.')
      }
      else {
        console.log(students[0].email, form.data.password)
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
};
