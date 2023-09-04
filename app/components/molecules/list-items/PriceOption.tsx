import { EuiRadio } from "@elastic/eui";
import clsx from "clsx";
import PriceOptionState from "../../../store/payments/PriceOptionState";
import { useSnapshot } from "valtio";

interface PriceOptionProps {
    Id: string;
    ServiceName: string;
    Price: number;
    Currency: string;
    PaidHours: number;
    ServiceCode: string;
    OldPrice?: number;
    IsHotOffer?: boolean;
    ClassName?: string;
}

function PriceOption(Props: PriceOptionProps) {
    const PriceOptionSnapshot = useSnapshot(PriceOptionState);

    return (
        <div className={clsx("flex flex-row items-center py-2 bg-white my-3.5", Props.IsHotOffer ? 'HotContent' : 'shadow-steep-jjt', Props.ClassName)}
            style={{ borderRadius: "8px" }}
        >
            <EuiRadio
                id={Props.Id}
                checked={PriceOptionSnapshot.PaidHours == Props.PaidHours && 
                    PriceOptionSnapshot.ServiceName == Props.ServiceCode} 
                onChange={(e) => {
                    PriceOptionState.PaidHours = Props.PaidHours;
                    PriceOptionState.ServiceName = Props.ServiceCode;
                }}
                label=""
                className="my-2.5 ml-4"
            />
            <span className="text-base font-bold text-dark mr-auto ml-4 cursor-default">
                {Props.ServiceName}
            </span>
            {typeof Props.OldPrice !== "undefined" && (
                <span className="text-sm font-semibold text-semi-dark line-through decoration-red-600 mr-4 cursor-default">
                    {Props.OldPrice} {Props.Currency}
                </span>
            )}
            <span className="text-sm font-semibold py-1 px-2.5 mr-4 rounded-xl text-brand-purple-light bg-brand-purple-extra-light cursor-default">
                {Props.Price} {Props.Currency}
            </span>
        </div>
    );
};

export default PriceOption;