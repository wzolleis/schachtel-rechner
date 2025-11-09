import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Save} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Box} from "@/features/boxes/schema/box-schema";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useFormContext} from "react-hook-form";
import {EditBoxFormInput} from "@/features/boxes/schema/box-edit-schema";

export const BoxConnectionTypesForm = ({box:_box}: { box: Box | undefined }) => {
    const form = useFormContext<EditBoxFormInput>()

    return (
        <div>
            <CardHeader>
                <CardTitle>Verbindungsarten</CardTitle>
            </CardHeader>
            <CardContent>

                <Card className={'bg-amber-50'}>
                    <CardHeader>
                        <CardTitle>Verbindung der Seitenwände definieren</CardTitle>
                        <CardDescription>Wähle einen Verbindungstyp</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="sideConnectionType"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Verbindungsart der Seiten" {...field} />
                                    </FormControl>
                                    <FormDescription>Der Name der Box.</FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
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
        </div>
    )
}
