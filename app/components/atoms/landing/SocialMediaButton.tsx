import HexToRGBA from "@/app/helpers/universal/HexToRGBA";
import clsx from "clsx";
import { useState } from "react";

interface SocialMediaButtonProps {
    Icon: string;
    Color: string;
}

function SocialMediaButton(Props: SocialMediaButtonProps) {
    const ColorWithOpacity: string = HexToRGBA(Props.Color, 0.5);

    const [IsHover, SetIsHover] = useState<boolean>(false);

    const HandleMouseEnter = () => {
        SetIsHover(true);
    };

    const HandleMouseLeave = () => {
        SetIsHover(false);
    };

    return (
        <button className="p-5 h-[75.33px] rounded-full bg-white shadow-md mx-4 my-4 md:p-6 md:h-[89.33px] transition-all duration-300 ease-in-out" 
            style={{border: `3px solid ${Props.Color}`, outline: `4px solid ${ColorWithOpacity}`, backgroundColor: IsHover ? Props.Color : ''}}
            onMouseEnter={HandleMouseEnter}
            onMouseLeave={HandleMouseLeave}
        >
            <span className={clsx('text-3xl md:text-4xl transition-all duration-300 ease-in-out', Props.Icon)} 
                style={{ color: IsHover ? '#FFFFFF' : Props.Color }}
            >
                Social Media Icon
            </span>
        </button>
    );
};

export default SocialMediaButton;