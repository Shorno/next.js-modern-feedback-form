import React from "react";
import {Spotlight} from "@/components/ui/Spotlight";
import {FeedbackForm} from "@/components/FeedbackForm";

export function Header() {
    return (
        <div className="w-full h-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
            <Spotlight className={"absolute -right-96"}/>
            <Spotlight className={"left-0"}/>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="text-5xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-5">
                Next Gen Feedback
            </p>
            <FeedbackForm/>
        </div>
    );
}
