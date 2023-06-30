import GetPartialTutors from "../app/api/requests/tutors/queries/GetPartialTutors";
import IPartialTutor from "../app/api/types/tutors/IPartialTutor";
import NavigationBar from "../app/components/organisms/navigation/NavigationBar";
import TutorsSearch from "../app/components/organisms/search/TutorsSearch";

function Page({ PartialTutors } : { PartialTutors: IPartialTutor [] }) {
    console.log("PartialTutors", PartialTutors);

    return (
        <div className="w-full flex flex-col relative overflow-hidden min-h-screen">
            <NavigationBar />
            <TutorsSearch Tutors={PartialTutors} />
        </div>
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