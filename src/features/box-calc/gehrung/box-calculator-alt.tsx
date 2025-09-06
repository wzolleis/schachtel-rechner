import BoxCalcResult from "./box-calc-result";
import {BoxCalcForm} from "@/features/box-calc/gehrung/box-calc-form";

const BoxCalculatorAlt = () => {
    return (
        <div>
            <BoxCalcForm/>
            <hr/>
            <h3>Ergebnis Alt</h3>
            <BoxCalcResult/>
        </div>
    )
}

export default BoxCalculatorAlt