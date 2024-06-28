import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { safeGetSession }}) => {
    const { session } = await safeGetSession()
    if(!session) {
        throw error(401, "Unauthorized")
    }
};

export const actions = {
    default: async ({ cookies, locals: { supabase }}) => {
        cookies.delete("user_role", {
            path: "/"
        })
        const { error } = await supabase.auth.signOut()
        throw redirect(302, "/")
    }
};