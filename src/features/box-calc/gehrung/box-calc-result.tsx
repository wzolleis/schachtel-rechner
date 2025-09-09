import {BoxCalcResultData} from "./index"
import AreaView from "../../../common/components/area-view";

interface BoxCalcResultProps {
    data: BoxCalcResultData | null
}

export const BoxCalcResult = ({data}: BoxCalcResultProps) => {
    if (!data) return null

    return (
        <div className="space-y-8">
            <div className="border-l-2 border-gray-900 pl-4">
                <AreaView label={'BODEN'} size={data.boden.size}/>
            </div>
            
            <div className="border-l-2 border-gray-900 pl-4">
                <AreaView label={'SEITE'} size={data.seite.size} distance={data.seite.distance}/>
            </div>
            
            <div className="border-l-2 border-gray-900 pl-4">
                <AreaView label={'FRONT'} size={data.front.size} distance={data.front.distance}/>
            </div>
        </div>
    )
}

export default BoxCalcResult