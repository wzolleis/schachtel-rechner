import {Form} from "@/components/ui/form";
import {Box, BoxSchema, BoxSchemaInput} from "@/features/boxes/box-schema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {toast} from "sonner"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {BoxCommonSettingsForm} from "@/features/boxes/edit/box-common-settings-form";
import {DiameterIcon, FrameIcon, KeyboardIcon, Rows4Icon, ViewIcon} from "lucide-react";
import {BoxSidesForm} from "@/features/boxes/edit/box-sides-form";
import {BoxVisualization} from "@/features/boxes/edit/box-visualization";
import {useEffect, useMemo, useState} from "react";


export type EditBoxFormSchema = BoxSchemaInput

export type  BoxEditFormProps = {
    box: Box
}


const tabs = () => [
    {
        name: 'Allgemein',
        value: 'common',
        icon: KeyboardIcon,
        content: <BoxCommonSettingsForm/>
    },
    {
        name: 'Seiten',
        value: 'sides',
        icon: FrameIcon,
        content: <BoxSidesForm/>
    },
    {
        name: 'Gehrung',
        value: 'miter',
        icon: DiameterIcon,
        content: (
            <div>
                <p>Gehrung</p>
            </div>
        )
    },
    {
        name: 'Schubladen',
        value: 'drawer',
        icon: Rows4Icon,
        content:
            <div>
                <p>Schubladen</p>
            </div>
    }
]

export const BoxEditForm = (props: BoxEditFormProps) => {
    const {box} = props
    const defaultValues: BoxSchemaInput = {...box}
    const [formBox, setFormBox] = useState<Box>(box)

    const form = useForm<EditBoxFormSchema>({
        resolver: zodResolver(BoxSchema),
        defaultValues
    })

    const onSubmit = (data: EditBoxFormSchema) => {
        console.log(data)

        toast("You submitted the following values", {
            description: (
                <div className="mt-2 w-[320px] rounded-mdbg-neutral-950 p-4">
                    <div className="text-xs text-black">{JSON.stringify(data, null, 2)}</div>
                </div>
            ),
        })
    }

    const watchedValues = form.watch()
    const boxTabs = useMemo(() => tabs(), [box])

    useEffect(() => {
        const parsed: Box = BoxSchema.parse(watchedValues)
        setFormBox(parsed)
    }, [watchedValues]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex w-full h-full flex-col gap-6 p-4">
                    <Tabs defaultValue='common' className='gap-4'>
                        <TabsList className='h-full'>
                            {boxTabs.map(({icon: Icon, name, value}) => (
                                <TabsTrigger key={value}
                                             value={value}
                                             className='flex flex-col items-center gap-1 px-2.5 sm:px-3'
                                >
                                    <Icon/>
                                    {name}
                                </TabsTrigger>
                            ))}
                            <TabsTrigger value={'vieualization'}
                                         key={'visualization'}
                            >
                                <ViewIcon/>
                                {"Visualization"}
                            </TabsTrigger>
                        </TabsList>
                        {boxTabs.map(tab => (
                            <TabsContent key={tab.value} value={tab.value}
                                         className={'bg-white border-2 p-5'}>
                                {tab.content}
                            </TabsContent>
                        ))}
                        <TabsContent value={'vieualization'}
                                     key={'visualization'}
                                     className={'bg-white border-2 p-5'}>
                            <BoxVisualization box={formBox}/>
                        </TabsContent>
                    </Tabs>
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}