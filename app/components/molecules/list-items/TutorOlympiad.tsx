import clsx from "clsx";
import OlympiadExperienceRating from "../../atoms/rating/OlympiadExperienceRating";

interface TutorOlympiadProps {
    Logo: string;
    Name: string;
    Color: string;
    Experience: string;
    ActiveDots: number;
    ClassName?: string;
};

function TutorOlympiad(Props: TutorOlympiadProps) {
    return (
        <div className={clsx("flex flex-row items-center my-7", Props.ClassName)}>
            <div className="flex flex-col cursor-default">
                <OlympiadExperienceRating 
                    Color={Props.Color} 
                    ActiveDots={Props.ActiveDots}
                    ClassName="w-max mb-2.5 ml-0.5" 
                />
                <h3 className="flex items-center text-xl font-bold text-dark mb-0 leading-6" style={{ color: Props.Color }}>
                    {Props.Name}
                </h3>
                <span className="text-lg font-bold text-semi-dark-alt">
                    {Props.Experience}
                </span>
            </div>
            <div className="hidden sm:flex justify-start flex-1 ml-10">
                <img src={Props.Logo} alt="Logo olimpiady" className="h-16 w-auto" />
            </div>
        </div>
    );
};

export default TutorOlympiad;