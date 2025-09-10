import {BoxCalcResultData} from "./index"
import AreaView from "../../../common/components/area-view";
import {useEffect, useState} from "react";
import {getObjectDiff} from "@/common/calculations/object-diff";
import {clsx} from "clsx";

interface BoxCalcResultProps {
    data: BoxCalcResultData | null
}

export const BoxCalcResult = ({data}: BoxCalcResultProps) => {
    const [result, setResult] = useState<BoxCalcResultData | null>(data)

    const [changedFields, setChangedFields] = useState<Partial<BoxCalcResultData | null>>(null)

    useEffect(() => {
        const changes = getObjectDiff(result || {}, data || {})
        if (Object.keys(changes).length > 0) {
            setTimeout(() => setChangedFields(null), 3000)
        }
        console.log('box calc result with changes: ', changes)
        setChangedFields(changes)
        setResult(data)
    }, [data])

    if (result === null) return null

    const containerClasses = {
        boden: clsx("border-l-2 border-gray-800 pl-4", {
            'border-red-500': !!changedFields?.boden
        }),
        seite: clsx("border-l-2 border-gray-900 pl-4", {
            'border-red-500': !!changedFields?.seite
        }),
        front: clsx("border-l-2 border-gray-900 pl-4", {
            'border-red-500': !!changedFields?.front
        }),
    }

    return (
        <div className="space-y-8">
            <div className={containerClasses.boden}>
                <AreaView label={'BODEN'} size={result.boden.size}/>
            </div>

            <div className={containerClasses.seite}>
                <AreaView label={'SEITE'} size={result.seite.size} distance={result.seite.distance}/>
            </div>

            <div className={containerClasses.front}>
                <AreaView label={'FRONT'} size={result.front.size} distance={result.front.distance}/>
            </div>
        </div>
    )
}

export default BoxCalcResult