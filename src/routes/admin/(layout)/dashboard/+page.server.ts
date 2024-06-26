import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies, locals: { supabase }}) => {
        cookies.delete("user_role", {
            path: "/"
        })
        const { error } = await supabase.auth.signOut()
        throw redirect(302, "/")
    }
};