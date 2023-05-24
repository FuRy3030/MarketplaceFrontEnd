import WhyUsArgument from "../../atoms/landing/WhyUsArgument";

function WhyUs() {
    return (
        <div className="w-full flex flex-wrap">
            <WhyUsArgument Icon="icon-[icon-park-solid--user-business]" Argument="Profesjonalizm i jakość" Variant="blue" />
            <WhyUsArgument Icon="icon-[carbon--ibm-watson-knowledge-studio]" Argument="Świeża i praktyczna wiedza" Variant="purple" />
            <WhyUsArgument Icon="icon-[tabler--adjustments-check]" Argument="Pełne dopasowanie kursu do ucznia" Variant="blue" />
            <WhyUsArgument Icon="icon-[tabler--calendar-cog]" Argument="Elastyczność" Variant="purple" />
        </div>
    );
};

export default WhyUs;