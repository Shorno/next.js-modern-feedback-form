"use client"
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import HashTagList from "@/components/hashtag/HashTagList";
import {useEffect} from "react";
import {useFeedbackItemStore} from "@/stores/feedbackItemsStore";


export default function Home() {
    const fetchFeedbackItems = useFeedbackItemStore((state) => state.fetchFeedbackItems)

    useEffect(() => {
        fetchFeedbackItems();
    }, [fetchFeedbackItems])

    return (
        <main className="grid grid-cols-4 min-h-screen bg-black ">
            <Footer/>
            <div className={"col-span-2"}>
                <Container/>
            </div>
            <HashTagList/>
        </main>
    );
}
