import clsx from "clsx";
import OlympiadsFilter from "../filters/OlympiadsFilter";
import OlympiadsSearchForm from "../forms/OlympiadsSearchForm";
import { useState } from "react";
import { useRouter } from "next/router";

interface TutorsSearchProps {
    children: React.ReactNode;
    UniversityNames: string [];
    Olympiad?: string;
    ChildrenWrapperClassName?: string;
}

function TutorsSearch(Props: TutorsSearchProps) {
    const [IsOlympiadSearchOpen, SetIsOlympiadSearchOpen] = useState<boolean>(false);
    const Router = useRouter();

    return (
        <>
            <div className="w-full overflow-x-auto CustomHorizontalScroll">
                <OlympiadsFilter SelectedOlympiad={Props.Olympiad} />
            </div>
            <div className="w-full flex flex-row flex-1 bg-dark-gray" 
                style={{ minHeight: 'calc(100vh - 203.67px)', maxHeight: 'calc(100vh - 203.67px)' }}
            >
                <div className={clsx("w-full lg:w-[64%] flex flex-col overflow-y-auto overflow-x-hidden CustomVerticalScrollWithGrayBackground", IsOlympiadSearchOpen && 'hidden', Props.ChildrenWrapperClassName)}>
                    {Props.children}
                </div>
                <div className={clsx("w-full lg:w-[36%] lg:flex lg:flex-col bg-white relative", !IsOlympiadSearchOpen && 'hidden')}>
                    <OlympiadsSearchForm UniversityNames={Props.UniversityNames} ClassName="mt-8 sm:mt-0" />
                </div>
            </div>
            {!Router.route.startsWith("/tutors/tutor") &&
                <button className="fixed lg:hidden left-1/2 bottom-2 -translate-x-1/2 z-20 flex flex-row justify-center bg-dark text-white rounded-3xl gap-x-2 px-4 py-1.5"
                    onClick={() => SetIsOlympiadSearchOpen(!IsOlympiadSearchOpen)}
                >
                    {IsOlympiadSearchOpen ? 
                        <span className="icon-[ph--chalkboard-teacher] text-xl"></span>
                        :
                        <span className="icon-[mdi--book-search-outline] text-xl"></span>
                    }
                    <span className="text-sm font-bold">
                        {IsOlympiadSearchOpen ? 'Tutorzy' : 'Olimpiady'}
                    </span>
                </button>
            }
        </>
    );
};

export default TutorsSearch;