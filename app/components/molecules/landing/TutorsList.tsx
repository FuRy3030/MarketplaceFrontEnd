import UseLandingTutors from "../../../hooks/constants/UseLandingTutors";
import TutorCard from "../../atoms/landing/TutorCard";

function TutorsList() {
    return (
        <div className="relative flex flex-row flex-wrap min-w-[770px] justify-between">
            {UseLandingTutors().map((Tutor) => {
                return <TutorCard
                    key={Tutor.Name}
                    Name={Tutor.Name} 
                    ImageSrc={Tutor.ImageSrc}
                    Description={Tutor.Description}
                    Alt="Tutor"
                />
            })}
        </div>
    )
};

export default TutorsList;