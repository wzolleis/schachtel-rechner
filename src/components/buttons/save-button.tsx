import {Button, buttonVariants} from "@/components/ui/button";
import {VariantProps} from "class-variance-authority";
import * as React from "react";

type SaveButtonProps = VariantProps<typeof buttonVariants> & {
    asChild?: boolean
} &  React.ComponentProps<"button">

export const SaveButton = (props: SaveButtonProps) => {
    return (
        <Button {...props}>
           Speichern
        </Button>
    )
}