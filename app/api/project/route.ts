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
    if (search === "" || search) {
        const projects = await searchProject(search);
        // console.log)÷;
        return Response.json(projects);
    }
    return Response.json({});
}