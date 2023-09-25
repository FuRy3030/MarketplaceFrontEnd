import GetUniversityNames from "../../app/api/requests/olympiads-search/queries/GetUniversityNames";
import GetPartialTutors from "../../app/api/requests/tutors/queries/GetPartialTutors";
import IPartialTutor from "../../app/api/types/tutors/IPartialTutor";
import TutorShortcut from "../../app/components/molecules/list-items/TutorShortcut";
import TutorsSearch from "../../app/components/organisms/search/TutorsSearch";


function Page({ PartialTutors, UniversityNames } : { PartialTutors: IPartialTutor [], UniversityNames: string [] }) {
    return (
        <TutorsSearch ChildrenWrapperClassName="px-4 py-2" UniversityNames={UniversityNames}>
            {PartialTutors.map((Tutor) => {
                return <TutorShortcut key={Tutor.Id} Tutor={Tutor} />
            })}
        </TutorsSearch>
    );
};

export async function getStaticProps() {
    const PartialTutors = await GetPartialTutors();
    const UniversityNames = await GetUniversityNames();
  
    return {
        props: {
            PartialTutors,
            UniversityNames
        },
        revalidate: 3600  
    };
}

export default Page;