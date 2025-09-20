import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Box, BoxSchema} from "@/features/boxes/box-schema";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";

const formSchema = z.object({
    box: BoxSchema
})

export interface BoxEditFormProps {
    box: Box
}

export const BoxEditForm = (props: BoxEditFormProps) => {
    //const projects = useFindAllProjects()
    const {box} = props
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            box
        },
    })

    const onSubmit = (values: BoxEditFormProps) => {
        console.log(values)
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="box.projectId"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Projekt</FormLabel>
                                <FormControl>
                                    <Input placeholder="Projekt" {...field} />
                                </FormControl>
                                <FormDescription>Das Projekt der Box.</FormDescription>
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