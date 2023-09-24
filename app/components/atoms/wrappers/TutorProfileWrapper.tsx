import clsx from "clsx";
import { useRouter } from "next/router";

interface TutorProfileWrapperProps {
    children: React.ReactNode;
    Variant: 'introduction' | 'default';
    Text?: string;
    Color?: string;
    BackgroundImageSrc?: string;
    ClassName?: string;
}

function TutorProfileWrapper(Props: TutorProfileWrapperProps) {
    const Router = useRouter();

    if (Props.Variant === 'introduction') {
        return (
            <div className={clsx("relative w-full flex items-center px-6 pt-11 pb-[5.375rem] rounded-b-lg", Props.ClassName)} 
                style={{ backgroundColor: Props.Color }}
            >
                <>
                    <img 
                        src={Props.BackgroundImageSrc} 
                        alt="Tło" 
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-b-lg" 
                        style={{ zIndex: 0 }} 
                    />
                    <button className="flex items-center justify-center absolute top-3 left-3 p-0.5 rounded" 
                        style={{ background: 'rgba(0, 0, 0, 0.15)' }} onClick={() => Router.back()}
                    >
                        <span className="icon-[majesticons--arrow-left-line] text-[1.625rem] text-white">
                            Icon
                        </span>
                    </button>
                    {Props.children}
                </>
            </div>
        );
    } else {
        return (
            <div className={clsx("relative w-full flex flex-col bg-white shadow-soft-jjt rounded-lg", Props.ClassName)}>
                <span className="text-xl font-bold text-semi-dark-alt px-6 py-4">
                    {Props.Text}
                </span>
                <div className="w-full h-auto border-solid border border-gray-200" />
                <div className="w-full h-auto px-6 py-4">
                    {Props.children}
                </div>
            </div>
        );
    }
};

export default TutorProfileWrapper;