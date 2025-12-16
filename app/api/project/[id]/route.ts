import { getProjectById } from "@/module/data/projects";
import type { Project } from "@/types/project";

export async function GET(
    request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
    const { id } = await params;

    const data = getProjectById(Number(id)) as Project[];

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
      data: data[0]
    });
}