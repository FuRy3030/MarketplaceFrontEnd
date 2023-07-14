import clsx from "clsx";

interface RectangularBadgeProps {
    Text: string;
    SubText: string;
    Icon: string;
    Color: string;
    ClassName?: string;
}

function RectangularBadge(Props: RectangularBadgeProps) {
    return (
        <div className={clsx("flex flex-col justify-center py-6 px-2 bg-white shadow-steep-jjt rounded-md relative cursor-default", Props.ClassName)}>
            <span className="text-[14.5px] font-semibold text-semi-dark text-center leading-5 mb-0.5">
                {Props.Text}
            </span>
            <span className="text-[11px] font-semibold text-gray-400 text-center">
                {Props.SubText}
            </span>
            <div className="flex items-center justify-center p-2.5 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-steep-jjt">
                <span className={clsx('text-xl', Props.Icon)} style={{ color: Props.Color }}>Icon</span>
            </div>
        </div>
    );
};

export default RectangularBadge;