import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {TFeedbackItem} from "@/lib/types";
import {useFeedbackItems} from "@/lib/hooks";


type TFeedbackItemsContext = {
    isLoading: boolean,
    errorMessage: string,
    handleAddToList: (text: string) => void,
    companyList: string[],
    handleSelectCompany: (company: string) => void,
    filteredFeedbackItem: TFeedbackItem[],
}
type FeedbackItemContextProviderProps = {
    children: React.ReactNode;
}

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(null)

export default function FeedbackItemContextProvider({children}: FeedbackItemContextProviderProps) {
    const {feedbackItems, isLoading, errorMessage, setFeedbackItems} = useFeedbackItems()
    const [selectedCompany, setSelectedCompany] = useState<string>("");


    const handleSelectCompany = (company: string) => {
        setSelectedCompany(company)
    }

    const handleAddToList = async (text: string) => {
        const companyName = text.split(" ").find(word => word.includes("#"))!.substring(1);

        const newItem: TFeedbackItem = {
            id: new Date().getTime(),
            text: text,
            upvoteCount: 0,
            daysAgo: 0,
            company: companyName,
            badgeLetter: companyName.substring(0, 1).toUpperCase()
        }
        setFeedbackItems([...feedbackItems, newItem])

        await fetch("https://bytegrad.com/course-assets/js/1/pattern.svghttps://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            }
        })
    }

    const companyList = useMemo(() => feedbackItems.map((item) => item.company).filter((company, index, array) => {
        return array.indexOf(company) === index;
    }), [feedbackItems])

    const filteredFeedbackItem = useMemo(() => selectedCompany ? feedbackItems.filter((item) => item.company === selectedCompany) : feedbackItems, [feedbackItems, setSelectedCompany])


    return <FeedbackItemsContext.Provider
        value={{
            isLoading,
            errorMessage,
            handleAddToList,
            companyList,
            handleSelectCompany,
            filteredFeedbackItem,
        }}
    >
        {children}
    </FeedbackItemsContext.Provider>

}

