import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header";
import {use$} from "@legendapp/state/react";
import {boxStore$} from "@/features/boxes/repo/box-store";
import {useFindBoxById} from "@/features/boxes/repo/box-queries";
import {ErrorPage} from "@/components/errors/error-page";
import {BoxNotFoundError} from "@/features/boxes/errors/box-not-found-error";
import {BoxEditForm} from "@/features/boxes/edit/box-edit-form";
import {defaultBoxConnections} from "@/features/boxes/schema/default-box-connections";
import {createId} from "@paralleldrive/cuid2";

export const BoxEdit = () => {
    const currentBoxId = use$(boxStore$.selectedBoxId)
   // const _currentBoxConnections = use$(boxConnectionsStore$.selectedBoxConnectionId)
    // const boxes = useFindAllBoxes()
    const {findBoxById} = useFindBoxById()
    const box = findBoxById(currentBoxId)
    // todo Watched Repo verwenden
    const boxConnections = defaultBoxConnections({
        connectionsId: createId(), boxId:  box?.id ?? ''
    })

    if (!box) {
        return (
            <ErrorPage error={new BoxNotFoundError(currentBoxId)}/>
        )
    }

    return (
        <div className="p-6">
            <div>
                <PageTitle>{`${box?.name}`}</PageTitle>
                <PageHeaderSeparator/>
                <PageDescription>Hier bearbeitest du die Box</PageDescription>
            </div>


            <div className="mt-4">
                    <BoxEditForm box={box} boxConnections={boxConnections}/>
            </div>
        </div>
    )
}