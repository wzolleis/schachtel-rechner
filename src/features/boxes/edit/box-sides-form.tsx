import {FormField} from "@/components/ui/form";
import {useFormContext} from "react-hook-form";
import {InputFormField} from "@/components/form/input-form-field";
import {CheckboxFormField} from "@/components/form/checkbox-form-field";
import {EditBoxFormInput} from "@/features/boxes/schema/box-edit-schema";
import {DimensionSeparator} from "@/components/form/dimension-separator";
import {Box} from "@/features/boxes/schema/box-schema";

export const BoxSidesForm = ({box: _box}: { box: Box | undefined }) => {
    const form = useFormContext<EditBoxFormInput>()

    return (
        <div className={'mt-4 p-4 flex flex-col gap-4 bg-gray-200:35'}>
            <div className="flex flex-rows gap-4 ">
                <FormField
                    control={form.control}
                    name="simpleSideDefinition"
                    render={(props) => {
                        return (
                            <CheckboxFormField {...props}
                                               className="flex flex-row items-center gap-2"
                                               label={"Gleiche Materialstärke"}
                                               defaultChecked={true}
                                               disabled={true}
                            />
                        )
                    }}
                />
            </div>

            <FormField
                control={form.control}
                name="thickness.value"
                render={(props) => (
                    <InputFormField {...props}
                                    label={'Materialstärke'}
                                    description={'Materialstärke in mm'}
                                    type={'number'}
                                    placeholder={'10'}
                    />
                )}
            />
            <div className={'mt-4 flex flex-row gap-4'}>
                <FormField
                    control={form.control}
                    name="height.value"
                    render={(props) => (
                        <>
                            <InputFormField {...props}
                                            label={'Höhe'}
                                            description={'Höhe in mm'}
                                            type={'number'}
                                            placeholder={'10'}
                            />
                            <DimensionSeparator/>
                        </>
                    )}
                />

                <FormField
                    control={form.control}
                    name="width.value"
                    render={(props) => (
                        <>
                            <InputFormField {...props}
                                            label={'Breite'}
                                            description={'Breite in mm'}
                                            type={'number'}
                                            placeholder={'10'}
                            />
                            <DimensionSeparator/>
                        </>
                    )}
                />
                <FormField
                    control={form.control}
                    name="depth.value"
                    render={(props) => (
                        <InputFormField {...props}
                                        label={'Tiefe'}
                                        description={'Tiefe in mm'}
                                        type={'number'}
                                        placeholder={'10'}
                        />
                    )}
                />
            </div>
        </div>
    )
}