export type Project = {
    id: number;
    created_at: string;
    project_title: string;
    project_desc: string;
    website_url: string | null;
    github_url: string | null;
    project_img: string;
}