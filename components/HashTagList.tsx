import {Button} from "@/components/ui/button";

export default function HashTagList(){
    return(
        <>
        <div className={"mt-36 ml-20"}>
            <ul>
                <li className={"flex flex-col w-fit gap-4"}>
                    <Button size={"sm"} className={"rounded-3xl"}>#Netflix</Button>
                    <Button size={"sm"} className={"rounded-3xl"}>#Amazone</Button>
                    <Button size={"sm"} className={"rounded-3xl"}>#Netflix</Button>
                </li>
            </ul>
        </div>
        </>
    )
}