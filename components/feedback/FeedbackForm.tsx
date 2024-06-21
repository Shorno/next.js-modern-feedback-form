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
    const [isValidText, setIsValidText] = useState(true)
    const [isFocused, setIsFocused] = useState(false);
    const remainingChar = maxChar - text.length;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }
    //
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     if (text.includes("#") && text.length >= 19) {
    //         setIsValidText(true)
    //         if (!text.startsWith("#")) {
    //             text = "#" + text;
    //         }
    //         onAddToList(text)
    //         setText("")
    //     }else {
    //         setIsValidText(false)
    //     }
    // }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let updatedText = text;
        if (updatedText.includes("#") && updatedText.length >= 10) {
            setIsValidText(true)
            if (!updatedText.startsWith("#")) {
                updatedText = "#" + updatedText;
            }
            onAddToList(updatedText)
            setText("")
        } else {
            setIsValidText(false)
            return;
        }
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

            {!isValidText && (
                <div
                    className={`${remainingChar === 0 ? " bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-neutral-500" : null} font-bold text-lg z-20 bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-500 absolute right-5 bottom-24`}>
                    <span className={"text-sm"}>Wrong feedback format</span> <br/> <span className={"text-sm"}>add &apos;#&apos; before company name.</span>
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
