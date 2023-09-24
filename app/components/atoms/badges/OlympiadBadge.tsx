import clsx from "clsx";

interface OlympiadBadgeProps {
    Text: string;
    Color: string;
    ClassName?: string;
};

function OlympiadBadge(Props: OlympiadBadgeProps) {
    return (
        <div className={clsx("w-auto flex flex-row rounded-2xl py-0.5 px-3", Props.ClassName)}
            style={{ backgroundColor: Props.Color }}
        >
            <span className="text-xs font-semibold text-white">
                {Props.Text}
            </span>
        </div>
    );
}

export default OlympiadBadge;