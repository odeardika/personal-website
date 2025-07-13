import { getProjectSkills } from "@/module/supabase/server";
import { TechStack } from "@/types/techstack";

export async function GET(
    request: Request,
  { params }: { params: Promise<{ id: string }> }) 
  {
    const { id } = await params;

    const data = await getProjectSkills(Number(id)) as TechStack[];
    console.log(data);
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
      data : data
    });
}