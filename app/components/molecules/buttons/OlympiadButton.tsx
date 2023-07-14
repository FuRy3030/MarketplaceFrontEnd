import UseOlympiadsIcons from "../../../hooks/constants/UseOlympiadsIcons";
import CircleButton from "../../atoms/buttons/CircleButton";

interface OlympiadButtonProps {
    EnumValue: string;
    Label: string;
    Color: string;
    IsActive: boolean;
}

function OlympiadButton(Props: OlympiadButtonProps) {
    return (
        <div className="flex flex-col mx-1.5 my-1">
            <CircleButton
                Icon={UseOlympiadsIcons()[Props.EnumValue as keyof typeof UseOlympiadsIcons]}
                Color={Props.IsActive ? Props.Color : 'linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168))'}
                OnClick={() => {}} 
                ClassName="mb-1 mx-auto"
            />
            <span className="text-[10px] text-semi-dark font-bold text-center max-w-[90px]">
                {Props.Label}
            </span>
        </div>
);
};

export default OlympiadButton;