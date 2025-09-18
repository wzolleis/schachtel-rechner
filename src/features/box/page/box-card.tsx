import {KeyboardEvent, useState} from "react"
import {Edit3, GitGraph, Trash2} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Box} from "@/features/box/box-schema";
import {boxCollection} from "@/features/box/repo/box-collection";

interface BoxCardProps {
    box: Box
}

export const BoxCard = ({box}: BoxCardProps) => {
    const [enableEdit, setEnableEdit] = useState(false)
    const [editName, setEditName] = useState(box.name)

    const saveEdit = () => {
        boxCollection.update(box.id, box => {
            box.name = editName.trim()
        })
        setEnableEdit(false)
    }

    const cancelEdit = () => {
        setEnableEdit(false)
        setEditName(box.name)
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            saveEdit()
        }
        if (event.key === "Escape") {
            cancelEdit()
        }
    }

    const handleDeleteBox = () => {
        boxCollection.delete(box.id)
    }

    const handleVisualizeBox = () => {
        // show box visualization
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
                        <div>{box.name}</div>
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
                            <Edit3 className="size-4"/>
                        </Button>
                        <Button
                            onClick={handleVisualizeBox}
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-amber-600 hover:text-white"
                        >
                            <GitGraph className="h-3 w-3"/>
                        </Button>
                        <Button
                            onClick={handleDeleteBox}
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
                    Project ID: {box.projectId.slice(-8)}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                    Box ID: {box.id.slice(-8)}
                </p>
            </CardContent>
        </Card>
    )
}