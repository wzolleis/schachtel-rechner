import {Form} from "@/components/ui/form";
import {Box, BoxSchema} from "@/features/boxes/box-schema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {BoxVisualization} from "@/features/boxes/edit/box-visualization";
import {startTransition, useMemo} from "react";
import {EditBoxFormInput, EditBoxFormOutput, EditBoxFormSchema} from "@/features/boxes/edit/box-edit-form-types";
import {boxEditTabs} from "@/features/boxes/edit/box-edit-tabs";
import {ViewIcon} from "lucide-react";
import {BoxCalculator} from "@/lib/box-calc-utils";
import {z} from "zod";
import {boxCollection} from "@/features/boxes/repo/box-collection";

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

    const watchedValues = form.watch()

    const calculateBox = (values: EditBoxFormInput) => {
        const formValues = z.parse(EditBoxFormSchema, values)

        const calculatedBoxSides = new BoxCalculator().calculateBoxSidesFrom({
            thickness: formValues.thickness,
            depth: formValues.depth,
            height: formValues.height,
            width: formValues.width,
        })

        return z.parse(BoxSchema,
            {
                ...box,
                sides: calculatedBoxSides
            }
        )
    }

    const onSubmit = (data: EditBoxFormInput) => {
        startTransition(() => {
            const toUpdate = calculateBox(data)
            console.log('toUpdate', toUpdate)
            console.log('orignal box', box)
            boxCollection.update(toUpdate.id,
                (draft) => {
                    draft.name = toUpdate.name
                    draft.sides = toUpdate.sides
                    draft.projectId = toUpdate.projectId
                })
        })
    }

    const boxTabs = useMemo(() => boxEditTabs(), [])
    const visualizedBox = calculateBox(watchedValues)

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
                                         className='flex flex-col items-center gap-1 px-2.5 sm:px-3'
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
                            <BoxVisualization box={visualizedBox}/>
                        </TabsContent>
                    </Tabs>
                </div>

                <Button type="submit">Speichern</Button>
            </form>
        </Form>
    )
}