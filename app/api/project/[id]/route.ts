import { getProjectById } from "@/module/supabase/server";
import { Project } from "@/types/project";


export async function GET(
    request: Request,
  { params }: { params: Promise<{ id: string }> }) 
  {
    const { id } = await params;

    const data = await getProjectById(Number(id)) as Project[];
    
    // handle if id is invalid or not on database
    if (data.length == 0) {
      return Response.json({
        status : 404,
        message : "Id not found",
        data : null
      })
    }




    return Response.json({
      status : 200,
      message : 'success',
      data : data[0]
    });
}