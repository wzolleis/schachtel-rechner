import {ValueWithUnit} from "@/features/boxes/box-schema";

export type Unit = "mm" | "cm"

export type ValueWithUnitDefinition =  {
    value: number
    unit: Unit
}



export function withUnit(value: number, {unit = "mm"}: {unit: Unit}) {
    return {value, unit} as const
}

export function getValueAs(value: ValueWithUnit, unit: Unit = "mm") {
    if (value.unit === "mm" && unit === "cm") {
        return value.value / 10
    }
    if (value.unit === "cm" && unit === "mm") {
        return value.value * 10
    }
    return value.value
}

export function displayValueAs(value: number, unit: Unit = "mm") {
    return `${value}${unit}`
}