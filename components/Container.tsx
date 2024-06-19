import FeedbackList from "@/components/FeedbackList";
import {Header} from "@/components/Header";


export default function Container() {
    return (
        <>
            <div className={"flex flex-col items-center justify-center h-full pt-24"}>
                <div className={"flex flex-col items-center w-full h-full"}>
                    <div className={"h-1/3 w-full rounded-t-xl drop-shadow-xl"}>
                        <Header/>
                    </div>
                    <div className={"bg-white w-full h-3/4"}>
                       <FeedbackList/>
                    </div>
                </div>
            </div>
        </>
    )
}