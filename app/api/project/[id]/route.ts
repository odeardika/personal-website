import { getProjectById } from "@/module/supabase/server";


export async function GET(
    request: Request,
  { params }: { params: Promise<{ id: string }> }) 
  {
    const { id } = await params;

    const data = await getProjectById(Number(id));




    return Response.json(data);
}