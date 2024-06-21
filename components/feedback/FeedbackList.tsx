"use client"
import FeedbackItem from "@/components/feedback/FeedbackItem";
import Spinner from "@/components/ui/Spinner";
import ErrorMessage from "@/components/ErrorMessage";
import {useFeedbackItemContext} from "@/lib/hooks";


export default function FeedbackList() {
    const {filteredFeedbackItem, isLoading, errorMessage} = useFeedbackItemContext()


    return (
        <>
            {isLoading && <Spinner/>}

            {errorMessage && <ErrorMessage message={errorMessage}/>}
            <ol>
                {filteredFeedbackItem.map((feedbackItem) => (
                    <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem}/>
                ))}
            </ol>
        </>
    )
}