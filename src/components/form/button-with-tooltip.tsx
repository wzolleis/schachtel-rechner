import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {LucideIcon} from "lucide-react";
import {TooltipProps} from "@radix-ui/react-tooltip";
import {cn} from "@/lib/utils";

export interface ButtonWithTooltipProps extends TooltipProps {
    Icon?: LucideIcon
    tooltipText: string;
    iconClasses?: string
    buttonClasses?: string
    handleButtonClick: () => void
}

export const ButtonWithTooltip = (props: ButtonWithTooltipProps) => {
    const {handleButtonClick, buttonClasses, iconClasses, tooltipText, Icon} = props;
    const buttonClazzes = cn("size-8 p-0 hover:bg-gray-100", buttonClasses)
    const iconClazzes = cn(iconClasses, "size-4")
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleButtonClick}
                    className={buttonClazzes}

                >
                    {Icon && <Icon className={iconClazzes}/>}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{tooltipText}</p>
            </TooltipContent>
        </Tooltip>
    )
}