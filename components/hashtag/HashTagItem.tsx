import {Button} from "@/components/ui/button";


type HashTagItemProps = {
    company: string;
    onSelectCompany: (company: string) => void;
}

export default function HashTagItem({company, onSelectCompany}: HashTagItemProps) {
    return (
        <>
            <li key={company} className={"flex flex-col w-fit gap-4 mb-3"}>
                <Button
                    onClick={() => onSelectCompany(company)}
                    size={"sm"}
                    className={"rounded-3xl"}>#{company}
                </Button>
            </li>
        </>
    )
}