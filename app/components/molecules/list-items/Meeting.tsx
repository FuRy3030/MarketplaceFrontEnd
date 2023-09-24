import clsx from "clsx";
import CircleRating from "../../atoms/rating/CircleRating";
import { Moment } from "moment";
import Link from "next/link";
import StandardButton from "../../atoms/buttons/MyStandardButton";

interface MeetingProps {
    TutorName: string;
    Color: string;
    EducationalServiceName: string;
    Date: Moment;
    IsPaid: boolean;
    PaymentURI?: string;
    ClassName?: string;
}

function Meeting(Props: MeetingProps) {
    return (
        <div className={clsx("flex flex-col p-4 bg-white shadow-steep-jjt rounded-2xl cursor-default", Props.ClassName)}>
            <h2 className="flex items-center text-xl font-bold text-semi-dark-alt mb-2">
                <span className="icon-[ph--student-bold] mr-1.5" />
                {Props.TutorName}
            </h2>
            <CircleRating 
                Dots={4}
                Color={Props.Color} 
                ActiveDots={4}
                ClassName="w-max mb-0.5 ml-0.5" 
            />
            <h3 className="flex items-center text-lg font-bold text-dark mb-0 leading-6" style={{ color: Props.Color }}>
                {Props.EducationalServiceName}
            </h3>
            <div className="w-full flex justify-between mt-2">
                <h6 className={clsx("text-base font-bold", Props.IsPaid ? 'text-green-500' : 'text-red-600')}>
                    {Props.IsPaid ? 'Opłacone' : 'Nieopłacone'}
                </h6>
                <h6 className="flex items-center w-auto text-base font-semibold text-semi-dark">
                    <span className="icon-[material-symbols--event-outline-rounded] mr-1" />
                    {Props.Date.format("DD.MM.YYYY HH:mm")}
                </h6>
            </div>
            {(!Props.IsPaid && Props.PaymentURI) && 
                <Link href={Props.PaymentURI} className="ml-auto w-auto">
                    <StandardButton 
                        Text="Zapłać"
                        Icon="icon-[ri--secure-payment-fill]"
                        Type="button"   
                        onClick={() => {}}
                        ClassName="bg-brand-purple-light hover:text-dark px-4 w-auto mt-3"
                    />
                </Link>
            }
        </div>
    );
};

export default Meeting;