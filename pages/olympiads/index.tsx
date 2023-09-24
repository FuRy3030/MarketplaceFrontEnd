import GetUniversityNames from "../../app/api/requests/olympiads-search/queries/GetUniversityNames";
import OlympiadsFilter from "../../app/components/organisms/filters/OlympiadsFilter";
import OlympiadsSearchForm from "../../app/components/organisms/forms/OlympiadsSearchForm";

function Page({ UniversityNames } : { UniversityNames: string [] }) {
    return (
        <>
            <div className="w-full overflow-x-auto CustomHorizontalScroll">
                <OlympiadsFilter SelectedOlympiad={undefined} />
            </div>
            <div className="w-full flex flex-row flex-1 bg-white items-center" 
                style={{ minHeight: 'calc(100vh - 203.67px)', maxHeight: 'calc(100vh - 203.67px)' }}
            >
                <div className="w-full h-full flex flex-col bg-white relative">
                    <OlympiadsSearchForm UniversityNames={UniversityNames} ClassName="px-10" />
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    const UniversityNames = await GetUniversityNames();
  
    return {
        props: {
            UniversityNames
        }
    };
}

export default Page;