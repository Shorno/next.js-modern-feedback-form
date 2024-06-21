"use client"
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import HashTagList from "@/components/hashtag/HashTagList";
import FeedbackItemContextProvider from "@/contexts/feedbackItemContextProvider";


export default function Home() {

    return (
        <main className="grid grid-cols-4 min-h-screen bg-black ">
            <Footer/>
            <FeedbackItemContextProvider>
                <div className={"col-span-2"}>
                    <Container/>
                </div>
                <HashTagList/>
            </FeedbackItemContextProvider>

        </main>
    );
}
