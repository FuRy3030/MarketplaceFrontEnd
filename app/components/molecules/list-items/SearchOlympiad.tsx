import clsx from "clsx";
import CircleRating from "../../atoms/rating/CircleRating";

interface TutorOlympiadProps {
    Name: string;
    Color: string;
    LaureatePrivilege: "FULL" | "PARTIAL" | "NONE";
    FinalistPrivilege: "FULL" | "PARTIAL" | "NONE";
    ClassName?: string;
};

function SearchOlympiad(Props: TutorOlympiadProps) {
    return (
        <div className={clsx("flex flex-col mt-7", Props.ClassName)}>
            <h3 className="flex items-center text-xl font-bold text-dark mb-2 leading-6" style={{ color: Props.Color }}>
                {Props.Name}
            </h3>
            <div className="flex flex-row items-center mb-1">
                <CircleRating 
                    Color={Props.Color}
                    Dots={2} 
                    ActiveDots={Props.LaureatePrivilege == "FULL" ? 2 : 
                        Props.LaureatePrivilege == "PARTIAL" ? 1 : 0}
                    ClassName="w-max ml-0.5" 
                />
                <span className="text-base font-semibold text-semi-dark-alt ml-4">
                    Laureat - {Props.LaureatePrivilege == "FULL" ? "Pełne pominięcie procesu rekrutacji" : 
                        Props.LaureatePrivilege == "PARTIAL" ? "Częściowe pominięcie procesu rekrutacji" : 
                        "Brak pominięcia procesu rekrutacji"}
                </span>
            </div>
            <div className="flex flex-row items-center">
                <CircleRating 
                    Color={Props.Color}
                    Dots={2} 
                    ActiveDots={Props.FinalistPrivilege == "FULL" ? 2 : 
                        Props.FinalistPrivilege == "PARTIAL" ? 1 : 0}
                    ClassName="w-max ml-0.5" 
                />
                <span className="text-base font-semibold text-semi-dark-alt ml-4">
                    Finalista - {Props.FinalistPrivilege == "FULL" ? "Pełne pominięcie procesu rekrutacji" : 
                        Props.FinalistPrivilege == "PARTIAL" ? "Częściowe pominięcie procesu rekrutacji" : 
                        "Brak pominięcia procesu rekrutacji"}
                </span>
            </div>
        </div>
    );
};

export default SearchOlympiad;