import {create} from "zustand";
import {TFeedbackItem} from "@/lib/types";
import {state} from "sucrase/dist/types/parser/traverser/base";

export const useFeedbackItemStore = create((set, get) => ({
    feedbackItems: [],
    isLoading: false,
    errorMessage: "",
    selectedCompany: "",
    companyList: [],
    getCompanyList: () => {
        return get().feedbackItems.map((item) => item.company).filter((company, index, array) => {
            return array.indexOf(company) === index;
        });
    },
    getFilteredFeedbackItem: () => {
        const state = get()
        return state.selectedCompany ? state.feedbackItems.filter((feedbackItem) => feedbackItem.company === selectedCompany) : state.feedbackItems
    },
    addItemToList: async (text: string) => {
        const companyName = text.split(" ").find(word => word.includes("#"))!.substring(1);

        const newItem: TFeedbackItem = {
            id: new Date().getTime(),
            text: text,
            upvoteCount: 0,
            daysAgo: 0,
            company: companyName,
            badgeLetter: companyName.substring(0, 1).toUpperCase()
        }
        set(state => ({
            feedbackItems: [...state.feedbackItems, newItem]
        }));

        await fetch("https://bytegrad.com/course-assets/js/1/pattern.svghttps://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            }
        })
    },
    selectCompany: (company: string) => {
        set(() => ({
            selectedCompany: company
        }))
    },
    fetchFeedbackItems: async () => {
        set(() => ({
            isLoading: true,
        }))

        try {
            const response = await fetch("https://bytegrad.com/course-assets/js/1/pattern.svghttps://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");

            if (!response.ok) {
                throw new Error();
            }

            const data = await response.json();
            set(() => ({
                feedbackItems: data.feedbacks,
            }))

        } catch (error) {
            set(() => ({
                errorMessage: "Something went wrong..."
            }))
        }
        set(() => ({
            isLoading: false,
        }))
    },

}))