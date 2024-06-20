"use client"
import FeedbackItem from "@/components/FeedbackItem";
import Spinner from "@/components/ui/Spinner";
import ErrorMessage from "@/components/ErrorMessage";
import {TFeedbackItem} from "@/lib/types";

type FeedbackListProps = {
    feedbackItems: TFeedbackItem[];
    isLoading: boolean;
    errorMessage: string;
}

export default function FeedbackList({feedbackItems, isLoading, errorMessage}: FeedbackListProps) {


    return (
        <>
            {isLoading && <Spinner/>}

            {errorMessage && <ErrorMessage message={errorMessage}/>}
            <ol>
                {feedbackItems.map((feedbackItem) => (
                    <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem}/>
                ))}
            </ol>
        </>
    )
}