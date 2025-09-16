import {observable} from "@legendapp/state";
import {use$} from "@legendapp/state/react";
import {syncObservable} from "@legendapp/state/sync";
import {ObservablePersistLocalStorage} from "@legendapp/state/persist-plugins/local-storage";

interface SelectedBoxStore {
    selectedBoxId: string | null
    selectBox: (boxId: string) => void
}

export const selectedBox$ = observable<SelectedBoxStore>({
    selectedBoxId: null,
    selectBox: (boxId: string) => {
        selectedBox$.selectedBoxId.set(boxId);
    }
})


export function useSelectedBox() {
    return use$(selectedBox$.selectedBoxId)
}

syncObservable(selectedBox$, {
    persist: {
        name: "current-box",
        plugin: ObservablePersistLocalStorage
    }
})