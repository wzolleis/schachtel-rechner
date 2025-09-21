import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Box, BoxSchema} from "@/features/boxes/box-schema";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {useFindAllProjects} from "@/features/projects/repo/project-queries";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {toast} from "sonner"


const formSchema = z.object({
    box: BoxSchema
})

export interface BoxEditFormProps {
    box: Box
}

export const BoxEditForm = (props: BoxEditFormProps) => {
    const projects = useFindAllProjects()
    const {box} = props
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {box: {...box}},
    })

    const onSubmit = (data: BoxEditFormProps) => {
        console.log(data)

        toast("You submitted the following values", {
            description: (
                <div className="mt-2 w-[320px] rounded-mdbg-neutral-950 p-4">
                    <div className="text-xs text-black">{JSON.stringify(data, null, 2)}</div>
                </div>
            ),
        })
    }

    const projectId = form.watch('box.projectId')
    const projectName = projects.find(p => p.id === projectId)?.name || 'Kein Projekt'

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="box.projectId"
                        render={({field}) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Projekt</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-[200px] justify-between",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {projectName ? projectName : "Select Project"}
                                                <ChevronsUpDown className="opacity-50"/>
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput
                                                placeholder="Projekte durchsuchen..."
                                                className="h-9"
                                            />
                                            <CommandList>
                                                <CommandEmpty>Kein Projekt gefunden</CommandEmpty>
                                                <CommandGroup>
                                                    {projects.map((p) => (
                                                        <CommandItem
                                                            value={p.id}
                                                            key={p.id}
                                                            onSelect={() => {
                                                                form.setValue("box.projectId", p.id)
                                                            }}
                                                        >
                                                            {p.name}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    p.id === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    Das Projekt zu der die Box gehört
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="box.name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormDescription>Der Name der Box.</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}