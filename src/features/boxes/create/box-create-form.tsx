import {Form,} from "@/components/ui/form"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {BoxSchema} from "@/features/boxes/box-schema";
import {useCallback, useId} from "react";
import {use$} from "@legendapp/state/react";
import {projectStore$} from "@/features/projects/repo/project-store";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircleIcon} from "lucide-react";
import {defaultBox} from "@/features/boxes/default-box";

const NoProjectError = () => {
    return (
        <div>
            <Alert variant="destructive">
                <AlertCircleIcon/>
                <AlertTitle>Es kann keine neue Box angelegt werden.</AlertTitle>
                <AlertDescription>
                    <p>Es wird ein aktives Projekt benötigt.</p>
                    <ul className="list-inside list-disc text-sm">
                        <li>Lege ein Projekt an</li>
                        <li>Wähle das Projekt als aktives Projekt aus</li>
                    </ul>
                </AlertDescription>
            </Alert>
        </div>
    )
}

export const BoxCreateForm = () => {
    const id = useId()
    const projectId = use$(projectStore$.currentProjectId)

    const form = useForm({
        resolver: zodResolver(BoxSchema),
        defaultValues: defaultBox({id, projectId: projectId || '', name: 'new box'}),
        mode: "onChange"
    })

    const onSubmit = useCallback(() => {
        form.handleSubmit(() => {
            // GehrungDataStore$.assign(data)
        })
    }, [form])


    if (!projectId) {
        return (
            <NoProjectError/>
        )
    }

    return (
        <>
            <div className="border border-gray-200">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <h2 className="text-sm font-medium text-gray-900 tracking-wider uppercase">Eingabe</h2>
                </div>
                <Form {...form}>
                    <form onSubmit={onSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}