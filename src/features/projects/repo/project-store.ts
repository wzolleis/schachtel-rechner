import {observable} from "@legendapp/state"
import {syncObservable} from "@legendapp/state/sync"
import {ObservablePersistLocalStorage} from "@legendapp/state/persist-plugins/local-storage"

interface ProjectStore {
    currentProjectId: string | null
    setProject: (projectId: string | null) => void
}

export const projectStore$ = observable<ProjectStore>({
    currentProjectId: null,
    setProject: (newProjectId: string | null) => {
        projectStore$.currentProjectId.set(newProjectId)
    }
})

syncObservable(projectStore$, {
    persist: {
        name: "current-project",
        plugin: ObservablePersistLocalStorage
    }
})
