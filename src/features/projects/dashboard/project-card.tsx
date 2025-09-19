import {KeyboardEvent, useState} from "react"
import {BookA, Edit3, Trash2} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {projectCollection} from "@/features/projects/repo/project-collection"
import {type Project} from "@/features/projects/project-schema"
import {useNavigateToProjectEdit} from "@/features/projects/hooks/navigate-to-project-edit";

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({project}: ProjectCardProps) => {
    const [enableEdit, setEnableEdit] = useState(false)
    const [editName, setEditName] = useState(project.name)
    const editProject = useNavigateToProjectEdit()


    const saveEdit = () => {
        projectCollection.update(project.id, project => {
            project.name = editName.trim()
        })
        setEnableEdit(false)
    }

    const cancelEdit = () => {
        setEnableEdit(false)
        setEditName(project.name)
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            saveEdit()
        }
        if (event.key === "Escape") {
            cancelEdit()
        }
    }

    const handleDeleteProject = () => {
        projectCollection.delete(project.id)
    }

    return (
        <Card
            className="border bg-background rounded-none cursor-pointer shadow-none transition-colors"
        >
            <CardHeader>
                <CardTitle className="font-mono tracking-wider text-sm">
                    {enableEdit ? (
                        <Input
                            value={editName}
                            onChange={({target}) => setEditName(target.value)}
                            onKeyDown={e => handleInputKeyDown(e)}
                            onBlur={saveEdit}
                            className="border-0 border-b-2 rounded-none bg-transparent px-0 py-1 text-sm font-mono tracking-wider h-6 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
                            autoFocus
                        />
                    ) : (
                        <div>{project.name}</div>
                    )}
                </CardTitle>
                <CardAction>
                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEnableEdit(true)}
                            className="size-8 p-0 hover:bg-gray-100"
                        >
                            <BookA className="size-4"/>
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => editProject(project.id)}
                            className="size-8 p-0 hover:bg-gray-100"
                        >
                            <Edit3 className="size-4"/>
                        </Button>
                        <Button
                            onClick={() => handleDeleteProject()}
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                        >
                            <Trash2 className="h-3 w-3"/>
                        </Button>
                    </div>
                </CardAction>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-muted-foreground font-mono">
                    Projekt ID: {project.id.slice(-8)}
                </p>
            </CardContent>
        </Card>
    )
}