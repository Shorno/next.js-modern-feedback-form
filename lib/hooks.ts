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
        const fetchFeedbackData = async () => {
            setIsLoading(true)

            try {
                const response = await fetch("https://bytegrad.com/course-assets/js/1/pattern.svghttps://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");

                if (!response.ok) {
                    throw new Error();
                }

                const data = await response.json();
                setFeedbackItems(data.feedbacks)

            } catch (error) {
                setErrorMessage("Something went wrong!")
            }
            setIsLoading(false)
        };

        fetchFeedbackData()
    }, []);

    return {
        feedbackItems,
        isLoading,
        errorMessage,
        setFeedbackItems
    }
}