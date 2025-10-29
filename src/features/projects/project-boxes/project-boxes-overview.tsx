import {use$} from "@legendapp/state/react";
import {projectStore$} from "@/features/projects/repo/project-store";
import {useLiveQuery} from "@tanstack/react-db";
import {boxCollection} from "@/features/boxes/repo/box-collection";
import {BoxList} from "@/features/boxes/box-list/box-list";
import {BoxesEmpty} from "@/features/boxes/dashboard/boxes-empty";

export const ProjectBoxesOverview = () => {
    const currentProjectId = use$(projectStore$.currentProjectId)
    const {data: boxes} = useLiveQuery((q) => q.from({boxes: boxCollection}))
    const projectBoxes = boxes.filter(box => box.projectId === currentProjectId)

    if (boxes.length === 0) {
        return <BoxesEmpty/>
    }

    return (
        <BoxList boxes={projectBoxes}/>
    )
}