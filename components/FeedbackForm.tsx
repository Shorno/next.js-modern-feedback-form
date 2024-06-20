"use client"
import {Button} from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea"
import React, {useState} from "react";
import {maxChar} from "@/lib/constants";

type FeedbackFormProps = {
    onAddToList: (text: string) => void;
}

export function FeedbackForm({onAddToList}: FeedbackFormProps) {

    const [text, setText] = useState("")
    const [isFocused, setIsFocused] = useState(false);
    const remainingChar = maxChar - text.length;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddToList(text)
        setText("")

    }

    return (
        <form onSubmit={handleSubmit}
              className="grid w-1/2">
            <Textarea
                maxLength={maxChar}
                id={"feedback-textarea"}

                className={"resize-none"}
                placeholder="Type your review here, remember to add #Company_name"
                value={text}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {isFocused && (
                <div
                    className={`${remainingChar === 0 ? " bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-neutral-500" : null} font-bold text-lg z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 absolute translate-y-1/2 -translate-x-40`}>
                    {remainingChar} <br/> <span className={"text-sm"}>character remaining</span>
                </div>
            )}
            <Button
                type={"submit"}
                className="text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                Submit
            </Button>

        </form>
    )
}
