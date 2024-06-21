import HashTagItem from "@/components/hashtag/HashTagItem";
import {useFeedbackItemStore} from "@/stores/feedbackItemsStore";


export default function HashTagList() {
    const companyList = useFeedbackItemStore((state) => state.getCompanyList())
    const selectCompany = useFeedbackItemStore((state) => state.selectCompany)
    return (
        <>
            <div className={"mt-36 ml-20"}>
                <ul>

                    {
                        companyList.map((company) => (
                            <HashTagItem key={company} company={company} onSelectCompany={selectCompany}/>))
                    }

                </ul>
            </div>
        </>
    )
}