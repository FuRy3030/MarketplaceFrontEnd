import { Config } from "../../../../config";
import IPartialTutor from "../../../api/types/tutors/IPartialTutor";
import UseOlympiadsLabelValuePair from "../../../hooks/constants/UseOlympiadsLabelValuePair";
import AvatarWithRings from "../../atoms/avatars/AvatarWithRings";
import OlympiadBadge from "../../atoms/badges/OlympiadBadge";
import StandardBadge from "../../atoms/badges/StandardBadge";

interface TutorShortcutProps {
    Tutor: IPartialTutor;
}

function TutorShortcut(Props: TutorShortcutProps) {
    const TutorOlympiads = Props.Tutor.TutorDetails.Olympiads;
    let TutorPricingText = "";

    if (Props.Tutor.TutorPricings.length === 1) {
        TutorPricingText = `${Props.Tutor.TutorPricings[0].BasePrice} PLN`;
    } else {
        const MinTutorPrice = Math.min(...Props.Tutor.TutorPricings.map((Pricing) => Pricing.BasePrice));
        const MaxTutorPrice = Math.max(...Props.Tutor.TutorPricings.map((Pricing) => Pricing.BasePrice));
        TutorPricingText = `${MinTutorPrice} - ${MaxTutorPrice} PLN`;
    }

    const TutorHighestAchievement = TutorOlympiads
        .findIndex((Olympiad) => Olympiad.Experience === 'WINNER') != -1 ? 'Zwycięzca olimpiady' :
        TutorOlympiads.findIndex((Olympiad) => Olympiad.Experience === 'INTERNATIONAL') != -1 ? 'Olimpiada międzynarodowa' :
        TutorOlympiads.findIndex((Olympiad) => Olympiad.Experience === 'LAUREATE') != -1 ? 'Laureat olimpiady' :
        'Finalista olimpiady';

    return (
        <div className="w-full h-auto flex flex-row items-center my-2 p-4 rounded-xl bg-white shadow-steep-jjt cursor-pointer">
            <AvatarWithRings 
                Width={85}
                Height={85}
                BackgroundRingSize={25}
                BorderRingSize={6}
                Src={`${Config.TutorsMicroservice_FilesUrl}ProfileImage_Tutor_${Props.Tutor.Id}`}
                ClassName="w-full mr-3.5"                       
            />
            <div className="flex flex-col flex-1">
                <div className="w-full flex flex-row justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-dark mb-0">
                        {Props.Tutor.FirstName} {Props.Tutor.LastName}
                    </h4>
                    <h6 className="text-lg font-semibold text-normal-green mb-0">
                        {TutorPricingText}
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
                            ClassName="mx-2.5"
                        />
                    }
                    {Props.Tutor.TutorDetails.IsRemote && 
                        <StandardBadge
                            Text="Stacjonarnie" 
                            Variant="fill"
                            ClassName="mr-auto"
                        />
                    }
                    <StandardBadge
                        Text={TutorHighestAchievement} 
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
    );
};

export default TutorShortcut;