import GetPartialTutors from "../../app/api/requests/tutors/queries/GetPartialTutors";
import IPartialTutor from "../../app/api/types/tutors/IPartialTutor";
import TutorShortcut from "../../app/components/molecules/list-items/TutorShortcut";
import TutorsSearch from "../../app/components/organisms/search/TutorsSearch";


function Page({ PartialTutors } : { PartialTutors: IPartialTutor [] }) {
    return (
        <TutorsSearch ChildrenWrapperClassName="px-4 py-2">
            {PartialTutors.map((Tutor) => {
                return <TutorShortcut key={Tutor.Id} Tutor={Tutor} />
            })}
        </TutorsSearch>
    );
};

export async function getServerSideProps() {
    const PartialTutors = await GetPartialTutors();
  
    return {
        props: {
            PartialTutors
        }
    };
}

export default Page;