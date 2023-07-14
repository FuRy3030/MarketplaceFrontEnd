import clsx from "clsx";
import OlympiadsFilter from "../filters/OlympiadsFilter";

interface TutorsSearchProps {
    children: React.ReactNode;
    Olympiad?: string;
    ChildrenWrapperClassName?: string;
}

function TutorsSearch(Props: TutorsSearchProps) {
    return (
        <>
            <div className="w-full overflow-x-auto CustomHorizontalScroll">
                <OlympiadsFilter SelectedOlympiad={Props.Olympiad} />
            </div>
            <div className="w-full flex flex-row flex-1 bg-dark-gray" 
                style={{ minHeight: 'calc(100vh - 203.67px)', maxHeight: 'calc(100vh - 203.67px)' }}
            >
                <div className={clsx("w-full lg:w-[64%] flex flex-col overflow-y-auto overflow-x-hidden CustomVerticalScrollWithGrayBackground", Props.ChildrenWrapperClassName)}>
                    {Props.children}
                </div>
                <div className="w-full hidden lg:w-[36%] lg:flex lg:flex-col bg-white relative">

                </div>
            </div>
        </>
    );
};

export default TutorsSearch;