// import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
// import {TFeedbackItem} from "@/lib/types";
// import {useFeedbackItems} from "@/lib/hooks";
//
//
// type TFeedbackItemsContext = {
//     isLoading: boolean,
//     errorMessage: string,
//     handleAddToList: (text: string) => void,
//     companyList: string[],
//     handleSelectCompany: (company: string) => void,
//     filteredFeedbackItem: TFeedbackItem[],
// }
// type FeedbackItemContextProviderProps = {
//     children: React.ReactNode;
// }
//
// export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(null)
//
// export default function FeedbackItemContextProvider({children}: FeedbackItemContextProviderProps) {
//     const {feedbackItems, isLoading, errorMessage, setFeedbackItems} = useFeedbackItems()
//     const [selectedCompany, setSelectedCompany] = useState<string>("");
//
//
//
//
//     return <FeedbackItemsContext.Provider
//         value={{
//             isLoading,
//             errorMessage,
//             handleAddToList,
//             companyList,
//             handleSelectCompany,
//             filteredFeedbackItem,
//         }}
//     >
//         {children}
//     </FeedbackItemsContext.Provider>
//
// }
//
