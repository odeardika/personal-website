import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export async function getProject() {
  const { data, error } = await supabase
    .from("projects")
    .select("id,project_title");

  if (error) {
    return error;
  }
  return data;
}

export async function getProjectHome() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return error;
  }

  const showProject = data ? data.slice(0, 4) : [];
  return showProject;
}

export async function searchProject(query: string) {
  const { data, error } = await supabase.from('projects').select().like('project_title', `%${query}%`);

  if (error) {
    return error;
  }
  return data;
} 

export async function getProjectById(id : number) {
  const { data, error } = await supabase.from('projects').select().eq('id', id);

  if(error) {
    return error;
  }

  return data;

}