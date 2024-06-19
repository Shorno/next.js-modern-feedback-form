export default function FeedbackList() {
    return (
        <>
            <ol>
                <li className={"flex justify-around  border-b  items-center pb-5 pt-2 border-black"}>
                    <div className={"flex flex-col items-center justify-center"}>
                        <button>
                            <div className={"ml-1"}>
                                <svg width="20" height="20" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 9H11L7.5 4.5L4 9Z" fill="gray"></path>
                                </svg>
                            </div>
                            <div className={"font-bold"}>550</div>
                        </button>
                    </div>
                    <div
                        className={"size-12 rounded-md bg-pink-400 text-white text-4xl flex-col flex items-center justify-center font-bold -ml-5"}>B
                    </div>
                    <div className={"-ml-10 w-[70%]"}>
                        <p className={"font-bold text-md text-gray-400"}>Netflix</p>
                        <p className={"font-medium flex  text-wrap"}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusantium animi at dolorem enim eveniet exercitationem dolorem enim
                            eveniet exercitationem
                            asdadasasdSDasda asd asdasd asdasd
                            sdfs


                            !</p>
                    </div>
                    <div className={"flex items-center"}>
                        <p>3d</p>
                    </div>
                </li>
                <li className={"flex justify-around pt-2 border-b  items-center pb-5 border-black"}>
                    <div className={"flex flex-col items-center justify-center"}>
                        <button>
                            <div className={"ml-1"}>
                                <svg width="20" height="20" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 9H11L7.5 4.5L4 9Z" fill="gray"></path>
                                </svg>
                            </div>
                            <div className={"font-bold"}>550</div>
                        </button>
                    </div>
                    <div
                        className={"size-12 rounded-md bg-pink-400 text-white text-4xl flex-col flex items-center justify-center font-bold -ml-5"}>B
                    </div>
                    <div className={"-ml-10 w-[70%]"}>
                        <p className={"font-bold text-md text-gray-400"}>Netflix</p>
                        <p className={"font-medium flex h-10 text-wrap"}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusantium animi at dolorem enim eveniet exercitationem dolorem enim
                            eveniet exercitationem !</p>
                    </div>
                    <div className={"flex items-center"}>
                        <p>3d</p>
                    </div>
                </li>


            </ol>
        </>
    )
}