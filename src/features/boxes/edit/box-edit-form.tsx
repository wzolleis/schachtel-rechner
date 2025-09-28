import {Form} from "@/components/ui/form";
import {Box, BoxSchema} from "@/features/boxes/box-schema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {toast} from "sonner"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {BoxVisualization} from "@/features/boxes/edit/box-visualization";
import {useMemo} from "react";
import {
    EditBoxFormInput,
    EditBoxFormOutput,
    EditBoxFormSchema,
    EditBoxFormValues
} from "@/features/boxes/edit/box-edit-form-types";
import {boxEditTabs} from "@/features/boxes/edit/box-edit-tabs";
import {ViewIcon} from "lucide-react";
import {BoxCalculator} from "@/lib/box-calc-utils";
import {z} from "zod";

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
    console.log(watchedValues)

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

    const visualizedBox = calculateBox(watchedValues)

    const onSubmit = (data: EditBoxFormValues) => {
        console.log(data)

        toast("You submitted the following values", {
            description: (
                <div className="mt-2 w-[320px] rounded-mdbg-neutral-950 p-4">
                    <div className="text-xs text-black">{JSON.stringify(data, null, 2)}</div>
                </div>
            ),
        })
    }

    const boxTabs = useMemo(() => boxEditTabs(), [])

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

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}