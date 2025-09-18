import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header"
import {use$} from "@legendapp/state/react";
import {useLiveQuery} from "@tanstack/react-db";
import {boxCollection} from "@/features/box/repo/box-collection";
import {BoxCard} from "@/features/box/page/box-card";
import {projectStore$} from "@/features/project/repo/project-store";

export function BoxPage() {
    const currentProjectId = use$(projectStore$.currentProjectId)
    const {data: boxes} = useLiveQuery((q) => q.from({project: boxCollection}))
    const boxByProject = boxes.filter((box) => box.projectId === currentProjectId)

    return (
        <div className="flex items-center justify-between">
            <div>
                <PageTitle>Die Boxen im Projekt</PageTitle>
                <PageDescription>Hier verwaltest du die gespeicherten Boxen des gewählten Projekts</PageDescription>
                <PageHeaderSeparator/>
                {boxByProject.map((box) => {
                    return <BoxCard box={box} key={box.id}/>
                })}
            </div>
        </div>
    )
}