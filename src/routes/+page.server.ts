import { loginSchema } from '$lib/utils/validationSchema';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async () => {
  const form = await superValidate(zod(loginSchema));
  
  return { form };
});

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(loginSchema));
    console.log(form);

    if (!form.valid) {
      return fail(400, { form });
    }

    /**
     * 1. Check if user exists, with appropriate role. Then log them in and redirect to dashboard.
     * 2. If user doesn't exist, or invalid role, display error message.
     */
    


    return message(form, 'Form posted successfully!');
  }
};
