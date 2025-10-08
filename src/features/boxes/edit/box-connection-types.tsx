import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {
    Choicebox,
    ChoiceboxItem,
    ChoiceboxItemContent,
    ChoiceboxItemDescription,
    ChoiceboxItemHeader,
    ChoiceboxItemIndicator,
    ChoiceboxItemTitle,
} from '@/components/ui/shadcn-io/choicebox';
import {Save} from "lucide-react";
import {Button} from "@/components/ui/button";

const sideFrontOptions = [
    {
        id: '1',
        label: 'Stumpfe Verbindung: Front/Back zwischen den Seiten',
        description: 'Die Front/Rückseite befindet sich zwischen den Seitenteilen',
    },
    {
        id: '2',
        label: 'Stumpfe Verbindung: Seiten zwischen Front/Back',
        description: 'Die Seitenteile befinden sich zwischen Front/Back',
    },
    {
        id: '3',
        label: 'Gehrung',
        description: 'Alle Seiten werden auf Gehrung gesägt',
    },
];

const backsideOptions = [
    {
        id: '0',
        label: 'Keine Rückwand',
        description: 'Die Box hat keine Rückwand',
    },
    {
        id: '1',
        label: 'Falz',
        description: 'In die Seiten wird ein Falz gefräst',
    },
    {
        id: '2',
        label: 'Nut',
        description: 'Die Rückwand wird in eine Nut eingeschoben, der Deckel springt etwas zurück',
    },
    {
        id: '3',
        label: 'Stumpf',
        description: 'Die Rückwand liegt stumpf auf den Seitenteilen auf',
    },
];
export const BoxConnectionTypes = () => (
    <div>
        <CardHeader>
            <CardTitle>Verbindungsarten</CardTitle>
        </CardHeader>
        <CardContent>

            <Card className={'bg-amber-50'}>
                <CardHeader>
                    <CardTitle>Verbindung zwischen den Seiten</CardTitle>
                    <CardDescription>Wähle einen Verbindungstyp für die Seitenteile aus</CardDescription>
                </CardHeader>
                <CardContent>
                    <Choicebox
                        defaultValue="1"
                        style={{
                            gridTemplateColumns: `repeat(${sideFrontOptions.length}, 1fr)`,
                        }}
                    >
                        {sideFrontOptions.map((option) => (
                            <ChoiceboxItem key={option.id} value={option.id}>
                                <ChoiceboxItemHeader>
                                    <ChoiceboxItemTitle>{option.label}</ChoiceboxItemTitle>
                                    <ChoiceboxItemDescription>
                                        {option.description}
                                    </ChoiceboxItemDescription>
                                </ChoiceboxItemHeader>
                                <ChoiceboxItemContent>
                                    <ChoiceboxItemIndicator/>
                                </ChoiceboxItemContent>
                            </ChoiceboxItem>
                        ))}
                    </Choicebox>
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
                <CardContent>
                    <Choicebox
                        defaultValue="1"
                        style={{
                            gridTemplateColumns: `repeat(${sideFrontOptions.length}, 1fr)`,
                        }}
                    >
                        {backsideOptions.map((option) => (
                            <ChoiceboxItem key={option.id} value={option.id}>
                                <ChoiceboxItemHeader>
                                    <ChoiceboxItemTitle>{option.label}</ChoiceboxItemTitle>
                                    <ChoiceboxItemDescription>
                                        {option.description}
                                    </ChoiceboxItemDescription>
                                </ChoiceboxItemHeader>
                                <ChoiceboxItemContent>
                                    <ChoiceboxItemIndicator/>
                                </ChoiceboxItemContent>
                            </ChoiceboxItem>
                        ))}
                    </Choicebox>
                </CardContent>
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
);
