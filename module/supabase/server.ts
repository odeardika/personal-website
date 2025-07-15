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

export async function getProjectSkills(projectId : number) {
  const { data, error } = await supabase.from('project_tech_stack').select().eq('project_id', projectId);

  if(error) {
    return error;
  }

  // get the icons property
  const icons = await Promise.all(data.map( async (item) => {
    const temp = await supabase.from('tech_stack_icons').select().eq('id', item.icon_id);
    if(temp.data) {
      const icon = temp.data[0];
      return icon;
      
    }
    return temp;
  }))

  return icons;
  
}