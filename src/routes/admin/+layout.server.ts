import { error } from '@sveltejs/kit';

export const load = (async ({ locals: { supabase, safeGetSession } }) => {
    const { session, user } = await safeGetSession()
    if(!session) {
        throw error(401, "Unauthorized")
    }

    let { data } = await supabase.from('admins')
    .select('*').eq('id', user.id);   

    if(!data) {
        throw error(401, "Unauthorized")
    }
   
    return {
        admin: data[0],
        session,
        user,
    }
});