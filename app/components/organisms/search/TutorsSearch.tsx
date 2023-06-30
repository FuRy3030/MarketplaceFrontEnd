import IPartialTutor from "../../../api/types/tutors/IPartialTutor";
import TutorShortcut from "../../molecules/list-items/TutorShortcut";
import OlympiadsFilter from "../filters/OlympiadsFilter";

interface TutorsSearchProps {
    Tutors: IPartialTutor [];
}

function TutorsSearch(Props: TutorsSearchProps) {
    return (
        <>
            <div className="w-full overflow-x-auto CustomHorizontalScroll">
                <OlympiadsFilter />
            </div>
            <div className="w-full flex flex-row flex-1 bg-dark-gray">
                <div className="w-[60%] flex flex-col px-4 py-2">
                    {Props.Tutors.map((Tutor) => {
                        return <TutorShortcut key={Tutor.Id} Tutor={Tutor} />
                    })}
                </div>
                <div className="w-[40%] flex flex-col bg-white">

                </div>
            </div>
        </>
    );
};

export default TutorsSearch;