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
            <div className="w-full h-auto flex flex-row items-center my-2 px-5 py-2.5 rounded-xl bg-white shadow-steep-jjt cursor-pointer">
                <AvatarWithRings 
                    Width={85}
                    Height={85}
                    BackgroundRingSize={25}
                    BorderRingSize={6}
                    Src={`${Config.TutorsMicroservice_FilesUrl}ProfileImage_Tutor_${Props.Tutor.Id}`}
                    ClassName="w-full mr-3.5"                       
                />
                <div className="flex flex-col flex-1">
                    <div className="w-full flex flex-row items-center mb-2">
                        <h4 className="text-xl font-bold text-dark mb-0">
                            {Props.Tutor.FirstName} {Props.Tutor.LastName}
                        </h4>
                        {/* <StandardBadge
                            Text="Bezpłatna konsultacja" 
                            Variant="fill"
                            Background="blue"
                            Color="blue"
                            ClassName="ml-2"
                        /> */}
                        <h6 className="text-xl font-semibold text-normal-green mb-0 ml-auto">
                            {FindTutorPricingRange(Props.Tutor)} / Konsultacja
                        </h6>
                    </div>
                    <div className="w-full flex flex-row items-center mb-3">
                        <span className="text-[12.8px] font-semibold text-semi-dark flex items-center">
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
                        {Props.Tutor.TutorDetails.IsRemote && 
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
                        />
                    </div>
                    <div className="w-full flex flex-row items-center justify-end gap-x-2">
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