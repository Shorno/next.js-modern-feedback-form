"use client"
import FeedbackItem from "@/components/feedback/FeedbackItem";
import Spinner from "@/components/ui/Spinner";
import ErrorMessage from "@/components/ErrorMessage";
import {useFeedbackItemStore} from "@/stores/feedbackItemsStore";


export default function FeedbackList() {
    const isLoading = useFeedbackItemStore((state) => state.isLoading)
    const filteredFeedbackItem = useFeedbackItemStore((state) => state.getFilteredFeedbackItem())
    const errorMessage = useFeedbackItemStore((state) => state.errorMessage)


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