import { EuiFormRow } from "@elastic/eui";
import ITutor from "../../../api/types/tutors/ITutor";
import { Moment } from "moment";
import { useState } from "react";
import moment from "moment";
import { useSnapshot } from "valtio";
import ConsultationDatesState from "../../../store/payments/ConsultationDatesState";
import MyMeetingTimePicker from "../../atoms/forms/dates/MyMeetingTimePickerProps";
import GetHoursBetweenTwoDates from "../../../helpers/dates/GetHoursBetweenTwoDates";
import SetTime from "../../../helpers/dates/SetTime";
import GetFullAvaliableHours from "../../../helpers/dates/GetFullAvaliableHours";
import ConsultationDate from "../../atoms/list-items/ConsultationDate";
import PriceOptionState from "../../../store/payments/PriceOptionState";
import UseOlympiadsLabelValuePair from "../../../hooks/constants/UseOlympiadsLabelValuePair";
import dynamic from "next/dynamic";
import 'moment-timezone';
import EmptyNotification from "../../EmptyNotification";

function ConsultationDatesForm({ Tutor, BookedDates } : { Tutor: ITutor, BookedDates: string [] }) {
    const EuiDatePicker: any = dynamic(() => import('@elastic/eui').then(module => module.EuiDatePicker), 
        { ssr: true });

    const ConsultationDatesStateSnapshot = useSnapshot(ConsultationDatesState);
    const PriceOptionStateSnapshot = useSnapshot(PriceOptionState);
    const CurrentDate = moment().tz('Europe/Warsaw');
    const Hours = GetHoursBetweenTwoDates(
        SetTime(CurrentDate, Tutor.TutorSchedule.ScheduleStartTime),
        SetTime(CurrentDate, Tutor.TutorSchedule.ScheduleEndTime),
        Tutor.TutorSchedule.LessonDuration
    );

    const [MeetingPickerDates, SetMeetingPickerDates] = useState<Moment []>([
        moment().tz('Europe/Warsaw'),
        moment().tz('Europe/Warsaw').add(1, 'day'),
        moment().tz('Europe/Warsaw').add(2, 'day'), 
        moment().tz('Europe/Warsaw').add(3, 'day'),
        moment().tz('Europe/Warsaw').add(4, 'day'),
        moment().tz('Europe/Warsaw').add(5, 'day'),
        moment().tz('Europe/Warsaw').add(6, 'day')
    ]);

    const SetMeetingPickerDatesFromCalendar = (Date: Moment) => {
        SetMeetingPickerDates([
            Date, 
            Date.clone().add(1, 'day'),
            Date.clone().add(2, 'day'),
            Date.clone().add(3, 'day'),
            Date.clone().add(4, 'day'),
            Date.clone().add(5, 'day'),
            Date.clone().add(6, 'day'),
        ]);
    };

    const ToggleHour = (Day: string, Hour: string, Action: string) => {
        const MeetingPickerDate = MeetingPickerDates.find((Date) => Date.date().toString() === Day);
        const MeetingPickerDateWithTime = SetTime(MeetingPickerDate!, Hour);
        const MeetingPickerDateWithTimeStringFormatted = MeetingPickerDateWithTime.format('YYYY-MM-DDTHH:mm:ss.SSSZ');

        if (typeof PriceOptionStateSnapshot.PaidHours === 'undefined') {
            return;
        }

        if ((PriceOptionStateSnapshot.PaidHours === 0 && ConsultationDatesStateSnapshot.ChosenDates.length >= 1) ||
            ((PriceOptionStateSnapshot.PaidHours - ConsultationDatesStateSnapshot.ChosenDates.length) <= 0 && PriceOptionStateSnapshot.PaidHours !== 0)) 
        {
            return;
        }

        if (Action === 'ADD' && 
            !ConsultationDatesStateSnapshot.ChosenDatesString.includes(MeetingPickerDateWithTimeStringFormatted)
        ) {
            ConsultationDatesState.ChosenDates = [...ConsultationDatesState.ChosenDates, MeetingPickerDateWithTime];
            ConsultationDatesState.ChosenDatesString = [...ConsultationDatesState.ChosenDatesString, 
                MeetingPickerDateWithTimeStringFormatted];
        }
    };
    
    return (
        <>
            <EuiFormRow 
                label="Dzień odbycia konsultacji" 
                helpText="Wybierz interesujący Ciebie dzień, aby zobaczyć dostępne godziny konsultacji" 
                fullWidth
            >
                <EuiDatePicker
                    selected={ConsultationDatesStateSnapshot.CurrentlySelectedDate}
                    onChange={(Date: Moment) => {
                        ConsultationDatesState.CurrentlySelectedDate = Date;
                        SetMeetingPickerDatesFromCalendar(Date);
                    }}
                    shadow
                    fullWidth
                    minDate={moment().tz('Europe/Warsaw')}
                    maxDate={moment().tz('Europe/Warsaw').add(90, 'days')}
                />
            </EuiFormRow>
            <div className="flex flex-row my-8 justify-evenly">
                {[...MeetingPickerDates].map((EditableDate: Moment, Index: number) => (
                    <MyMeetingTimePicker 
                        Day={EditableDate.date().toString()} 
                        key={Index}
                        Hours={Hours} 
                        ActiveHours={GetFullAvaliableHours(
                            Tutor.TutorSchedule.AvaliableHours[EditableDate.day()].Item2, 
                            EditableDate, 
                            [...Tutor.TutorSchedule.ExceptionDates, ...BookedDates],
                            Tutor.TutorSchedule.AdditionDates
                        )}
                        ToggleHour={ToggleHour} 
                    />
                ))}
            </div>
            {PriceOptionStateSnapshot.ServiceName ?
                <div>
                    <span className="w-full text-semi-dark-alt font-bold text-xl">
                        Wybrane terminy - 
                        <span className="ml-2" style={{color: UseOlympiadsLabelValuePair().find(
                            (OlympiadData) => OlympiadData.value === PriceOptionStateSnapshot.ServiceName)?.color}}
                        >
                            {UseOlympiadsLabelValuePair().find((OlympiadData) => 
                                OlympiadData.value === PriceOptionStateSnapshot.ServiceName)?.label}
                        </span>
                    </span>
                    <div className="flex flex-row flex-wrap justify-between w-full mt-4">
                        {ConsultationDatesStateSnapshot.ChosenDates.length > 0 ? 
                            ConsultationDatesStateSnapshot.ChosenDates.map((Date: Moment, Index: number) => {
                                return (
                                    <ConsultationDate 
                                        key={Index}
                                        Text={Date.format('YYYY-MM-DD HH:mm')} 
                                        ClassName="my-2.5 w-full md:w-[46%]" 
                                        OnDeleteClick={() => {
                                            ConsultationDatesState.ChosenDates.splice(Index, 1);
                                            ConsultationDatesState.ChosenDatesString.splice(Index, 1);
                                        }}
                                    />
                                )
                            })
                            :
                            <EmptyNotification Message="Nie wybrałeś jeszcze żadnego terminu" />
                        }
                    </div>
                </div>
            :
                <EmptyNotification Message="Najpierw musisz wybrać odpowiedni pakiet" />        
            }
        </>
    );
};

export default ConsultationDatesForm;