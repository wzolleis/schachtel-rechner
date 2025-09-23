import {ControllerRenderProps, FieldValues, Path} from "react-hook-form";
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import * as React from "react";
import {Input} from "@/components/ui/input";

type InputProps = React.ComponentProps<"input">

type CheckboxFormFieldProps<TFieldValues extends FieldValues, TName extends Path<TFieldValues>> =
    {
        field: ControllerRenderProps<TFieldValues, TName>;
    } & InputProps & { label: string, description: string } & React.ComponentProps<"div">

export const InputFormField =
    <TFieldValues extends FieldValues, TName extends Path<TFieldValues>, >(props: CheckboxFormFieldProps<TFieldValues, TName>) => {
        const {label, description, className, field, type, placeholder} = props;

        return (
            <FormItem className={className}>
                <FormLabel
                    className="text-xs font-mono text-gray-700 uppercase tracking-wider">{label}</FormLabel>
                <FormControl>
                    <Input
                        placeholder={placeholder}
                        {...field}
                        type={type}
                        className="border-gray-300 border-0 border-b-2 rounded-none bg-transparent px-0 py-2 focus:border-gray-900 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none font-mono"
                    />
                </FormControl>
                <FormDescription className="text-xs text-gray-500 font-mono mt-1">
                    {description}
                </FormDescription>
                <FormMessage/>
            </FormItem>
        )
    }