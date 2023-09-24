import clsx from "clsx";

interface StandardBadgeProps {
    Text: string;
    Background: 'white' | 'brand' | 'blue';
    Color: 'brand' | 'blue' | 'gray';
    Variant: 'fill' | 'outline';
    ClassName?: string;
};

function StandardBadge(Props: StandardBadgeProps) {
    return (
        <div className={clsx("w-auto flex flex-row rounded-2xl py-0.5 px-3", 
            Props.Background === 'brand' ? 'bg-brand-purple-extra-light' : 
                Props.Background === 'blue' ? 'bg-extremely-light-blue' : 'bg-white',
            Props.Variant === 'outline' && 'border-solid border border-gray-300', Props.ClassName)}
        >
            <span className={clsx('text-xs font-semibold', 
                Props.Color === 'brand' ? 'text-brand-purple-light' : 
                    Props.Color === 'blue' ? 'text-normal-blue' : 'text-gray-400')}
            >
                {Props.Text}
            </span>
        </div>
    );
}

export default StandardBadge;