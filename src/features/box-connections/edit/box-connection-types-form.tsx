import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Save} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {
    EditBoxConnectionTypeFormInput,
    EditBoxConnectionTypeFormInputSchema
} from "@/features/box-connections/schema/box-connectiontype-form-schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Box} from "@/features/boxes/schema/box-schema";
import {Form} from "@/components/ui/form";
import {useCallback} from "react";
import _ from "lodash";


export const BoxConnectionTypesForm = ({box}: { box: Box | undefined }) => {
    const form = useForm<EditBoxConnectionTypeFormInput>({
        resolver: zodResolver(EditBoxConnectionTypeFormInputSchema),
        defaultValues: {
            boxId: box?.id,

        },
    })
    const watchedData = form.watch()

    const saveConnections = () => {
        console.log('save connections');
    }

    const debouncedSave = useCallback(
        _.debounce(() => {
            if (!!box) {
                saveConnections()
                console.log('------> debouncedSave box', watchedData)
            }
        }, 1000),
        [form, saveConnections],
    );

    return (
        <div>
            <Form {...form} >
                <form onChange={debouncedSave} className="space-y-6">
                    <CardHeader>
                        <CardTitle>Verbindungsarten</CardTitle>
                    </CardHeader>
                    <CardContent>

                        <Card className={'bg-amber-50'}>
                            <CardHeader>
                                <CardTitle>Verbindung definieren</CardTitle>
                                <CardDescription>Wähle einen Verbindungstyp und die Seiten dafür aus</CardDescription>
                            </CardHeader>
                            <CardContent>

                            </CardContent>
                            <CardFooter>
                                <p>
                                    Der Verbindungstyp wirkt sich auf die Dimension aller Seitenteile aus.<br/>
                                    Außerdem wird die Größe von Boden u. Deckel damit beeinflusst.
                                </p>
                            </CardFooter>
                        </Card>
                        <Card className={'mt-2 bg-blue-50'}>
                            <CardHeader>
                                <CardTitle>Verbindung der Rückwand</CardTitle>
                                <CardDescription>Wähle einen Verbindungstyp aus</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <p>Der Verbindungstyp wirkt sich auf Dimension der Rückwand aus</p>
                            </CardFooter>
                        </Card>
                    </CardContent>
                    <CardFooter>
                        <div className={'flex flex-col justify-ends'}>
                            <Button
                                onClick={() => {
                                }}
                                className="ms-auto my-3 font-mono uppercase tracking-wider"
                            >
                                <Save className="w-4 h-4 mr-2"/>
                                Speichern
                            </Button>
                        </div>
                    </CardFooter>
                </form>
            </Form>
        </div>
    )
}
