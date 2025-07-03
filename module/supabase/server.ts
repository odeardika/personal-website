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
  return showProject;
}
