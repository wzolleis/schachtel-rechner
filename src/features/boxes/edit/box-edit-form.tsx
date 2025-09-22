import {Form} from "@/components/ui/form";
import {Box, BoxSchema} from "@/features/boxes/box-schema";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {toast} from "sonner"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {BoxCommonSettingsForm} from "@/features/boxes/edit/box-common-settings-form";
import {DiameterIcon, FrameIcon, KeyboardIcon, Rows4Icon} from "lucide-react";


const formSchema = z.object({
    box: BoxSchema
})

export type EditBoxFormSchema = z.infer<typeof formSchema>

export interface BoxEditFormProps {
    box: Box
}


const tabs = [
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
        content: (
            <div className={'h-1/4'}>
                <p>Seiten</p>
            </div>
        )
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
        content: (
            <div>
                <p>Schubladen</p>
            </div>
        )
    },
]

export const BoxEditForm = (props: BoxEditFormProps) => {
    const {box} = props
    const form = useForm<EditBoxFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {box: {...box}},
    })

    const onSubmit = (data: BoxEditFormProps) => {
        console.log(data)

        toast("You submitted the following values", {
            description: (
                <div className="mt-2 w-[320px] rounded-mdbg-neutral-950 p-4">
                    <div className="text-xs text-black">{JSON.stringify(data, null, 2)}</div>
                </div>
            ),
        })
    }


    return (
        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex w-full h-full flex-col gap-6 p-4">
                        <Tabs defaultValue='common' className='gap-4'>
                            <TabsList className='h-full'>
                                {tabs.map(({icon: Icon, name, value}) => (
                                    <TabsTrigger key={value}
                                                 value={value}
                                                 className='flex flex-col items-center gap-1 px-2.5 sm:px-3'
                                    >
                                        <Icon/>
                                        {name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {tabs.map(tab => (
                                <TabsContent key={tab.value} value={tab.value}
                                             className={'bg-white border-2 p-5'}>
                                    {tab.content}
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>

                    <Button type="submit">Submit</Button>
                </form>
        </Form>
    )
}