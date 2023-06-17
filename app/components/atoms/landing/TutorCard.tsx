import IsResolution from "../../../hooks/universal/IsResolution";
import AvatarWithRings from "../avatars/AvatarWithRings";

interface TutorCardProps {
    ImageSrc: string;
    Name: string;
    Description: string;
    Alt?: string;
};

function TutorCard(Props: TutorCardProps) {
    const IsLargeUsed = IsResolution(992);

    return (
        <div className="flex flex-col w-[22.5%] my-5 mx-auto">
            <AvatarWithRings 
                Width={IsLargeUsed ? 170 : 100}
                Height={IsLargeUsed ? 170 : 100}
                Src={Props.ImageSrc}
                ClassName="w-full mb-4 mx-auto" 
                Alt={Props.Alt}                     
            />
            <h6 className="text-sm text-dark font-bold mb-2 lg:text-lg text-center">
                {Props.Name}
            </h6>
            <p className="text-[9.5px] font-semibold text-semi-dark lg:text-sm mb-0 text-justify">
                {Props.Description}
            </p>
        </div>
    );
};

export default TutorCard;