import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useFormContext} from "react-hook-form";
import {EditBoxFormSchema} from "@/features/boxes/edit/box-edit-form";
import {useBoolean} from "@/hooks/use-boolean";
import {CheckboxFormField} from "@/components/form/checkbox-form-field";
import {useCallback} from "react";

export const BoxSidesForm = () => {
    const form = useFormContext<EditBoxFormSchema>();
    const {value: sameThickness, setValue: setSameThickness} = useBoolean(true)
    const {value: sameFrontAndBack, setValue: setSameFrontAndBack} = useBoolean(true)
    const {value: sameLeftAndRight, setValue: setSameLeftAndRight} = useBoolean(true)

    const onSameThickness = useCallback((checked: boolean) => {
        setSameThickness(checked)
        form.setValue('box.sides.sameThickness', checked)
    }, [setSameThickness])

    const onSameFrontAndBack = useCallback((checked: boolean) => {
        setSameFrontAndBack(checked)
        form.setValue('box.sides.sameFrontAndBack', checked)
    }, [setSameFrontAndBack])

    const onSameLeftAndRight = useCallback((checked: boolean) => {
        setSameLeftAndRight(checked)
        form.setValue('box.sides.sameLeftAndRight', checked)
    }, [setSameLeftAndRight])

    return (
        <div className={'mt-4 p-4 flex flex-col gap-4 bg-gray-200:35'}>
            <div className="flex flex-row gap-4 ">
                <FormField
                    control={form.control}
                    name="box.sides.sameThickness"
                    render={(props) => {
                        return (
                            <CheckboxFormField {...props}
                                               className="flex flex-row items-center gap-2"
                                               label={"Gleiche Materialstärke"}
                                               defaultChecked={sameThickness}
                                               onCheckedChange={onSameThickness}
                                               disabled={true}
                            />
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name="box.sides.sameFrontAndBack"
                    render={(props) => {
                        return (
                            <CheckboxFormField {...props}
                                               className="flex flex-row items-center gap-2"
                                               label={"Gleiche Front und Rückseite"}
                                               defaultChecked={sameFrontAndBack}
                                               onCheckedChange={onSameFrontAndBack}
                                               disabled={true}
                            />
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name="box.sides.sameLeftAndRight"
                    render={(props) => {
                        return (
                            <CheckboxFormField {...props}
                                               className="flex flex-row items-center gap-2"
                                               label={"Gleiche Seiten"}
                                               defaultChecked={sameLeftAndRight}
                                               onCheckedChange={onSameLeftAndRight}
                                               disabled={true}
                            />
                        )
                    }}
                />
            </div>
            <FormField
                control={form.control}
                name="box.sides.front.thickness.value"
                render={({field}) => (
                    <FormItem>
                        <FormLabel
                            className="text-xs font-mono text-gray-700 uppercase tracking-wider">Material-Stärke
                            (Front)</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="10"
                                {...field}
                                type="number"
                                className="border-gray-300 border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:border-gray-900 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                            />
                        </FormControl>
                        <FormDescription className="text-xs text-gray-500 font-mono mt-1">
                            Materialstärke in mm
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
            />
        </div>
    )
}