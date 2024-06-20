import Image from "next/image";

export default function Spinner(){
    return(
        <>
            <div className={"w-full h-full flex items-center justify-center"}>
                <Image src={"/loading.svg"} alt={"loading spinner"} width={100} height={100} className={"animate-spin"}/>
            </div>
        </>
    )
}