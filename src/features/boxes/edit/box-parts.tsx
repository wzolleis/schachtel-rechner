import {Box} from "@/features/boxes/schema/box-schema";

export interface BoxPartProps {
    box: Box
}

export const BoxParts = ({box}: BoxPartProps) => {
    return (
        <div>{JSON.stringify(box, undefined, 2)}!</div>
    )
}