import { createClient } from "@supabase/supabase-js";

// const supabase = createClient("https://bujbwxvbgdrctzvcajqm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1amJ3eHZiZ2RyY3R6dmNhanFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNDQ0MjAsImV4cCI6MjA2NjkyMDQyMH0.Rg5kDevtMA-_qM3myoYWv8_THe9E9MDxaJdzktY_vi0");
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
  const projects = showProject.map(async (data) => {
    const temp = data;
    // console.log(temp);
    // console.log("==================");

      const { data: imgData } = await supabase
        .from("project_img")
        .select("img_url")
        .eq("id", temp.id);
      temp.preview_img = imgData && imgData.length > 0 ? imgData[0].img_url : null;
      return temp;
    });
    // console.log(projects);
  return Promise.all(projects);
}
