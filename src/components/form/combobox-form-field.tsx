import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    ComboboxProps,
    ComboboxTrigger
} from "@/components/ui/shadcn-io/combobox";
import {ControllerRenderProps, FieldValues, Path} from "react-hook-form";
import {FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {ComponentProps} from "react";

export type ComboboxItemType = {
    label: string,
    value: string,
    key: string
}

export type ComboboxFormFieldProps< TFieldValues extends FieldValues, TName extends Path<TFieldValues>> =
    {
        label: string
        description: string
        field: ControllerRenderProps<TFieldValues, TName>;
        data: ComboboxItemType[]
    } & ComboboxProps & ComponentProps<"div">


export const ComboboxFormField =
    <TFieldValues extends FieldValues, TName extends Path<TFieldValues>, >(props: ComboboxFormFieldProps<TFieldValues, TName>) => {
        const {data, label, description, className, field} = props;

        return (
            <FormItem className={className}>
                <FormLabel
                    className="text-xs font-mono text-gray-700 uppercase tracking-wider">{label}</FormLabel>
                    <Combobox {...props}>
                        <ComboboxTrigger/>
                        <ComboboxContent>
                            <ComboboxInput {...field}/>
                            <ComboboxEmpty/>
                            <ComboboxList>
                                <ComboboxGroup>
                                    {data.map((item) => (
                                        <ComboboxItem key={item.key}
                                                      value={item.value}>
                                            {item.label}
                                        </ComboboxItem>
                                    ))}
                                </ComboboxGroup>
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>
                <FormDescription className="text-xs text-gray-500 font-mono mt-1">
                    {description}
                </FormDescription>
                <FormMessage/>
            </FormItem>
        )
    }