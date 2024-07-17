export const load = async ({ cookies, locals: { supabase, safeGetSession } }) => {
    const session = await safeGetSession();
    if (session) {
        let user = await supabase.auth.getUser()
        let { data: admins, error } = await supabase.from('admins')
            .select('email').eq('email', user.data.user?.email || "")

        if (admins?.at(0)) {
            let { data: center_profiles, error } = await supabase
                .from('center_profiles')
                .select('*').eq("id", user.data.user?.id || "")

            if (center_profiles) {
                return { center: center_profiles[0] }
            }
        }
    }
};