import UseOlympiadsLabelValuePair from "../../../hooks/constants/UseOlympiadsLabelValuePair";
import OlympiadButton from "../../molecules/buttons/OlympiadButton";

function OlympiadsFilter() {
    return (
        <div className="pt-4 pb-1.5 px-7 flex flex-row justify-center overflow-hidden w-max">
            {UseOlympiadsLabelValuePair().map((Olympiad) =>{
                return (
                    <OlympiadButton
                        key={Olympiad.value} 
                        EnumValue={Olympiad.value as string}
                        Label={Olympiad.label}
                        Color={Olympiad.color as string}
                    />
                )
            })}
        </div>
    );
};

export default OlympiadsFilter;