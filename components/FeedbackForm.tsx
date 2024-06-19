import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import React from "react";

export function FeedbackForm() {
    return (
        <div className="grid w-1/2">
            <Textarea className={"resize-none"} placeholder="Type your review here.."/>
            <Button className="text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">Submit</Button>
        </div>
    )
}
