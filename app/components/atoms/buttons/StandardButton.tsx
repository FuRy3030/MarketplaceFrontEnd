import clsx from "clsx";

interface StandardButtonProps {
    Text: string;
    ClassNames?: string;
    onClick: () => void;
    Icon?: string;
    Variant: "dark" | "purple";
}

function StandardButton(Props: StandardButtonProps) {
    let ColorVariantClasses: string = "";

    switch (Props.Variant) {
        case 'dark':
            ColorVariantClasses = 'bg-dark hover:text-dark';
            break;
        case 'purple':
            ColorVariantClasses = 'bg-brand-purple-light hover:text-brand-purple-light';
            break;
    };

    return (
        <button className={clsx('group flex items-center font-semibold cursor-pointer text-base rounded-3xl px-5 py-1.5 text-white transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg', 
            ColorVariantClasses, Props.ClassNames)}
        >
            {Props.Text}
            <span className={clsx('ml-1.5 text-2xl transition-all duration-300 ease-in-out group-hover:ml-3', Props.Icon)}>Icon</span>
        </button>
    );
};

export default StandardButton;