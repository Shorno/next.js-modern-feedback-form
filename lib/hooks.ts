import {useContext, useEffect, useState} from "react";
import {FeedbackItemsContext} from "@/contexts/feedbackItemContextProvider";
import {TFeedbackItem} from "@/lib/types";

export function useFeedbackItemContext() {
    const content = useContext(FeedbackItemsContext)
    if (!content) {
        throw new Error("FeedbackItemsContext is not provided");

    }
    return content
}


export function useFeedbackItems() {
    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        const fetchFeedbackData =

        fetchFeedbackData()
    }, []);

    return {
        feedbackItems,
        isLoading,
        errorMessage,
        setFeedbackItems
    }
}