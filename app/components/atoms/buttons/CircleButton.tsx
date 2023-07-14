import clsx from "clsx";

interface CircleButtonProps {
    Icon: string;
    OnClick: () => void;
    Color?: string;
    ClassName?: string;
}

function CircleButton(Props: CircleButtonProps) {
    return (
        <button className={clsx("flex items-center rounded-full p-2 CircleButton", Props.ClassName)} 
            style={{background: Props.Color}}
        >
            <span className={clsx("text-2xl text-white", Props.Icon)}>
                Icon
            </span>
        </button>
    );
};

export default CircleButton;