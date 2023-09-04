import moment from "moment";
import UseMeetingsQuery from "../../app/api/requests/meetings/queries/UseMeetingsQuery";
import OlympiadsFilter from "../../app/components/organisms/filters/OlympiadsFilter";
import UseOlympiadsLabelValuePair from "../../app/hooks/constants/UseOlympiadsLabelValuePair";
import IMeeting from "../../app/api/types/meetings/IMeeting";
import Meeting from "../../app/components/molecules/list-items/Meeting";

function Page() {
    const { data } = UseMeetingsQuery();
    
    return (
        <>
            <div className="w-full overflow-x-auto CustomHorizontalScroll">
                <OlympiadsFilter SelectedOlympiad={undefined} />
            </div>
            <div className="w-full flex flex-col flex-1 bg-white items-center justify-center" 
                style={{ minHeight: 'calc(100vh - 203.67px)' }}
            >
                <h1 className="mt-10 text-4xl text-dark font-bold cursor-default text-center mx-auto px-6">
                    Moje zajęcia
                </h1>
                <div className="w-full mt-8 flex flex-row flex-wrap justify-between px-8 max-w-[1000px] mx-auto">
                    {data?.map((TutorMeeting: IMeeting) => { 
                        return (
                            <Meeting 
                                key={TutorMeeting.Id}
                                TutorName={TutorMeeting.TutorName}
                                Color={UseOlympiadsLabelValuePair().find((OlympiadData) => 
                                    OlympiadData.value === TutorMeeting.EducationalServiceName)?.color as string}
                                EducationalServiceName={UseOlympiadsLabelValuePair().find((OlympiadData) => 
                                    OlympiadData.value === TutorMeeting.EducationalServiceName)?.label as string}
                                Date={moment(TutorMeeting.Date)}
                                ClassName="w-full md:w-[48%] mb-5"
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Page;