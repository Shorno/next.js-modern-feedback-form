import {TFeedbackItem} from "@/lib/types";

type FeedbackItemProps = { feedbackItem: TFeedbackItem }

export default function FeedbackItem({feedbackItem}: FeedbackItemProps) {
    return (
        <>
            <li className={"flex justify-around border border-b-gray-300 items-center pb-5 pt-2"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <button>
                        <div className={"ml-1"}>
                            <svg width="20" height="20" viewBox="0 0 15 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 9H11L7.5 4.5L4 9Z" fill="gray"></path>
                            </svg>
                        </div>
                        <div className={"font-bold"}>{feedbackItem.upvoteCount}</div>
                    </button>
                </div>
                <div
                    className={"size-12 rounded-md bg-pink-400 text-white text-4xl flex-col flex items-center justify-center font-bold -ml-5"}>
                    {feedbackItem.badgeLetter}
                </div>
                <div className={"-ml-10 w-[70%]"}>
                    <p className={"font-bold text-md text-gray-400"}>{feedbackItem.companyName}</p>
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