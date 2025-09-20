import {useLiveQuery} from "@tanstack/react-db";
import {projectCollection} from "@/features/projects/repo/project-collection";
import {Project} from "@/features/projects/project-schema";

export const useFindAllProjects = (): Project[] => {
    const {data: projects} = useLiveQuery((q) => q.from({projects: projectCollection}))
    return projects
}

export const useFindProjectById = () => {
    const {data: projects} = useLiveQuery((q) => q.from({projects: projectCollection}))

    const findProjectById = (projectid: string | null): Project | undefined => {
        return projects.find(x => x.id === projectid)
    }

    return {
        findProjectById
    }
}


