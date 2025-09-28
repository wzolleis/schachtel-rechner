import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {Input} from "@/components/ui/input";
import {useFormContext} from "react-hook-form";
import {useFindAllProjects} from "@/features/projects/repo/project-queries";
import {EditBoxFormInput} from "@/features/boxes/edit/box-edit-form-types";

export const BoxCommonSettingsForm = () => {
    const form = useFormContext<EditBoxFormInput>()
    const projectId = form.watch('projectId')
    const projects = useFindAllProjects()
    const projectName = projects.find(p => p.id === projectId)?.name || 'Kein Projekt'

    return (
        <>
            <FormField
                control={form.control}
                name="projectId"
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
                                                        form.setValue("projectId", p.id)
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
                name="name"
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
        </>

    )
}