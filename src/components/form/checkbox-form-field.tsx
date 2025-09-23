import {ControllerFieldState, ControllerRenderProps, FieldValues, Path} from "react-hook-form";
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxProps} from "@radix-ui/react-checkbox";
import type {UseFormStateReturn} from "react-hook-form/dist/types";
import * as React from "react";

type CheckboxFormFieldProps<TFieldValues extends FieldValues, TName extends Path<TFieldValues>> =
    {
        field: ControllerRenderProps<TFieldValues, TName>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<TFieldValues>;
    } & CheckboxProps & { label: string } & React.ComponentProps<"div">

export const CheckboxFormField =
    <TFieldValues extends FieldValues, TName extends Path<TFieldValues>, >(props: CheckboxFormFieldProps<TFieldValues, TName>) => {
        const {defaultChecked, onCheckedChange, label} = props;
        return (
            <FormItem className={props.className}>
                <FormControl {...props}>
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