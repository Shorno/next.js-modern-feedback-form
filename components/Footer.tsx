export default function Footer() {
    return (
        <>
            <footer className={"flex flex-col"}>
                <div className={"-rotate-90 absolute bottom-32 left-72"}>
                    <p className="text-xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">Building
                        as a practice project.</p>
                    <p className="text-sm relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">&copy;Copyright
                        by Shorno Kamal Roy.</p>

                </div>
            </footer>
        </>
    )
}