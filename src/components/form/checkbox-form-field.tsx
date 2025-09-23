import {ControllerRenderProps, FieldValues, Path} from "react-hook-form";
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxProps} from "@radix-ui/react-checkbox";

type CheckboxFormFieldProps<TFieldValues extends FieldValues, TName extends Path<TFieldValues>> =
    {
        field: ControllerRenderProps<TFieldValues, TName>;
    } & CheckboxProps & { label: string } & React.ComponentProps<"div">

export const CheckboxFormField =
    <TFieldValues extends FieldValues, TName extends Path<TFieldValues>, >(props: CheckboxFormFieldProps<TFieldValues, TName>) => {
        const {defaultChecked, onCheckedChange, label, className, disabled} = props;

        return (
            <FormItem className={className}>
                <FormControl>
                    <Checkbox defaultChecked={defaultChecked}
                              onCheckedChange={onCheckedChange}
                              disabled={disabled}
                    />
                </FormControl>
                <FormLabel className="text-sm font-normal">{label}</FormLabel>
                <FormMessage/>
            </FormItem>
        )
    }