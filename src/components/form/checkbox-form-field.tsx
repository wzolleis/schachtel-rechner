import {ControllerProps, FieldValues, Path} from "react-hook-form";
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxProps} from "@radix-ui/react-checkbox";

type CheckboxFormFieldProps<TFieldValues extends FieldValues, TName extends Path<TFieldValues>> =
    ControllerProps<TFieldValues, TName> & CheckboxProps & { label: string }

export const CheckboxFormField =
    <TFieldValues extends FieldValues, TName extends Path<TFieldValues>, >(props: CheckboxFormFieldProps<TFieldValues, TName>) => {
        const {defaultChecked, onCheckedChange, label} = props;
        return (
            <FormItem
                className="flex flex-row items-center gap-2"
            >
                <FormControl>
                    <Checkbox defaultChecked={defaultChecked}
                              onCheckedChange={onCheckedChange}
                    />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                    {label}
                </FormLabel>
                <FormMessage/>
            </FormItem>
        )
    }