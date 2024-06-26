import { loginSchema } from '$lib/utils/validationSchema';
import { redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async () => {
  const form = await superValidate(zod(loginSchema));
  
  return { form };
});

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(loginSchema));
    console.log(form);

    if (!form.valid) {
      return fail(400, { form });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.data.email,
      password: form.data.password
    })
    
    if (error) {
      console.log(error)
      return message(form, 'Invalid credentials!');
    }
    else {
      console.log(data)
      throw redirect(302, '/admin/dashboard')
    }
  }
};
