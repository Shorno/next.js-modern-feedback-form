import FeedbackList from "@/components/FeedbackList";
import {Header} from "@/components/Header";
import {TFeedbackItem} from "@/lib/types";

type ContainerProps = {
    isLoading: boolean;
    feedbackItems: TFeedbackItem[];
    errorMessage: string;
    handleAddToList: (text: string) => void;
}

export default function Container({feedbackItems, isLoading, errorMessage, handleAddToList}: ContainerProps) {


    return (
        <>
            <div className={"flex flex-col items-center justify-cent er h-screen pt-20"}>
                <div className={"flex flex-col items-center w-full h-full"}>
                    <div className={"h-1/3 w-full rounded-t-xl drop-shadow-xl"}>
                        <Header handleAddToList={handleAddToList}/>
                    </div>
                    <div className={"bg-white w-full h-3/4 overflow-y-auto "}>
                        <FeedbackList
                            feedbackItems={feedbackItems}
                            isLoading={isLoading}
                            errorMessage={errorMessage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}