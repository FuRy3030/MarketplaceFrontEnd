import clsx from "clsx";

interface StandardBadgeProps {
    Text: string;
    Variant: 'fill' | 'outline';
    ClassName?: string;
};

function StandardBadge(Props: StandardBadgeProps) {
    return (
        <div className={clsx("w-auto flex flex-row rounded-2xl py-0.5 px-3", 
            Props.Variant === 'fill' ? 'bg-brand-purple-extra-light' : 'bg-white',
            Props.Variant === 'outline' && 'border-solid border border-gray-300', Props.ClassName)}
        >
            <span className={clsx('text-xs font-semibold', 
                Props.Variant === 'fill' ? 'text-brand-purple-light' : 'text-gray-400')}
            >
                {Props.Text}
            </span>
        </div>
    );
}

export default StandardBadge;