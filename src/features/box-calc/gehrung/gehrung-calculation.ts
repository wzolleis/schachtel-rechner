import {observable} from "@legendapp/state";
import {withUnit} from "@/lib/unit-utils";


export const GehrungDataStore$ = observable({
    length: 600,
    width: 300,
    height: 100,
    thickness: 10,
    outer: true,
    outerDimension: 100,
    falz: 5,
    //Computed values
    innen: () => {
        const store = GehrungDataStore$
        const thickness = store.thickness.get()
        let length: number, width: number
        
        if (store.outer.get()) {
            // When using outer dimensions, subtract thickness to get inner dimensions
            length = store.length.get() - (2 * thickness)
            width = store.width.get() - (2 * thickness)
        } else {
            // When using inner dimensions, use them directly
            length = store.length.get()
            width = store.width.get()
        }
        
        return {
            length: withUnit(length, {unit: "mm"}), 
            width: withUnit(width, {unit: "mm"})
        }
    },
    boden: () => {
        const store = GehrungDataStore$
        const innen = store.innen.get()
        const falz = store.falz.get()
        
        return {
            size: {
                length: withUnit(innen.length.value + (2 * falz), {unit: "mm"}),
                width: withUnit(innen.width.value + (2 * falz), {unit: "mm"})
            }
        }
    },
    seite: () => {
        const store = GehrungDataStore$
        const length = store.length.get()
        const height = store.height.get()
        const thickness = store.thickness.get()
        
        return {
            size: {
                length: withUnit(length, {unit: "mm"}),
                width: withUnit(height, {unit: "mm"})
            },
            distance: withUnit(length - thickness, {unit: "mm"})
        }
    },
    front: () => {
        const store = GehrungDataStore$
        const width = store.width.get()
        const height = store.height.get()
        const thickness = store.thickness.get()
        
        return {
            size: {
                length: withUnit(width, {unit: "mm"}),
                width: withUnit(height, {unit: "mm"})
            },
            distance: withUnit(width - thickness, {unit: "mm"})
        }
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