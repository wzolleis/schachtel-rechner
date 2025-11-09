import {
    ComboboxTrigger,
    Combobox,
    ComboboxInput,
    ComboboxEmpty,
    ComboboxContent,
    ComboboxGroup,
    ComboboxItem,
    ComboboxList, ComboboxProps
} from "@/components/ui/shadcn-io/combobox";
import {ControllerRenderProps, FieldValues, Path, useFormContext} from "react-hook-form";
import {EditBoxFormInput} from "@/features/boxes/schema/box-edit-schema";
import {FormField} from "@/components/ui/form";

export type ComboboxData = {
    value: string,
    label: string
}

export type ComboboxFormFieldProps<TFieldValues extends FieldValues, TName extends Path<TFieldValues>> =
    {
        field: ControllerRenderProps<TFieldValues, TName>;
        data: ComboboxData[]
    } & ComboboxProps
export type BoxSideConnectionTypeInputProps = {} & ComboboxProps

export const ComboboxFormField =
    <TFieldValues extends FieldValues, TName extends Path<TFieldValues>, >(props: ComboboxFormFieldProps<TFieldValues, TName>) => {
        const form = useFormContext<EditBoxFormInput>()
        const {data} = props;


        return (
            <FormField
                control={form.control}
                name="sideConnectionType"
                render={(_props) => {
                    return (
                        <Combobox
                            data={data}
                            onOpenChange={(open) => console.log('Combobox is open?', open)}
                            onValueChange={(newValue) => console.log('Combobox value:', newValue)}
                            type="framework"
                        >
                            <ComboboxTrigger/>
                            <ComboboxContent>
                                <ComboboxInput/>
                                <ComboboxEmpty/>
                                <ComboboxList>
                                    <ComboboxGroup>
                                        {data.map((item) => (
                                            <ComboboxItem key={item.value} value={item.value}>
                                                {item.label}
                                            </ComboboxItem>
                                        ))}
                                    </ComboboxGroup>
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    )
                }}
            />
        )
    }