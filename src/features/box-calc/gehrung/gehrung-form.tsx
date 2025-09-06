import {Button} from "@/components/ui/button";
import {
    Form as FormUi,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {GehrungFormData, GehrungSchema} from "@/features/box-calc/gehrung/index";
import {Form as RouterForm} from "react-router";
import {z} from "zod";

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
        defaultValues,
    })

    // 2. Define a submit handler.
    function onSubmit(values: GehrungFormData) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log('onSubmit', values)
        const validation = z.safeParse(GehrungSchema, values)
        console.log('validation', validation)
    }

    return (
        <>
            <h4 className={'my-4 p-4 text-center text-xl bg-yellow-50 alert-heading font-bold'}>Gehrung</h4>

            <FormUi {...form}>
                <RouterForm onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                            method={'POST'}
                >
                    <FormField
                        control={form.control}
                        name="thickness"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Material-Dicke (mm)</FormLabel>
                                <FormControl>
                                    <Input placeholder="10" {...field} type={'number'}/>
                                </FormControl>
                                <FormDescription>Material-Stärke der einzelnen Wände</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="length"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Länge [mm]</FormLabel>
                                <FormControl>
                                    <Input placeholder="10" {...field} type={'number'}/>
                                </FormControl>
                                <FormDescription>Länge der Seitenwand</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="width"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Breite [mm]</FormLabel>
                                <FormControl>
                                    <Input placeholder="10" {...field} type={'number'}/>
                                </FormControl>
                                <FormMessage/>
                                <FormDescription>Breite der Front/Rückseite</FormDescription>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="height"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Höhe [mm]</FormLabel>
                                <FormControl>
                                    <Input placeholder="10" {...field} type={'number'}/>
                                </FormControl>
                                <FormMessage/>
                                <FormDescription>Höhe der Wände</FormDescription>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="falz"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Falztiefe [mm]</FormLabel>
                                <FormControl>
                                    <Input placeholder="10" {...field} type={'number'}/>
                                </FormControl>
                                <FormMessage/>
                                <FormDescription>Der Falz für den Deckel/Boden</FormDescription>
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Berechnen</Button>
                </RouterForm>
            </FormUi>
        </>
    )
}