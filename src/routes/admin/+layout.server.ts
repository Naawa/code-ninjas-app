import { error } from '@sveltejs/kit';

export const load = (async ({ locals: { supabase, safeGetSession } }) => {
    const { session, user } = await safeGetSession()
    if (!session) {
        throw error(401, "Unauthorized")
    }

    async function getAdmin() {
        let { data: { user } } = await supabase.auth.getUser()
        if (user?.email) {
            let { data: admins, error } = await supabase.from('admins')
                .select('*').eq('email', user?.email);
            if (error) {
                console.log(error)
            }
            else if(admins) {
                return admins.at(0)
            }
        }
    }

    async function getStudents() {
        let admins = await getAdmin();
        if (admins?.location) {
            let { data: student_profiles, error } = await supabase.from('student_profiles').select("*").eq("center", admins.location)
            if (student_profiles) {
                return student_profiles
            }
        }
    }

    return {
        admin: await getAdmin(),
        students: await getStudents(),
        session,
        user,
    }
});