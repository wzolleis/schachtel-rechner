import {observable} from "@legendapp/state";
import {withUnit} from "@/lib/unit-utils";

interface GehrungInputs {
    length: number
    width: number  
    height: number
    thickness: number
    outer: boolean
    falz: number
}

// Calculate inner dimensions based on outer/inner setting
function calculateInnen(inputs: GehrungInputs) {
    const { length, width, thickness, outer } = inputs
    
    if (outer) {
        // When using outer dimensions, subtract thickness to get inner dimensions
        return {
            length: withUnit(length - (2 * thickness), {unit: "mm"}), 
            width: withUnit(width - (2 * thickness), {unit: "mm"})
        }
    } else {
        // When using inner dimensions, use them directly
        return {
            length: withUnit(length, {unit: "mm"}), 
            width: withUnit(width, {unit: "mm"})
        }
    }
}

// Calculate floor/bottom piece dimensions
function calculateBoden(inputs: GehrungInputs) {
    const innen = calculateInnen(inputs)
    const { falz } = inputs
    
    return {
        length: withUnit(innen.length.value + (2 * falz), {unit: "mm"}),
        width: withUnit(innen.width.value + (2 * falz), {unit: "mm"})
    }
}

// Calculate side piece dimensions  
function calculateSeite(inputs: GehrungInputs) {
    const { length, height, thickness } = inputs
    
    return {
        length: withUnit(length, {unit: "mm"}),
        width: withUnit(height, {unit: "mm"}),
        distance: withUnit(length - thickness, {unit: "mm"})
    }
}

// Calculate front piece dimensions
function calculateFront(inputs: GehrungInputs) {
    const { width, height, thickness } = inputs
    
    return {
        length: withUnit(width, {unit: "mm"}),
        width: withUnit(height, {unit: "mm"}), 
        distance: withUnit(width - thickness, {unit: "mm"})
    }
}








export const GehrungDataStore$ = observable({
    length: 600,
    width: 300,
    height: 100,
    thickness: 10,
    outer: true,
    falz: 5,
    // Computed values using the calculation functions
    innen: () => {
        const store = GehrungDataStore$
        return calculateInnen({
            length: store.length.get(),
            width: store.width.get(),
            height: store.height.get(),
            thickness: store.thickness.get(),
            outer: store.outer.get(),
            falz: store.falz.get()
        })
    },
    boden: () => {
        const store = GehrungDataStore$
        return calculateBoden({
            length: store.length.get(),
            width: store.width.get(),
            height: store.height.get(),
            thickness: store.thickness.get(),
            outer: store.outer.get(),
            falz: store.falz.get()
        })
    },
    seite: () => {
        const store = GehrungDataStore$
        return calculateSeite({
            length: store.length.get(),
            width: store.width.get(),
            height: store.height.get(),
            thickness: store.thickness.get(),
            outer: store.outer.get(),
            falz: store.falz.get()
        })
    },
    front: () => {
        const store = GehrungDataStore$
        return calculateFront({
            length: store.length.get(),
            width: store.width.get(),
            height: store.height.get(),
            thickness: store.thickness.get(),
            outer: store.outer.get(),
            falz: store.falz.get()
        })
    },
    boxData: () => {
        const store = GehrungDataStore$
        return {
            innen: store.innen.get(),
            boden: store.boden.get(),
            seite: store.seite.get(),
            front: store.front.get()
        }
    }
})