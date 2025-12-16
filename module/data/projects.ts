import projectsData from "@/data/projects.json";
import techIconsData from "@/data/tech-icons.json";
import type { Project } from "@/types/project";
import type { TechIcon } from "@/types/techstack";

interface ProjectWithTechStack extends Project {
  tech_stack_ids: number[];
}

const projects: ProjectWithTechStack[] = projectsData as ProjectWithTechStack[];
const techIcons: TechIcon[] = techIconsData as TechIcon[];

export function getProject(): { id: number; project_title: string }[] {
  return projects.map(({ id, project_title }) => ({ id, project_title }));
}

export function getProjectHome(): Project[] {
  const sorted = [...projects].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return sorted.slice(0, 4);
}

export function searchProject(query: string): Project[] {
  if (!query) {
    return projects;
  }
  const lowerQuery = query.toLowerCase();
  return projects.filter((project) =>
    project.project_title.toLowerCase().includes(lowerQuery)
  );
}

export function getProjectById(id: number): Project[] {
  return projects.filter((project) => project.id === id);
}

export function getProjectSkills(projectId: number): TechIcon[] {
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    return [];
  }

  const icons: TechIcon[] = [];
  for (const iconId of project.tech_stack_ids) {
    const icon = techIcons.find((t) => t.id === iconId);
    if (icon) {
      icons.push(icon);
    }
  }
  return icons;
}
