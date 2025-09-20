import {AlertCircleIcon} from "lucide-react"
import {Alert, AlertDescription, AlertTitle,} from "@/components/ui/alert"
import {Button} from "@/components/ui/button";

export const ErrorPage = ({error}: { error: Error }) => {
    // const {navigateToProjects} = useNavigateToProjects()
    //const {navigateToBoxes} = useNavigateToBoxes()

    const handleNavigateToBoxes = () => {
        console.log("Navigate to Boxes");
    }


    const handleNavigateToProjects = () => {
        console.log("Navigate to Projects");
    }
    return (
        <div className="w-full p-6 flex justify-center">
            <div className="w-full max-w-lg">
                <Alert variant="destructive">
                    <AlertCircleIcon/>
                    <AlertTitle>Es ist ein Fehler aufgetreten</AlertTitle>
                    <AlertDescription>
                        <p className="mb-3"> {`${error.message} `}</p>
                        <div className="flex gap-2">
                            <Button size="sm"
                                    onClick={() => handleNavigateToBoxes()}
                            >
                                Boxen
                            </Button>
                            <Button size="sm"
                                    onClick={() => handleNavigateToProjects()}
                            >
                                Projekte
                            </Button>
                        </div>
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    )
}