export type Unit = "mm" | "cm"

export type ValueWithUnitDefinition =  {
    value: number
    unit: Unit
    display: (unit?: Unit) => string
}

export class ValueWithUnit {
    private currentUnit: Unit = "mm"
    private currentValue: number

    constructor({value, unit}: {value: number, unit?: Unit}) {
        this.currentValue = value
        if (unit) {
            this.currentUnit = unit
        }
    }
    get value() {
        return this.currentValue
    }

    get unit() {
        return this.currentUnit
    }

    public display(unit?: Unit): string {
        const targetUnit = unit || this.currentUnit
        const convertedValue = this.convertTo(targetUnit)
        return `${convertedValue}${targetUnit}`
    }

    private convertTo(targetUnit: Unit): number {
        if (this.currentUnit === targetUnit) {
            return this.currentValue
        }
        
        if (this.currentUnit === "mm" && targetUnit === "cm") {
            return this.currentValue / 10
        }
        
        if (this.currentUnit === "cm" && targetUnit === "mm") {
            return this.currentValue * 10
        }
        
        return this.currentValue
    }
}




export function withUnit(value: number, {unit = "mm"}: {unit: Unit}) {
    return new ValueWithUnit({value, unit})
}
