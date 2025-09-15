import {use$} from "@legendapp/state/react"
import {useLiveQuery} from "@tanstack/react-db";
import {BreadcrumbItem} from "@/components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {FolderIcon, Plus} from "lucide-react";
import {useState} from "react";
import {boxCollection} from "@/features/box/box-collection";
import {selectedBox$} from "@/features/box/box-store";
import {CreateBoxDialog} from "@/components/box/create-box-dialog";

export function BoxSwitcher() {
    const currentBoxId = use$(selectedBox$.selectedBoxId)
    const [showCreateBoxDialog, setShowCreateBoxDialog] = useState<boolean>(false)
    const {data: boxes} = useLiveQuery((q) => q.from({box: boxCollection}))

    const currentBox = boxes.find(box => box.id === currentBoxId)

    return (
        <>
            <CreateBoxDialog open={showCreateBoxDialog} onOpenChange={setShowCreateBoxDialog}/>
            <BreadcrumbItem>
                <DropdownMenu>
                    <DropdownMenuTrigger className={"focus:outline-none"}>
                        {currentBox?.name ?? "Keine Box"}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">

                        {boxes.map(box => <DropdownMenuItem className="gap-2 p-2" key={box.id}
                                                            onSelect={() => selectedBox$.selectBox(box.id)}>
                            <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                                <FolderIcon className="size-4"/>
                            </div>
                            <div className="text-muted-foreground font-medium">{box.name}</div>
                        </DropdownMenuItem>)}
                        {boxes.length > 0 && <DropdownMenuSeparator/>}
                        <DropdownMenuItem className="gap-2 p-2" onSelect={() => setShowCreateBoxDialog(true)}>
                            <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                                <Plus className="size-4"/>
                            </div>
                            <div className="text-muted-foreground font-medium">Neue Box</div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </BreadcrumbItem>
        </>
    )
}