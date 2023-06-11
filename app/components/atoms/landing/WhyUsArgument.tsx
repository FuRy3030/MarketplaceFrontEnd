import clsx from "clsx";

interface WhyUsArgumentProps {
    Icon: string;
    Argument: string;
    Variant: "blue" | "purple";
    Description?: string;
}

function WhyUsArgument(Props: WhyUsArgumentProps) {
    return (
        <div className="flex flex-col w-1/2 md:w-1/4 p-4">
            <span className={clsx('text-5xl mb-3 cursor-default', 
                Props.Variant === "purple" ? "text-brand-purple-light" : "text-neon-blue", 
                Props.Icon)}
            >
                Icon
            </span>
            <h6 className="mb-2 font-bold text-dark text-base cursor-default">{Props.Argument}</h6>
            <p className="text-sm text-semi-dark cursor-default font-semibold">{Props.Description}</p>
        </div>
    );
};

export default WhyUsArgument;