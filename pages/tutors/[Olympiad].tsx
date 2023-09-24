import { useRouter } from "next/router";
import GetPartialTutors from "../../app/api/requests/tutors/queries/GetPartialTutors";
import IPartialTutor from "../../app/api/types/tutors/IPartialTutor";
import TutorsSearch from "../../app/components/organisms/search/TutorsSearch";
import TutorShortcut from "../../app/components/molecules/list-items/TutorShortcut";
import GetUniversityNames from "../../app/api/requests/olympiads-search/queries/GetUniversityNames";


function Page({ PartialTutors, UniversityNames } : { PartialTutors: IPartialTutor [], UniversityNames: string [] }) {
    const Router = useRouter();
    const OlympiadFromRoute = Router.query.Olympiad as string | undefined;

    let Tutors = PartialTutors;
    if (OlympiadFromRoute) {
        Tutors = PartialTutors.filter((Tutor) => {
            return Tutor.TutorDetails.Olympiads.findIndex((Olympiad) => 
                Olympiad.Name === OlympiadFromRoute.toUpperCase()) != -1;
        });
    }

    return (
        <TutorsSearch Olympiad={OlympiadFromRoute as string | undefined} UniversityNames={UniversityNames} 
            ChildrenWrapperClassName="px-4 py-2"
        >
            {Tutors.map((Tutor) => {
                return <TutorShortcut key={Tutor.Id} Tutor={Tutor} />
            })}
        </TutorsSearch>
    );
};

export async function getServerSideProps() {
    const PartialTutors = await GetPartialTutors();
    const UniversityNames = await GetUniversityNames();
  
    return {
        props: {
            PartialTutors,
            UniversityNames
        }
    };
}

export default Page;