import { 
    getProjectHome,
    searchProject
} from "@/module/supabase/server";

export async function GET() {
    const data = await getProjectHome();
    return Response.json(data)
}

export async function POST(req : Request) {
    const { search } = await req.json();
    if (search) {
        const projects = await searchProject(search);
        return Response.json({projects});
    }
    return Response.json({});
}