import {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";


export const PageTitle = ({children, className}: PropsWithChildren<{className?: string}>) => {
    return <h1 className={cn("text-2xl font-light tracking-wide mb-2", className)}>{children}</h1>
}

export const PageHeaderSeparator = () => {
    return <div className={"w-16 bg-muted-foreground h-px"}></div>
}

export const PageDescription = ({children, className}: PropsWithChildren<{className?: string}>) => {
    return <p className={cn("text-sm text-muted-foreground mt-4 font-mono", className)}>{children}</p>
}