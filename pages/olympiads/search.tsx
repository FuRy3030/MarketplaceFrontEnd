import GetOlympiadPrivileges from "../../app/api/requests/olympiads-search/queries/GetOlympiadPrivileges";
import GetUniversityNames from "../../app/api/requests/olympiads-search/queries/GetUniversityNames";
import GetPartialTutors from "../../app/api/requests/tutors/queries/GetPartialTutors";
import IPartialTutor from "../../app/api/types/tutors/IPartialTutor";
import SearchOlympiad from "../../app/components/molecules/list-items/SearchOlympiad";
import TutorShortcut from "../../app/components/molecules/list-items/TutorShortcut";
import TutorsSearch from "../../app/components/organisms/search/TutorsSearch";
import UseOlympiadsLabelValuePair from "../../app/hooks/constants/UseOlympiadsLabelValuePair";

function Page({ PartialTutors, UniversityNames, Privileges } : 
    { PartialTutors: IPartialTutor [], UniversityNames: string [], Privileges: IOlympiadPrivilege [] }
) {
    return (
        <TutorsSearch ChildrenWrapperClassName="px-4 py-2" UniversityNames={UniversityNames}>
            <>
                <div className="relative w-full flex flex-col bg-white shadow-soft-jjt rounded-lg px-7 py-6 h-auto mb-11 mt-4">
                    <h2 className="text-2xl font-bold text-dark mb-2">
                        Te olimpiady powinny Cię zainteresować...
                    </h2>
                    <>
                        {Privileges.filter(Privilege => Privilege.Finalist != 'NONE' && Privilege.Laureate != 'NONE')
                            .map((Privilege: IOlympiadPrivilege) => {
                                return <SearchOlympiad 
                                    key={Privilege.Olympiad}
                                    Name={UseOlympiadsLabelValuePair().find(
                                        (OlympiadData) => OlympiadData.value === Privilege.Olympiad)?.label as string}
                                    Color={UseOlympiadsLabelValuePair().find(
                                        (OlympiadData) => OlympiadData.value === Privilege.Olympiad)?.color as string}
                                    LaureatePrivilege={Privilege.Laureate}
                                    FinalistPrivilege={Privilege.Finalist}
                                />
                            })
                        }
                    </>
                </div>
                <h2 className="text-3xl font-bold text-dark mb-2.5 text-center cursor-default">
                    Polecani Tutorzy
                </h2>
                {PartialTutors.filter((Tutor) => Privileges.some(Privilege => 
                    Tutor.TutorDetails.Olympiads.map((Olympiad) => Olympiad.Name).includes(Privilege.Olympiad)))
                .map((Tutor) => {
                    return <TutorShortcut key={Tutor.Id} Tutor={Tutor} />
                })}
            </>
        </TutorsSearch>
    );
};

export async function getServerSideProps(context: any) {
    const { query } = context;
    const { name, major } = query;

    const PartialTutors = await GetPartialTutors();
    const UniversityNames = await GetUniversityNames();
    const Privileges = await GetOlympiadPrivileges(name, major);
  
    return {
        props: {
            PartialTutors,
            UniversityNames,
            Privileges
        }
    };
}

export default Page;