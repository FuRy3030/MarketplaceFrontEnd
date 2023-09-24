import GetFullTutor from "../../../../app/api/requests/tutors/queries/GetFullTutor";
import ITutor from "../../../../app/api/types/tutors/ITutor";
import TutorProfileWrapper from "../../../../app/components/atoms/wrappers/TutorProfileWrapper";
import TutorIntroView from "../../../../app/components/organisms/views/TutorIntroView";
import TutorsSearch from "../../../../app/components/organisms/search/TutorsSearch";
import FindOlympiadWithHighestExperience from "../../../../app/helpers/tutors/FindOlympiadWithHighestExperience";
import UseOlympiadsLabelValuePair from "../../../../app/hooks/constants/UseOlympiadsLabelValuePair";
import TutorOlympiad from "../../../../app/components/molecules/list-items/TutorOlympiad";
import UseOlympiadsLogos from "../../../../app/hooks/constants/UseOlympiadsLogos";
import GetReadableExperienceLevel from "../../../../app/helpers/tutors/GetReadableExperienceLevel";
import { sanitize } from "isomorphic-dompurify";
import BottomDrawer from "../../../../app/components/modals/drawers/BottomDrawer";
import StandardButton from "../../../../app/components/atoms/buttons/MyStandardButton";
import GetNumericalExperienceLevel from "../../../../app/helpers/tutors/GetNumericalExperienceLevel";
import UseOlympiadsBackgrounds from "../../../../app/hooks/constants/UseOlympiadsBackgrounds";
import GetUniversityNames from "../../../../app/api/requests/olympiads-search/queries/GetUniversityNames";
import { useRouter } from "next/router";
import { useSnapshot } from "valtio";
import AuthState from "../../../../app/store/auth/AuthState";
import { useState } from "react";
import MyToast from "../../../../app/components/modals/toasts/MyToast";

function Page({ Tutor, UniversityNames } : { Tutor: ITutor, UniversityNames: string [] }) {
    const SanitizedHTMLDescription = sanitize(Tutor.TutorDetails.Description);
    const IsUserLogged = useSnapshot(AuthState).IsLogged;
    const [IsUserNotLogged, SetIsNotLogged] = useState<boolean>(false);
    const Router = useRouter();

    return (
        <TutorsSearch ChildrenWrapperClassName="px-4" UniversityNames={UniversityNames}>
            <TutorProfileWrapper Variant="introduction" Color={UseOlympiadsLabelValuePair().find(
                (Olympiad) => Olympiad.value === FindOlympiadWithHighestExperience(Tutor))?.color}
                BackgroundImageSrc={UseOlympiadsBackgrounds()[FindOlympiadWithHighestExperience(Tutor) as 
                    keyof typeof UseOlympiadsBackgrounds]}
                ClassName="mb-24"
            >
                <TutorIntroView Tutor={Tutor} />
            </TutorProfileWrapper>
            <TutorProfileWrapper Variant="default" Text="Olimpiady przedmiotowe" ClassName="mt-20 mb-11 sm:mt-0">
                <>
                    {Tutor.TutorDetails.Olympiads.map((Olympiad) => {
                        return <TutorOlympiad 
                            key={Olympiad.Name}
                            Name={UseOlympiadsLabelValuePair().find(
                                (OlympiadData) => OlympiadData.value === Olympiad.Name)?.label as string}
                            Color={UseOlympiadsLabelValuePair().find(
                                (OlympiadData) => OlympiadData.value === Olympiad.Name)?.color as string}
                            Logo={UseOlympiadsLogos()[Olympiad.Name]}
                            Experience={GetReadableExperienceLevel(Olympiad.Experience)}
                            ActiveDots={GetNumericalExperienceLevel(Olympiad.Experience)}
                        />
                    })}
                </>
            </TutorProfileWrapper>
            <TutorProfileWrapper Variant="default" Text="Coś o mnie" ClassName="mb-10">
                <div dangerouslySetInnerHTML={{ __html: SanitizedHTMLDescription }} />
            </TutorProfileWrapper>
            <BottomDrawer ClassName="ml-[-1rem] flex flex-col sm:flex-row justify-between items-center cursor-default">
                <div className="flex flex-col flex-1 mb-2.5 sm:mb-0">
                    <span className="text-center sm:text-left text-lg font-bold text-semi-dark-alt">
                        Nie czekaj!
                    </span>
                    <span className="text-sm font-semibold text-semi-dark">
                        Wybierz swojego tutora już dziś
                    </span>
                </div>
                <StandardButton 
                    Text="Zacznij przygotowania do olimpiady"
                    Icon="icon-[mdi--cursor-default-click]"
                    Type="button"   
                    onClick={() => {
                        if (!IsUserLogged && !IsUserNotLogged) {
                            SetIsNotLogged(true);
                            return;
                        }
                        else if (!IsUserLogged && IsUserNotLogged) {
                            Router.push("/auth/login");
                            return;
                        } 

                        Router.push(`/tutors/tutor/${Tutor.Id}/payment`)
                    }}
                    ClassName="bg-brand-purple-light hover:text-dark px-6 sm:px-10 w-auto ml-4 text-sm sm:text-base"             
                />
            </BottomDrawer>    
            <MyToast 
                Title="Nie jesteś zalogowany"
                Type="danger"
                Icon="warning"
                IsActionTriggered={IsUserNotLogged}
            >
                <p className="text-base font-medium">
                    Aby zarezerwować i zapłacić za konsultację musisz zalogować się na swoje konto ucznia
                </p>
            </MyToast>      
        </TutorsSearch>
    );
};

export async function getServerSideProps({ params } : { params: Record<string, string | undefined> }) {
    const { TutorId } = params;
    const Tutor = await GetFullTutor(TutorId);
    const UniversityNames = await GetUniversityNames();
  
    return {
        props: {
            Tutor,
            UniversityNames
        }
    };
}

export default Page;