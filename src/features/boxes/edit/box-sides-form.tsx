import {FormField} from "@/components/ui/form";
import {useFormContext} from "react-hook-form";
import {EditBoxFormSchema} from "@/features/boxes/edit/box-edit-form";
import {useBoolean} from "@/hooks/use-boolean";
import {CheckboxFormField} from "@/components/form/checkbox-form-field";
import {useCallback} from "react";
import {InputFormField} from "@/components/form/input-form-field";

export const BoxSidesForm = () => {
    const form = useFormContext<EditBoxFormSchema>();
    const {value: sameThickness, setValue: setSameThickness} = useBoolean(true)
    const {value: sameFrontAndBack, setValue: setSameFrontAndBack} = useBoolean(true)
    const {value: sameLeftAndRight, setValue: setSameLeftAndRight} = useBoolean(true)

    const onSameThickness = useCallback((checked: boolean) => {
        setSameThickness(checked)
        form.setValue('sides.sameThickness', checked)
    }, [setSameThickness, form])

    const onSameFrontAndBack = useCallback((checked: boolean) => {
        setSameFrontAndBack(checked)
        form.setValue('sides.sameFrontAndBack', checked)
    }, [setSameFrontAndBack, form])

    const onSameLeftAndRight = useCallback((checked: boolean) => {
        setSameLeftAndRight(checked)
        form.setValue('sides.sameLeftAndRight', checked)
    }, [setSameLeftAndRight, form])

    return (
        <div className={'mt-4 p-4 flex flex-col gap-4 bg-gray-200:35'}>
            <div className="flex flex-row gap-4 ">
                <FormField
                    control={form.control}
                    name="sides.sameThickness"
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
                    name="sides.sameFrontAndBack"
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
                    name="sides.sameLeftAndRight"
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
                name="sides.front.thickness.value"
                render={(props) => (
                    <InputFormField {...props}
                                    label={'Materialstärke'}
                                    description={'Materialstärke in mm'}
                                    type={'number'}
                                    placeholder={'10'}
                    />
                )}
            />
            <FormField
                control={form.control}
                name="sides.front.height.value"
                render={(props) => (
                    <InputFormField {...props}
                                    label={'Höhe der Wände'}
                                    description={'Höhe in mm'}
                                    type={'number'}
                                    placeholder={'10'}
                    />
                )}
            />
            <FormField
                control={form.control}
                name="sides.front.width.value"
                render={(props) => (
                    <InputFormField {...props}
                                    label={'Breite'}
                                    description={'Breite in mm'}
                                    type={'number'}
                                    placeholder={'10'}
                    />
                )}
            />
            <FormField
                control={form.control}
                name="sides.left.width.value"
                render={(props) => (
                    <InputFormField {...props}
                                    label={'Tiefe'}
                                    description={'Breite in mm'}
                                    type={'number'}
                                    placeholder={'10'}
                    />
                )}
            />
        </div>
    )
}