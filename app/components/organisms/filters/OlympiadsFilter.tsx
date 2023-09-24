import Link from "next/link";
import UseOlympiadsLabelValuePair from "../../../hooks/constants/UseOlympiadsLabelValuePair";
import OlympiadButton from "../../molecules/buttons/OlympiadButton";

interface OlympiadsFilterProps {
    SelectedOlympiad?: string;
}

function OlympiadsFilter(Props: OlympiadsFilterProps) {
    return (
        <div className="pt-4 pb-1.5 px-7 flex flex-row justify-center overflow-hidden w-max">
            <Link href="/tutors">
                <OlympiadButton
                    EnumValue="ALL"
                    Label="Wszystkie Olimpiady"
                    Color="#635bff"
                    IsActive={!Props.SelectedOlympiad}
                />
            </Link>
            {UseOlympiadsLabelValuePair().map((Olympiad) =>{
                return (
                    <Link key={Olympiad.value} href={`/tutors/${Olympiad.value?.toLowerCase()}`}>
                        <OlympiadButton
                            EnumValue={Olympiad.value as string}
                            Label={Olympiad.label}
                            Color={Olympiad.color as string}
                            IsActive={!Props.SelectedOlympiad || Props.SelectedOlympiad === Olympiad.value?.toLowerCase()}
                        />
                    </Link>
                )
            })}
        </div>
    );
};

export default OlympiadsFilter;