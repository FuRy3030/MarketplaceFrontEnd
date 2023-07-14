import { Config } from "../../../../config";
import ITutor from "../../../api/types/tutors/ITutor";
import FindTutorHighestAchievement from "../../../helpers/tutors/FindTutorHighestAchievement";
import FindTutorPricingRange from "../../../helpers/tutors/FindTutorPricingRange";
import GetReadableEducationLevel from "../../../helpers/tutors/GetReadableEducationLevel";
import AvatarWithRings from "../../atoms/avatars/AvatarWithRings";
import RectangularBadge from "../../atoms/badges/RectangularBadge";

interface TutorIntroViewProps {
    Tutor: ITutor;
};

function TutorIntroView(Props: TutorIntroViewProps) {
    const { Tutor } = Props;

    return (
        <>
            <AvatarWithRings 
                Width={118}
                Height={118}
                BackgroundRingSize={47.5}
                BorderRingSize={11.5}
                Src={`${Config.TutorsMicroservice_FilesUrl}ProfileImage_Tutor_${Tutor.Id}`}
                ClassName="w-full mr-9 z-10"  
                TransparentRings                     
            />
            <div className="flex flex-col flex-1 gap-y-2 cursor-default relative">
                <h4 className="text-3xl font-bold text-white mb-0">
                    {Tutor.FirstName} {Tutor.LastName}
                </h4>
                <span className="flex items-center gap-x-2 text-base font-bold text-white">
                    <span className="icon-[material-symbols--person-pin-circle-outline-rounded] text-2xl">Icon</span>
                    {Tutor.TutorDetails.FullLocation}
                </span>
                <span className="flex items-center gap-x-2 text-base font-bold text-white">
                    <span className="icon-[charm--graduate-cap] text-2xl">Icon</span>
                    {GetReadableEducationLevel(Tutor.TutorDetails.Education)}
                </span>
                <h6 className="flex items-center gap-x-2 text-[21.3px] font-bold text-white mb-0">
                    <span className="icon-[majesticons--money-hand-line] text-2xl">Icon</span>
                    {FindTutorPricingRange(Tutor)} / Konsultacja
                </h6>
            </div>
            <div className="flex justify-evenly w-full px-2.5 absolute left-0 bottom-0 transform translate-y-1/2 z-10">
                {(Tutor.TutorDetails.IsRemote && Tutor.TutorDetails.IsStationary) ?
                    <>
                        <RectangularBadge
                            Text="Próbna konsultacja" 
                            SubText="Bezpłatne 1 zajęcia"
                            Icon="icon-[material-symbols--question-exchange-rounded]"
                            Color="#316dff"
                            ClassName="w-[22.5%]"
                        />
                        <RectangularBadge
                            Text={FindTutorHighestAchievement(Tutor, true)} 
                            SubText="Najwyższe osiągnięcie"
                            Icon="icon-[tabler--award]"
                            Color="rgb(255, 175, 0)"
                            ClassName="w-[22.5%]"
                        />
                        <RectangularBadge
                            Text="Zdalnie" 
                            SubText="Zajęcia zdalne"
                            Icon="icon-[ri--pin-distance-line]"
                            Color="#635bff"
                            ClassName="w-[22.5%]"
                        />
                        <RectangularBadge
                            Text="Stacjonarnie" 
                            SubText="Zajęcia stacjonarne"
                            Icon="icon-[material-symbols--location-city]"
                            Color="rgb(255, 82, 82)"
                            ClassName="w-[22.5%]"
                        />
                    </>
                    :
                    <>
                        <RectangularBadge
                            Text="Próbna konsultacja" 
                            SubText="Bezpłatne 1 zajęcia"
                            Icon="icon-[material-symbols--question-exchange-rounded]"
                            Color="#316dff"
                            ClassName="w-[30%]"
                        />
                        <RectangularBadge
                            Text={FindTutorHighestAchievement(Tutor, true)} 
                            SubText="Najwyższe osiągnięcie"
                            Icon="icon-[tabler--award]"
                            Color="rgb(255, 175, 0)"
                            ClassName="w-[30%]"
                        />
                        {Tutor.TutorDetails.IsRemote ?
                            <RectangularBadge
                                Text="Zdalnie" 
                                SubText="Zajęcia zdalne"
                                Icon="icon-[ri--pin-distance-line]"
                                Color="#635bff"
                                ClassName="w-[30%]"
                            />
                            :
                            <RectangularBadge
                                Text="Stacjonarnie" 
                                SubText="Zajęcia stacjonarne"
                                Icon="icon-[material-symbols--location-city]"
                                Color="rgb(255, 82, 82)"
                                ClassName="w-[30%]"
                            />
                        }
                    </>
                }              
            </div>
        </>
    );
};

export default TutorIntroView;