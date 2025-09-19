import {z} from "zod"

const ProjectNameSchema = z.string().min(1, {error: "Project name is required"}).max(100, {error: "Project name must be less than 100 characters"})

export const ProjectSchema = z.object({
    id: z.string().min(1, "Project ID is required"),
    name: ProjectNameSchema
})

export type Project = z.infer<typeof ProjectSchema>

export const createProjectSchema = z.object({
    name: ProjectNameSchema
})

export type CreateProject = z.infer<typeof createProjectSchema>