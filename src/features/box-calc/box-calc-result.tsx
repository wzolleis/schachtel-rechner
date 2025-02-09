import {useActionData} from "react-router";
import {BoxCalcResultData} from "./index"
import AreaView from "../../common/components/area-view";

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
    console.log('boden', data.boden)

    return (
        <div className={'p-3 bg-gradient-to-tr bg-secondary-subtle'}>
            <AreaView label={'Boden'} size={data.boden.size}/>
            <hr/>
            <AreaView label={'Seite'} size={data.seite.size} distance={data.seite.distance}/>
            <hr/>
            <AreaView label={'Front'} size={data.front.size} distance={data.front.distance}/>

        </div>
    )
}

export default BoxCalcResult