import {BoxSide, BoxSides, ValueWithUnit} from "@/features/boxes/schema/box-schema";

/**
 * Berechnet eine Box aus der Höhe, Breite, Tiefe und Materialstärke
 */
export class BoxCalculator {
    /**
     * Berechnet die Box aus den Werten, alle Werte sind Außenmaße
     * Front u. Rückseite sind zwischen den Seiten eingebettet
     * @param width Breite
     * @param height Höhe
     * @param depth Tiefe
     * @param thickness Materialstärke
     */
    calculateBoxSidesFrom = ({
                                 width,
                                 height,
                                 depth,
                                 thickness
                             }: {
        width: ValueWithUnit,
        depth: ValueWithUnit,
        height: ValueWithUnit,
        thickness: ValueWithUnit,
    }): BoxSides => {
        const side: BoxSide = {
            thickness: {...thickness},
            height: {...height},
            width: {...depth}
        }

        const front: BoxSide = {
            thickness: {...thickness},
            height: {...height},
            width: {...width,}
        }

        // noinspection JSSuspiciousNameCombination
        const top: BoxSide = {
            thickness: {...thickness},
            width: {...width},
            height: {...depth}
        }


        return {
            front,
            back: front,
            left: side,
            right: side,
            top,
            bottom: top
        }
    }
}