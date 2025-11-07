import {observable} from "@legendapp/state";
import {syncObservable} from "@legendapp/state/sync";
import {ObservablePersistLocalStorage} from "@legendapp/state/persist-plugins/local-storage";

interface SelectedBoxConnectionsStore {
    selectedBoxConnectionId: string | null
    selectBoxConnections: (boxConnectionsId: string) => void
}

export const boxConnectionsStore$ = observable<SelectedBoxConnectionsStore>({
    selectedBoxConnectionId: null,
    selectBoxConnections: (boxConnectionsId: string) => {
        boxConnectionsStore$.selectedBoxConnectionId.set(boxConnectionsId);
    }
})


syncObservable(boxConnectionsStore$, {
    persist: {
        name: "current-box-connections",
        plugin: ObservablePersistLocalStorage
    }
})