import BoxCalcResult from "./box-calc-result";
import {GehrungForm} from "@/features/box-calc/gehrung/gehrung-form";

const BoxCalculator = () => {
    return (
        <div>
            <GehrungForm/>
            <hr/>
            <h3>Ergebnis</h3>
            <BoxCalcResult/>
        </div>
    )
}

export default BoxCalculator