import HashTagItem from "@/components/hashtag/HashTagItem";
import {useFeedbackItemContext} from "@/lib/hooks";


export default function HashTagList() {
    const {companyList, handleSelectCompany} = useFeedbackItemContext()
    return (
        <>
            <div className={"mt-36 ml-20"}>
                <ul>

                    {
                        companyList.map((company) => (
                            <HashTagItem key={company} company={company} onSelectCompany={handleSelectCompany}/>))
                    }

                </ul>
            </div>
        </>
    )
}