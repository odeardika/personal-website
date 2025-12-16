import {
    getProjectHome,
    searchProject
} from "@/module/data/projects";

export function GET(): Response {
    const data = getProjectHome();
    return Response.json(data);
}

export async function POST(req: Request): Promise<Response> {
    const { search } = await req.json();
    if (search === "" || search) {
        const projects = searchProject(search);
        return Response.json(projects);
    }
    return Response.json({});
}