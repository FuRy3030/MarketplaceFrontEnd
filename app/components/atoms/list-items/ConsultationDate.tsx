import clsx from "clsx";

interface ConsultationDateProps {
    Text: string; 
    OnDeleteClick?: () => void; 
    ClassName?: string
};

function ConsultationDate({ Text, OnDeleteClick, ClassName } : ConsultationDateProps) {
    return (
        <div className={clsx("flex flex-row cursor-default", ClassName)}>
            <span className="icon-[tabler--calendar-event] text-semi-dark text-2xl mr-2.5" />
            <span className="text-base font-bold text-semi-dark">
                {Text}
            </span>
            <span 
                className="icon-[material-symbols--delete-forever-rounded] text-red-600 text-2xl ml-auto cursor-pointer"
                onClick={OnDeleteClick} 
            />
        </div>
    );
};

export default ConsultationDate;