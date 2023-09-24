import GetFullTutor from "../../../../app/api/requests/tutors/queries/GetFullTutor";
import ITutor from "../../../../app/api/types/tutors/ITutor";
import TutorProfileWrapper from "../../../../app/components/atoms/wrappers/TutorProfileWrapper";
import TutorIntroView from "../../../../app/components/organisms/views/TutorIntroView";
import TutorsSearch from "../../../../app/components/organisms/search/TutorsSearch";
import FindOlympiadWithHighestExperience from "../../../../app/helpers/tutors/FindOlympiadWithHighestExperience";
import UseOlympiadsLabelValuePair from "../../../../app/hooks/constants/UseOlympiadsLabelValuePair";
import UseOlympiadsBackgrounds from "../../../../app/hooks/constants/UseOlympiadsBackgrounds";
import ConsultationPricingForm from "../../../../app/components/organisms/forms/ConsultationPricingForm";
import ConsultationDatesForm from "../../../../app/components/organisms/forms/ConsultationDatesForm";
import BottomDrawer from "../../../../app/components/modals/drawers/BottomDrawer";
import StandardButton from "../../../../app/components/atoms/buttons/MyStandardButton";
import { useSnapshot } from "valtio";
import ConsultationDatesState from "../../../../app/store/payments/ConsultationDatesState";
import PriceOptionState from "../../../../app/store/payments/PriceOptionState";
import UseMeetingMutation from "../../../../app/api/requests/meetings/mutations/UseMeetingMutation";
import GetUniversityNames from "../../../../app/api/requests/olympiads-search/queries/GetUniversityNames";
import GetBookedDatesForTutor from "../../../../app/api/requests/meetings/queries/GetBookedDatesForTutor";
import MyToast from "../../../../app/components/modals/toasts/MyToast";
import { useState } from "react";
import AuthState from "../../../../app/store/auth/AuthState";
import { useRouter } from "next/router";
import LoadingScreen from "../../../../app/components/LoadingScreen";

function Page({ Tutor, BookedDates, UniversityNames } : { Tutor: ITutor, BookedDates: string [], UniversityNames: string [] }) {
    const { mutate, error, isLoading } = UseMeetingMutation();
    const Router = useRouter();
    const ConsultationDatesStateSnapshot = useSnapshot(ConsultationDatesState);
    const PriceOptionStateSnapshot = useSnapshot(PriceOptionState);
    const IsUserLogged = useSnapshot(AuthState).IsLogged;
    const [IsUserNotLogged, SetIsNotLogged] = useState<boolean>(false);
    
    return (
        <TutorsSearch UniversityNames={UniversityNames} ChildrenWrapperClassName="px-4">
            <TutorProfileWrapper Variant="introduction" Color={UseOlympiadsLabelValuePair().find(
                (Olympiad) => Olympiad.value === FindOlympiadWithHighestExperience(Tutor))?.color}
                BackgroundImageSrc={UseOlympiadsBackgrounds()[FindOlympiadWithHighestExperience(Tutor) as 
                    keyof typeof UseOlympiadsBackgrounds]}
                ClassName="mb-24"
            >
                <TutorIntroView Tutor={Tutor} />
            </TutorProfileWrapper>
            {isLoading ? 
                <LoadingScreen Message="Rezerwujemy twoją konsultację..." ClassName="mt-20 sm:mt-0" /> 
                :
                <>
                    <TutorProfileWrapper Variant="default" Text="Wybierz pakiet" ClassName="mt-20 mb-11 sm:mt-0">
                        <ConsultationPricingForm Tutor={Tutor} />
                    </TutorProfileWrapper>
                    <TutorProfileWrapper Variant="default" Text="Wybierz termin/y konsultacji" ClassName="mb-10">
                        <ConsultationDatesForm Tutor={Tutor} BookedDates={BookedDates} />
                    </TutorProfileWrapper>
                </>
            }
            <BottomDrawer ClassName="ml-[-1rem] flex flex-col sm:flex-row justify-between items-center cursor-default">
                <div className="flex flex-col flex-1 mb-2.5 sm:mb-0">
                    <div className="flex flex-row flex-1 mb-0">
                        <span className="text-lg font-bold text-semi-dark-alt mr-2">
                            Pozostało terminów do wybrania:
                        </span>
                        <span className="text-lg font-bold text-brand-purple-light">
                            {typeof PriceOptionStateSnapshot.PaidHours === 'undefined' ? 0 :
                                PriceOptionStateSnapshot.PaidHours === 0 ? 1 - ConsultationDatesStateSnapshot.ChosenDates.length :
                                PriceOptionStateSnapshot.PaidHours - ConsultationDatesStateSnapshot.ChosenDates.length}
                        </span>
                    </div>
                    <span className="text-sm font-bold text-red-500">
                        Pamiętaj, nieopłacona rezerwacja zostanie anulowana po 30 minutach!
                    </span> 
                </div>
                <StandardButton 
                    Text="Zapłać"
                    Icon="icon-[material-symbols--payments-rounded]"
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

                        if (ConsultationDatesStateSnapshot.ChosenDatesString && PriceOptionStateSnapshot.ServiceName) {
                            mutate({ 
                                TutorId: Tutor.Id,
                                MeetingDates: [...ConsultationDatesStateSnapshot.ChosenDatesString], 
                                EducationalServiceName: PriceOptionStateSnapshot.ServiceName,
                                PaidHours: PriceOptionStateSnapshot.PaidHours
                            });
                        }
                    }}
                    ClassName="bg-brand-purple-light hover:text-dark px-10 w-auto ml-4"             
                />
            </BottomDrawer>
            <MyToast 
                Title="Nie jesteś zalogowany"
                Type="danger"
                Icon="warning"
                IsActionTriggered={IsUserNotLogged}
            >
                <p className="text-base font-medium">Aby zarezerwować i zapłacić za konsultację musisz zalogować się na swoje konto ucznia</p>
            </MyToast>
            <MyToast 
                Title="Tworzenie rezerwacji nie powiodło się"
                Type="danger"
                Icon="warning"
                IsActionTriggered={!!error}
            >
                {error?.response.errors?.at(0)?.message === 'Trial hour already used or unavaliable' ? 
                    <p className="text-base font-medium">Wykorzystałeś już próbną konsultację dla tego tutora albo kupiłeś przynajmniej jedną płatną godzinę</p> : 
                    <p className="text-base font-medium">Wystąpił niezydentyfikowany błąd</p>
                }
            </MyToast>
        </TutorsSearch>
    );
};

export async function getServerSideProps({ params } : { params: Record<string, string | undefined> }) {
    const { TutorId } = params;
    const Tutor = await GetFullTutor(TutorId);
    const BookedDates = await GetBookedDatesForTutor(TutorId);
    const UniversityNames = await GetUniversityNames();
  
    return {
        props: {
            Tutor,
            BookedDates,
            UniversityNames
        }
    };
}

export default Page;