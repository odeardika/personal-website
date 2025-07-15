export type TechIcon = {
    id : number;
    created_at : string;
    tech_name : string;
    path : string;
}

export type TechStack = {
    id : number;
    created_at : string;
    tech_name : string;
    project_id : string;
    icon_id : number;
}