import {useCallback, useTransition} from "react";
import {EditBoxFormInput} from "@/features/boxes/schema/box-edit-schema";
import {BoxConnections} from "@/features/boxes/schema/box-connection-schema";
import {boxConnectionsRepo} from "@/features/box-connections/repo/box-connections-repo";

export const useSaveBoxConnections = () => {
    const [pending, startTransition] = useTransition()
    const saveBoxConnections =  useCallback((boxConnections: BoxConnections,
                                             _data: EditBoxFormInput) => {
        startTransition(() => {
            const toUpdate = boxConnections // todo
            console.log('---> saveBoxConnections()', toUpdate)
            boxConnectionsRepo.update(toUpdate)
        })
    }, [startTransition])

    return {saveBoxConnections, pending}
}