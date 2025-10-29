import {Box, BoxSide, BoxSides} from "@/features/boxes/schema/box-schema";
import {v4 as uuidv4} from 'uuid';

const migrationSwitches = {
    migrate_box: true,
    add_id_to_sides: true
}

export const migrateBox = (box: Box) => {
    if (!migrationSwitches.migrate_box) return box
    const sides = migrateBoxSides(box.sides)
    return {
        ...box,
        sides
    }
}

type BoxSideKeys = keyof BoxSides

const migrateBoxSides = (boxSides: BoxSides): BoxSides => {
    const entries = Object.entries(boxSides)
    const migratedSides: Partial<BoxSides> = {}

    entries.map((entry) => {
        const key: BoxSideKeys = entry[0] as BoxSideKeys
        const value = entry[1]
        migratedSides[key] = migrateBoxSide(value)
    })
    return migratedSides as BoxSides
}

const migrateBoxSide = (boxSide: BoxSide): BoxSide => {
    if (migrationSwitches.add_id_to_sides) {
        return migrateBoxSide_add_id_to_sides(boxSide)
    }
    else {
        return boxSide
    }
}

export const migrateBoxSide_add_id_to_sides = (boxSide: BoxSide): BoxSide => {
    if (boxSide.id != undefined) {
        return boxSide
    }
    return {
        ...boxSide,
        id: uuidv4()
    }
}