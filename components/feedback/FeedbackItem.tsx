import {TFeedbackItem} from "@/lib/types";
import {useState} from "react";

type FeedbackItemProps = { feedbackItem: TFeedbackItem }

export default function FeedbackItem({feedbackItem}: FeedbackItemProps) {
    const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount)
    const [upVote, setUpVote] = useState(false)


    const handleUpvote = () => {
        if (!upVote) {
            setUpvoteCount((prevState) => prevState + 1);
            setUpVote(true);
        }
    }
    return (
        <>
            <li className={"flex justify-around border border-b-gray-300 items-center py-3 hover:bg-slate-200  duration-200"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <button onClick={handleUpvote}>
                        <div className={`ml-1 ${upVote && "hidden"}`}>

                            <svg width="20" height="20" viewBox="0 0 15 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 9H11L7.5 4.5L4 9Z" fill="gray"></path>
                            </svg>
                        </div>
                        <div className={"font-bold"}>{upvoteCount}</div>
                    </button>
                </div>
                <div
                    className={"size-12 rounded-md bg-pink-400 text-white text-4xl flex-col flex items-center justify-center font-bold -ml-5"}>
                    {feedbackItem.badgeLetter}
                </div>
                <div className={"-ml-10 w-[70%]"}>
                    <p className={"font-bold text-md text-gray-400"}>{feedbackItem.company}</p>
                    <p className={"font-medium flex  text-wrap"}>
                        {feedbackItem.text}
                    </p>
                </div>
                <div className={"flex items-center"}>
                    <p>{feedbackItem.daysAgo}</p>
                </div>
            </li>
        </>
    )
}