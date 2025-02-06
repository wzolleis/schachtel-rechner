import {useActionData} from "react-router";
import {BoxCalcResultData} from "./index"

const NoResult = () => {
    return (
        <div className={'p-3 bg-gradient-to-tr bg-secondary-subtle'}>
            <h5>Noch kein Ergebnis</h5>
        </div>
    )
}

const BoxCalcResult = () => {
    const data = useActionData() as BoxCalcResultData
    if (!data) return <NoResult/>

    return (
        <div className={'p-3 bg-gradient-to-tr bg-secondary-subtle'}>
            <div>{JSON.stringify(data, null, 2)}</div>
        </div>
    )
}

export default BoxCalcResult