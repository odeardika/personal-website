import { getProjectHome } from "@/module/supabase/server";

export async function GET() {
    const data = await getProjectHome();
    return Response.json(data)
}