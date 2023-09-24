import Link from "next/link";
import { Config } from "../../../../config";
import IPartialTutor from "../../../api/types/tutors/IPartialTutor";
import UseOlympiadsLabelValuePair from "../../../hooks/constants/UseOlympiadsLabelValuePair";
import AvatarWithRings from "../../atoms/avatars/AvatarWithRings";
import OlympiadBadge from "../../atoms/badges/OlympiadBadge";
import StandardBadge from "../../atoms/badges/StandardBadge";
import FindTutorPricingRange from "../../../helpers/tutors/FindTutorPricingRange";
import FindTutorHighestAchievement from "../../../helpers/tutors/FindTutorHighestAchievement";

interface TutorShortcutProps {
    Tutor: IPartialTutor;
}

function TutorShortcut(Props: TutorShortcutProps) {
    const TutorOlympiads = Props.Tutor.TutorDetails.Olympiads;
    
    return (
        <Link href={`/tutors/tutor/${Props.Tutor.Id}`}>
            <div className="w-full h-auto flex flex-col sm:flex-row items-center my-2 px-5 py-2.5 rounded-xl bg-white shadow-steep-jjt cursor-pointer">
                <div className="w-full sm:w-auto flex flex-row sm:mb-0 mb-3">
                    <AvatarWithRings 
                        Width={85}
                        Height={85}
                        BackgroundRingSize={25}
                        BorderRingSize={6}
                        Src={`${Config.TutorsMicroservice_FilesUrl}ProfileImage_Tutor_${Props.Tutor.Id}`}
                        ClassName="w-full mr-4 sm:mr-3.5"                       
                    />
                    <div className="flex sm:hidden flex-col flex-1 items-start">
                        <h4 className="text-[20.5px] font-bold text-dark mb-0 text-left">
                            {Props.Tutor.FirstName} {Props.Tutor.LastName}
                        </h4>
                        <h6 className="text-[13.5px] font-semibold text-normal-green mb-0.5">
                            {FindTutorPricingRange(Props.Tutor)} / Konsultacja
                        </h6>
                        <span className="text-[12.8px] font-semibold text-semi-dark flex items-center">
                            <span className="icon-[material-symbols--pin-drop-rounded] mr-1.5"></span>
                            {Props.Tutor.TutorDetails.City}, {Props.Tutor.TutorDetails.Country}
                        </span>
                        <StandardBadge
                            Text={FindTutorHighestAchievement(Props.Tutor)} 
                            Background="white"
                            Color="gray"
                            Variant="outline"
                            ClassName="ml-auto mt-auto mb-1"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col flex-1">
                    <div className="w-full hidden sm:flex flex-row items-center mb-2">
                        <h4 className="text-lg sm:text-xl font-bold text-dark mb-0">
                            {Props.Tutor.FirstName} {Props.Tutor.LastName}
                        </h4>
                        {/* <StandardBadge
                            Text="Bezpłatna konsultacja" 
                            Variant="fill"
                            Background="blue"
                            Color="blue"
                            ClassName="ml-2"
                        /> */}
                        <h6 className="text-sm sm:text-xl font-semibold text-normal-green mb-0 ml-auto">
                            {FindTutorPricingRange(Props.Tutor)} / Konsultacja
                        </h6>
                    </div>
                    <div className="w-full hidden sm:flex flex-row items-center mb-3">
                        <span className="hidden text-[12.8px] font-semibold text-semi-dark sm:flex items-center">
                            <span className="icon-[material-symbols--pin-drop-rounded] mr-1.5"></span>
                            {Props.Tutor.TutorDetails.City}, {Props.Tutor.TutorDetails.Country}
                        </span>
                        {Props.Tutor.TutorDetails.IsRemote && 
                            <StandardBadge
                                Text="Zdalnie" 
                                Variant="fill"
                                Background="brand"
                                Color="brand"
                                ClassName="mx-2.5"
                            />
                        }
                        {Props.Tutor.TutorDetails.IsStationary && 
                            <StandardBadge
                                Text="Stacjonarnie" 
                                Variant="fill"
                                Background="brand"
                                Color="brand"
                                ClassName="mr-auto"
                            />
                        }
                        <StandardBadge
                            Text={FindTutorHighestAchievement(Props.Tutor)} 
                            Background="white"
                            Color="gray"
                            Variant="outline"
                            ClassName="hidden sm:flex"
                        />
                    </div>
                    <div className="w-full flex flex-row flex-wrap md:flex-nowrap items-center justify-end gap-y-1.5 md:gap-y-0 gap-x-2">
                        {TutorOlympiads.map((Olympiad, Index) => {
                            return <OlympiadBadge
                                key={Index} 
                                Text={UseOlympiadsLabelValuePair().find((OlympiadLabelValuePair) => 
                                    OlympiadLabelValuePair.value === Olympiad.Name)?.label!} 
                                Color={UseOlympiadsLabelValuePair().find((OlympiadLabelValuePair) => 
                                    OlympiadLabelValuePair.value === Olympiad.Name)?.color!} 
                            />
                        })}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TutorShortcut;