import {Form} from "@/components/ui/form";
import {Box} from "@/features/boxes/schema/box-schema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useCallback, useMemo} from "react";
import {EditBoxFormInput, EditBoxFormOutput, EditBoxFormSchema} from "@/features/boxes/schema/box-edit-schema";
import {boxEditTabs} from "@/features/boxes/edit/box-edit-tabs";
import {FileStackIcon} from "lucide-react";
import {BoxParts} from "@/features/boxes/edit/box-parts";
import {useSaveBox} from "@/features/boxes/hooks/use-save-box";
import _ from "lodash";

export type  BoxEditFormProps = {
    box: Box,
}

export const BoxEditForm = (props: BoxEditFormProps) => {
    const {box} = props
    const defaultValues: EditBoxFormInput = useMemo(() => {
        return {
            simpleSideDefinition: true,
            projectId: box.projectId,
            name: box.name,
            height: box.sides.left.height,
            width: box.sides.front.width,
            depth: box.sides.left.width,
            thickness: box.sides.left.thickness
        }
    }, [box])

    const form = useForm<EditBoxFormInput, EditBoxFormOutput>({
        resolver: zodResolver(EditBoxFormSchema),
        mode: "onChange",
        defaultValues
    })

    const {saveBox} = useSaveBox()
    const watchedData = form.watch()

    const debouncedSave = useCallback(
        _.debounce(() => {
            if (!!box) {
                saveBox(box, watchedData)
                console.log('------> debouncedSave box', watchedData)
            }
        }, 1000),
        [form, saveBox],
    );

    const boxTabs = useMemo(() => boxEditTabs(), [])

    return (
        <Form {...form} >
            <form onChange={debouncedSave} className="space-y-6">
                <div className="flex w-full h-full flex-col gap-6 p-4">
                    <Tabs defaultValue='common' className='gap-0'>
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
                            <TabsTrigger value={'part-list'}
                                         key={'part-list'}
                                         className='flex flex-col items-center gap-1 px-2.5 sm:px-3'
                            >
                                <FileStackIcon/>
                                {"Stückliste"}
                            </TabsTrigger>
                        </TabsList>
                        {boxTabs.map(tab => (
                            <TabsContent key={tab.value} value={tab.value}
                                         className={'bg-white border-2 p-5'}>
                                <tab.content box={props.box}/>
                            </TabsContent>
                        ))}
                        <TabsContent value={'part-list'}
                                     key={'part-list'}
                                     className={'bg-white border-2 p-5'}>
                            <BoxParts box={box}/>
                        </TabsContent>
                    </Tabs>
                </div>
            </form>
        </Form>
    )
}