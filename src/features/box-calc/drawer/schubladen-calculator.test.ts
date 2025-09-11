import {calculateDrawer} from "@/features/box-calc/drawer/schubladen-calculator";
import {expect} from "vitest";

describe("Calculator", () => {
    const box = {
        height: 100,
        width: 600,
        depth: 600,
    }

    it('should calculate height of drawers', () => {
        const boxWithDrawer = calculateDrawer(box, {
            count: 4,
            distance: 5
        })

        expect(boxWithDrawer.drawer).toBeDefined()
        expect(boxWithDrawer.drawer.count).toBe(4)
        expect(boxWithDrawer.drawer.height).toBe(18)
    })

    it.each([
        [1, 5, 90], // count, distance, expected
        [1, 0, 100],
        [1, 1, 98],
        [4, 5, 18]
    ])("calculate height of %i drawer with distance %i", (count, distance, expected) => {
        const boxWithDrawer = calculateDrawer(box, {
            count,
            distance
        })
        expect(boxWithDrawer.drawer.height).toBe(expected)
    })
})