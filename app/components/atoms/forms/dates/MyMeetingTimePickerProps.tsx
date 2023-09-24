import clsx from "clsx";

interface MyMeetingTimePickerProps {
    Day: string;
    Hours: string[];
    ActiveHours: string[];
    ToggleHour: (Day: string, Hour: string, Action: string) => void;
}

function MyMeetingTimePicker(Props: MyMeetingTimePickerProps) {
    const { Day, Hours, ActiveHours, ToggleHour } = Props;

    return (
        <div className="flex flex-col gap-y-3">
            <span className="text-base font-bold text-semi-dark-alt cursor-default text-center">{Day}</span>
            {Hours.map((Hour) => (
                <span key={Hour} className={clsx("text-xs px-1 py-1 sm:text-sm font-semibold sm:px-3 sm:py-1.5 rounded-lg", 
                    ActiveHours.find((ActiveHour) => ActiveHour === Hour) ? 
                    "bg-very-light-blue text-neon-blue cursor-pointer" : 
                    "bg-dark-gray text-semi-dark-alt line-through cursor-default")}
                    onClick={() => ToggleHour(Day, Hour, ActiveHours.find((ActiveHour) => ActiveHour === Hour) ? "ADD" : "NONE")}
                >
                    {Hour}
                </span>
            ))}
        </div>
    );
};

export default MyMeetingTimePicker;