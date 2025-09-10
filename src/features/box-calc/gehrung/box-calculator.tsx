import BoxCalcResult from "./box-calc-result";
import {GehrungForm} from "@/features/box-calc/gehrung/gehrung-form";
import {use$} from "@legendapp/state/react";
import {GehrungDataStore$} from "@/features/box-calc/gehrung/gehrung-calculation";

const BoxCalculator = () => {
    const data = use$(GehrungDataStore$.boxData)

    return (
        <div className="bg-white p-6 h-full">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-2xl font-light text-gray-900 tracking-wide mb-2">SCHACHTEL-RECHNER</h1>
                    <div className="w-16 h-px bg-gray-400"></div>
                    <p className="text-sm text-gray-600 mt-4 font-mono">Präzise Maße für Gehrungsschnitte</p>
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                    <div>
                        <GehrungForm/>
                    </div>
                    
                    <div>
                        <div className="border border-gray-200">
                            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                                <h2 className="text-sm font-medium text-gray-900 tracking-wider uppercase">Zuschnittliste</h2>
                            </div>
                            <div className="p-6">
                                <BoxCalcResult data={data}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxCalculator