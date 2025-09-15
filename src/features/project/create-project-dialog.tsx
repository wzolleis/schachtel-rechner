import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {type CreateProject, createProjectSchema} from "@/features/project/project-schema"
import {projectCollection} from "@/features/project/project-collection";
import {createId} from "@paralleldrive/cuid2";
import {projectStore$} from "@/features/project/project-store";
import {startTransition} from "react";

interface CreateProjectDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function CreateProjectDialog({open, onOpenChange}: CreateProjectDialogProps) {
    const form = useForm<CreateProject>({
        resolver: zodResolver(createProjectSchema),
        defaultValues: {
            name: ""
        }
    })

    const handleSubmit = form.handleSubmit(async (data) => {
        const newProject = ({id: createId(), name: data.name})
        startTransition(() => {
            projectCollection.insert(newProject)
            //We can "select" it immediately
            form.reset()
            projectStore$.setProject(newProject.id)
        })
        onOpenChange(false)
    })

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] rounded-none">
                <DialogHeader>
                    <DialogTitle className="font-medium tracking-wider uppercase">Neues Projekt erstellen</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-mono uppercase tracking-wider">Projektname</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Mein Projekt"
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
                                Projekt erstellen
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}