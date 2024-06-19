import Footer from "@/components/Footer";
import Container from "@/components/Container";
import HashTagList from "@/components/HashTagList";

export default function Home() {
    return (
        <main className="grid grid-cols-4 min-h-screen bg-black">
            <Footer/>
            <div className={"col-span-2"}>
                <Container/>
            </div>
            <HashTagList/>
        </main>
    );
}
