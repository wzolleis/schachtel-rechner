import BoxCalcForm from "./box-calc-form";
import BoxCalcResult from "./box-calc-result";

const BoxCalculator = () => {
    return (
        <div>
            <h3>Berechne die Teile für eine Box mit Gehrung</h3>
            <h4>Die angegebenen Maße sind die Aussenmaße in mm</h4>
            <BoxCalcForm/>
            <hr/>
            <h3>Ergebnis</h3>
            <BoxCalcResult/>
        </div>
    )
}

export default BoxCalculator