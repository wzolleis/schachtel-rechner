import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Checkbox} from "@/components/ui/checkbox"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {useEffect} from "react"
import {GehrungSchema, GehrungSchemaInput} from "@/features/box-calc/gehrung/index";
import {GehrungDataStore$} from "@/features/box-calc/gehrung/gehrung-calculation";

const defaultValues: GehrungSchemaInput = {
    length: 600,
    width: 300,
    thickness: 10,
    height: 100,
    outer: true,
    outerDimension: 100,
    falz: 5
}

export const GehrungForm = () => {
    const form = useForm<GehrungSchemaInput>({
        resolver: zodResolver(GehrungSchema),
        defaultValues,
        mode: "onChange"
    })

    const watchedValues = form.watch()

    useEffect(() => {
        const subscription = form.watch((value) => {
            const validatedData = GehrungSchema.safeParse(value)
            if (validatedData.success) {
                GehrungDataStore$.assign(validatedData.data)
            }
        })
        return () => subscription.unsubscribe()
    }, [form])

    const onSubmit = form.handleSubmit(data => {
        GehrungDataStore$.assign(data)
    })

    return (
        <div className="border border-gray-200">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-sm font-medium text-gray-900 tracking-wider uppercase">Eingabe</h2>
            </div>
            <div className="p-6">
                <Form {...form}>
                    <form onSubmit={onSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FormField
                                control={form.control}
                                name="thickness"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-mono text-gray-700 uppercase tracking-wider">Material-Dicke</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="10" 
                                                {...field} 
                                                type="number"
                                                className="border-gray-300 border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:border-gray-900 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormDescription className="text-xs text-gray-500 font-mono mt-1">
                                            Materialstärke in mm
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="length"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-mono text-gray-700 uppercase tracking-wider">Länge</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="600" 
                                                {...field} 
                                                type="number"
                                                className="border-gray-300 border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:border-gray-900 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormDescription className="text-xs text-gray-500 font-mono mt-1">
                                            Seitenwand in mm
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="width"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-mono text-gray-700 uppercase tracking-wider">Breite</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="300" 
                                                {...field} 
                                                type="number"
                                                className="border-gray-300 border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:border-gray-900 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormDescription className="text-xs text-gray-500 font-mono mt-1">
                                            Front/Rückseite in mm
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="height"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-mono text-gray-700 uppercase tracking-wider">Höhe</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="100" 
                                                {...field} 
                                                type="number"
                                                className="border-gray-300 border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:border-gray-900 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormDescription className="text-xs text-gray-500 font-mono mt-1">
                                            Wandhöhe in mm
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="falz"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-mono text-gray-700 uppercase tracking-wider">Falztiefe</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="5" 
                                                {...field} 
                                                type="number"
                                                className="border-gray-300 border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:border-gray-900 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormDescription className="text-xs text-gray-500 font-mono mt-1">
                                            Deckel/Boden in mm
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        
                        <div className="space-y-6 border-t border-gray-200 pt-8 mt-8">
                            <FormField
                                control={form.control}
                                name="outer"
                                render={({field}) => (
                                    <FormItem className="flex flex-row items-start space-x-4 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className="mt-1 border-gray-400 data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900"
                                            />
                                        </FormControl>
                                        <div className="space-y-1">
                                            <FormLabel className="text-xs font-mono text-gray-700 uppercase tracking-wider">Außenmaß verwenden</FormLabel>
                                            <FormDescription className="text-xs text-gray-500 font-mono">
                                                Berechnung mit Außenmaßen
                                            </FormDescription>
                                        </div>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            {watchedValues.outer && (
                                <FormField
                                    control={form.control}
                                    name="outerDimension"
                                    render={({field}) => (
                                        <FormItem className="ml-8">
                                            <FormLabel className="text-xs font-mono text-gray-700 uppercase tracking-wider">Außenmaß</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="100" 
                                                    {...field} 
                                                    type="number"
                                                    className="border-gray-300 border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:border-gray-900 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormDescription className="text-xs text-gray-500 font-mono mt-1">
                                                Gesamtmaß in mm
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            )}
                        </div>

                    </form>
                </Form>
            </div>
        </div>
    )
}