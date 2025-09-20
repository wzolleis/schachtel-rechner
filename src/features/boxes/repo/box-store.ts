import {observable} from "@legendapp/state";
import {syncObservable} from "@legendapp/state/sync";
import {ObservablePersistLocalStorage} from "@legendapp/state/persist-plugins/local-storage";

interface SelectedBoxStore {
    selectedBoxId: string | null
    selectBox: (boxId: string) => void
}

export const boxStore$ = observable<SelectedBoxStore>({
    selectedBoxId: null,
    selectBox: (boxId: string) => {
        boxStore$.selectedBoxId.set(boxId);
    }
})


syncObservable(boxStore$, {
    persist: {
        name: "current-box",
        plugin: ObservablePersistLocalStorage
    }
})