import { getProjectSkills } from "@/module/data/projects";
import type { TechIcon } from "@/types/techstack";

export async function GET(
    request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
    const { id } = await params;

    const data = getProjectSkills(Number(id)) as TechIcon[];

    if (data.length === 0) {
      return Response.json({
        status: 404,
        message: "Id not found",
        data: null
      });
    }

    return Response.json({
      status: 200,
      message: "success",
      data: data
    });
}