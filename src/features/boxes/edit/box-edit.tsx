import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header";
import {use$} from "@legendapp/state/react";
import {boxStore$} from "@/features/boxes/repo/box-store";
import {useFindBoxById} from "@/features/boxes/repo/box-queries";
import {ErrorPage} from "@/components/errors/error-page";

export const BoxEdit = () => {
    const currentBoxId = use$(boxStore$.selectedBoxId)
    // const boxes = useFindAllBoxes()
    const {findBoxById} = useFindBoxById()
    const findBoxResult = findBoxById(currentBoxId)

    if (findBoxResult.isErr()) {
        return (
            <ErrorPage error={findBoxResult.error}/>
        )
    }

    const currentBox = findBoxResult.value

    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <PageTitle>{`${currentBox?.name}`}</PageTitle>
                    <PageHeaderSeparator/>
                    <PageDescription>Hier bearbeitest du die Box</PageDescription>
                </div>

            </div>

        </>
    )
}