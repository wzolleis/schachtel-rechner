import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {GehrungFormData, GehrungSchema} from "@/features/box-calc/gehrung/index";
import {AspectRatio} from "@/components/ui/aspect-ratio";

const defaultValues: GehrungFormData = {
    length: 600,
    width: 300,
    thickness: 10,
    height: 100,
    outer: true,
    outerDimension: 100,
    falz: 5
}

export const GehrungForm = () => {
    const form = useForm<GehrungFormData>({
        resolver: zodResolver(GehrungSchema),
        defaultValues
    })

    // 2. Define a submit handler.
    function onSubmit(values: GehrungFormData) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const width = form.watch('width')
    const height = form.watch('height')

    return (
        <>
            <h4 className={'my-4 p-4 text-center text-xl bg-yellow-50 alert-heading font-bold'}>Gehrung</h4>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="thickness"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Material-Dicke (mm)</FormLabel>
                                <FormControl>
                                    <Input placeholder="10" {...field} type={'number'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="height"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Höhe</FormLabel>
                                <FormControl>
                                    <Input placeholder="10" {...field} type={'number'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="width"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Breite</FormLabel>
                                <FormControl>
                                    <Input placeholder="10" {...field} type={'number'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />


                    <AspectRatio ratio={width / height} className="bg-red-800 rounded-lg"/>
                    <Button type="submit">Berechnen</Button>
                </form>
            </Form>
        </>
    )
}