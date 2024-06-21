import FeedbackList from "@/components/feedback/FeedbackList";
import {Header} from "@/components/layout/Header";


export default function Container() {


    return (
        <>
            <div className={"flex flex-col items-center justify-cent er h-screen pt-20"}>
                <div className={"flex flex-col items-center w-full h-full"}>
                    <div className={"h-1/3 w-full rounded-t-xl drop-shadow-xl"}>
                        <Header/>
                    </div>
                    <div className={"bg-white w-full h-3/4 overflow-y-auto "}>
                        <FeedbackList

                        />
                    </div>
                </div>
            </div>
        </>
    )
}