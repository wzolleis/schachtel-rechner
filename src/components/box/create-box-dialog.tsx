import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {createId} from "@paralleldrive/cuid2";
import {startTransition} from "react";
import {boxCollection} from "@/features/box/box-collection";
import {selectedBox$} from "@/features/box/box-store";
import {CreateBox, createBoxSchema} from "@/features/box/box-schema";
import {defaultSides} from "@/features/box/default-box";
import {use$} from "@legendapp/state/react";
import {projectStore$} from "@/features/project/project-store";
import {eq, useLiveQuery} from "@tanstack/react-db";
import {projectCollection} from "@/features/project/project-collection";

interface CreateBoxDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function CreateBoxDialog({open, onOpenChange}: CreateBoxDialogProps) {
    const projectId = use$(projectStore$.currentProjectId)
    const {data: projects} = useLiveQuery((q) =>
        q.from({projects: projectCollection})
            .where(
                ({projects}) => eq(projects.id, projectId)
            ))

    const form = useForm<CreateBox>({
        resolver: zodResolver(createBoxSchema),
        defaultValues: {
            name: "",
            projectId: projects.length === 1 ? `${projects[0]?.name}` : 'Kein Projekt',
        }
    })

    const onValid = (data: CreateBox) => {
        console.log('submitHandler: create box ', data)

        const newBox = ({id: createId(), name: data.name, projectId: data.projectId, sides: defaultSides})
        startTransition(() => {
            boxCollection.insert(newBox)
            //We can "select" it immediately
            form.reset()
            selectedBox$.selectBox(newBox.id)
        })
        onOpenChange(false)
    }

    // @ts-ignore
    const onInvalid = (error) => {
        console.log(error)
    }

    const handleSubmit = form.handleSubmit(onValid, onInvalid)

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] rounded-none">
                <DialogHeader>
                    <DialogTitle className="font-medium tracking-wider uppercase">Neue Box erstellen</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={handleSubmit}
                          className="space-y-4">
                        <FormField
                            control={form.control}
                            name="projectId"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-mono uppercase tracking-wider">Projekt-Id</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Aktives Projekt"
                                            {...field}
                                            readOnly={true}
                                            className="border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-mono uppercase tracking-wider">Box Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Meine Box"
                                            {...field}
                                            className="border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end gap-3 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => onOpenChange(false)}
                                className="rounded-none font-mono uppercase tracking-wider"
                            >
                                Abbrechen
                            </Button>
                            <Button
                                type="submit"
                                className="rounded-none font-mono uppercase tracking-wider"
                            >
                                Box erstellen
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}