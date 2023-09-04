import moment from "moment";
import { Moment } from "moment";
import { proxy } from "valtio";
import 'moment-timezone';

type ConsultationDatesStateType = {
    CurrentlySelectedDate: Moment;
    ChosenDates: Moment [];
    ChosenDatesString: string [];
};

const ConsultationDatesState = proxy({
    CurrentlySelectedDate: moment().tz('Europe/Warsaw'),
    ChosenDates: [],
    ChosenDatesString: []
} as ConsultationDatesStateType);

export default ConsultationDatesState;