import clsx from "clsx";
import Image from "next/image";

interface AvatarWithRingsProps {
    Src?: string;
    Width: number;
    Height: number;
    Alt?: string;
    ClassName?: string;
    BackgroundRingSize?: number;
    BorderRingSize?: number;
}

function AvatarWithRings(Props: AvatarWithRingsProps) {
    return (
        <div 
            className={clsx("flex items-center justify-center bg-clip-padding rounded-full", Props.ClassName)}
            style={{ width: `${Props.Width + (Props.BackgroundRingSize ? Props.BackgroundRingSize : 50)}px`, 
                height: `${Props.Height + (Props.BackgroundRingSize ? Props.BackgroundRingSize : 50)}px`, 
                border: `${Props.BorderRingSize ? Props.BorderRingSize : 12}px solid rgba(99, 91, 255, 0.15)`, 
                backgroundColor: 'rgba(99, 91, 255, 0.3)' }}
        >
            <Image
                src={Props.Src ?? '/flaticons/user.png'}
                style={{ width: `${Props.Width}px`, height: `${Props.Height}px` }}  
                className="rounded-full object-cover bg-white"
                width={Props.Width}
                height={Props.Height}
                alt={Props.Alt ?? "User profile image"}
            />
        </div>
    );
};

export default AvatarWithRings;