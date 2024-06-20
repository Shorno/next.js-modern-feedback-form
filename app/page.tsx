"use client"
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import HashTagList from "@/components/HashTagList";
import {useEffect, useState} from "react";
import {TFeedbackItem} from "@/lib/types";

export default function Home() {

    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleAddToList = (text: string) => {
        const companyName = text.split(" ").find(word => word.includes("#"))!.substring(1);
        const newItem: TFeedbackItem = {
            id: new Date().getTime(),
            text: text,
            upvoteCount: 0,
            daysAgo: 0,
            companyName: companyName,
            badgeLetter: companyName.substring(0, 1).toUpperCase()
        }
        setFeedbackItems([...feedbackItems, newItem])
    }


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


    return (
        <main className="grid grid-cols-4 min-h-screen bg-black">
            <Footer/>
            <div className={"col-span-2"}>
                <Container
                    isLoading={isLoading}
                    feedbackItems={feedbackItems}
                    errorMessage={errorMessage}
                    handleAddToList={handleAddToList}
                />
            </div>
            <HashTagList/>
        </main>
    );
}
