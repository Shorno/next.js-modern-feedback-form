import {Button} from "@/components/ui/button";

export default function FeedbackList() {
    return (
        <>
            <ol>
                <li className={"flex justify-around mt-5 border-b pb-3 border-black"}>
                    <Button>
                        +
                        421
                    </Button>
                    <div>B</div>
                    <div>
                        <p>Netflix</p>
                        <p>Need to add adult movies in Netflix. Like real adult videos. Anegla White is my favourite</p>
                    </div>
                    <p>3d</p>
                </li>
                <li className={"flex justify-around mt-5 border-b pb-3 border-black"}>
                    <Button>
                        +
                        421
                    </Button>
                    <div>B</div>
                    <div>
                        <p>Netflix</p>
                        <p>Need to add adult movies in Netflix. Like real adult videos. Anegla White is my favourite</p>
                    </div>
                    <p>3d</p>
                </li>
            </ol>
        </>
    )
}