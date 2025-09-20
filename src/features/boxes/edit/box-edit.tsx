import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header";
import {use$} from "@legendapp/state/react";
import {boxStore$} from "@/features/boxes/repo/box-store";
import {useFindBoxById} from "@/features/boxes/repo/box-queries";
import {ErrorPage} from "@/components/errors/error-page";
import {BoxNotFoundError} from "@/features/boxes/errors/box-not-found-error";
import {BoxEditForm} from "@/features/boxes/edit/box-edit-form";

export const BoxEdit = () => {
    const currentBoxId = use$(boxStore$.selectedBoxId)
    // const boxes = useFindAllBoxes()
    const {findBoxById} = useFindBoxById()
    const box = findBoxById(currentBoxId)

    if (!box) {
        return (
            <ErrorPage error={new BoxNotFoundError(currentBoxId)}/>
        )
    }

    return (
        <div className="bg-white p-6 h-full">
            <div>
                <PageTitle>{`${box?.name}`}</PageTitle>
                <PageHeaderSeparator/>
                <PageDescription>Hier bearbeitest du die Box</PageDescription>
            </div>

            <div className="mt-4  max-w-7xl mx-auto">
                <div>
                    <BoxEditForm box={box}/>
                </div>
            </div>
        </div>
    )
}