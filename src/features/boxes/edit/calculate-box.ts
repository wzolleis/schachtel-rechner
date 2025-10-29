import {EditBoxFormInput, EditBoxFormSchema} from "@/features/boxes/schema/box-edit-schema";
import {BoxCalculator} from "@/lib/box-calc-utils";
import {Box, BoxSchema} from "@/features/boxes/schema/box-schema";
import {z} from "zod";

export const calculateBox = (box: Box, values: EditBoxFormInput) => {
    const formValues = z.parse(EditBoxFormSchema, values)

    const calculatedBoxSides = new BoxCalculator().calculateBoxSidesFrom({
        thickness: formValues.thickness,
        depth: formValues.depth,
        height: formValues.height,
        width: formValues.width,
    })

    return z.parse(BoxSchema,
        {
            ...box,
            sides: calculatedBoxSides
        }
    )
}