import {KeyboardEvent, useState} from "react"
import {BluetoothConnectedIcon, BookA, Edit3, GitGraph, Trash2} from "lucide-react"
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Box} from "@/features/boxes/schema/box-schema";
import {boxCollection} from "@/features/boxes/repo/box-collection";
import {useNavigateToBoxEdit} from "@/features/boxes/hooks/navigate-to-box-edit";
import {ButtonWithTooltip} from "@/components/form/button-with-tooltip";
import {useBoolean} from "@/hooks/use-boolean";

interface BoxCardProps {
    box: Box
}

const BoxCard = ({box}: BoxCardProps) => {
    const enableRenameBox = useBoolean(false)
    const [editName, setEditName] = useState(box.name)
    const {navigateToBoxEdit} = useNavigateToBoxEdit()
    const saveEdit = () => {
        boxCollection.update(box.id, box => {
            box.name = editName.trim()
        })
        enableRenameBox.setFalse()
    }

    const handleEditBoxConnections = () => {

    }

    const cancelEdit = () => {
        enableRenameBox.setFalse()
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

    const handleEditBox = () => {
        navigateToBoxEdit(box.id)
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
                    {enableRenameBox.value ? (
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
                {
                    !enableRenameBox.value &&
                    <CardAction>
                        <div className="flex gap-2">
                            <ButtonWithTooltip handleButtonClick={enableRenameBox.setTrue}
                                               tooltipText={"Rename Box"}
                                               Icon={BookA}
                            />
                            <ButtonWithTooltip handleButtonClick={handleEditBox}
                                               tooltipText={"Edit Box"}
                                               Icon={Edit3}
                                               buttonClasses={"h-8 w-8 p-0 hover:bg-green-600 hover:text-white"}
                            />
                            <ButtonWithTooltip handleButtonClick={handleVisualizeBox}
                                               tooltipText={"Visualize Box"}
                                               Icon={GitGraph}
                                               buttonClasses={"h-8 w-8 p-0 hover:bg-blue-600 hover:text-white"}
                            />
                            <ButtonWithTooltip handleButtonClick={handleEditBoxConnections}
                                               tooltipText={"Edit Box Connections"}
                                               Icon={BluetoothConnectedIcon}
                                               buttonClasses={"h-8 w-8 p-0 hover:bg-amber-600 hover:text-white"}
                            />
                            <ButtonWithTooltip handleButtonClick={handleDeleteBox}
                                               tooltipText={"Delete Box"}
                                               Icon={Trash2}
                                               buttonClasses={"h-8 w-8 p-0 hover:bg-red-600 hover:text-white"}
                            />
                        </div>
                    </CardAction>
                }
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
export default BoxCard