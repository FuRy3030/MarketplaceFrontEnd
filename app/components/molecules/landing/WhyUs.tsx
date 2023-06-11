import WhyUsArgument from "../../atoms/landing/WhyUsArgument";

function WhyUs() {
    return (
        <div className="w-full flex flex-wrap">
            <WhyUsArgument 
                Icon="icon-[icon-park-solid--user-business]" 
                Argument="Profesjonalizm i jakość" 
                Description="Nasze korepetycje prowadzone są wyłącznie przez laureatów olimpiad z dużym doświadczeniem. To właśnie ich kompetencje pozwoliły im na zajęcie pierwszych lokat"
                Variant="blue" 
            />
            <WhyUsArgument 
                Icon="icon-[carbon--ibm-watson-knowledge-studio]" 
                Argument="Świeża i praktyczna wiedza" 
                Description="Nasi tutorzy niedawno sami brali udział w konkursach, do których obecnie przygotowują. Posiadają oni świeżą wiedzę i zestaw praktycznych umiejętności potrzebnych do wygrania olimpiady"
                Variant="purple" 
            />
            <WhyUsArgument 
                Icon="icon-[tabler--adjustments-check]" 
                Argument="Pełne dopasowanie kursu do ucznia" 
                Description="Oferowane przez nas kursy skupiają się na indywidualnych potrzebach każdego ucznia. Chcesz skupić się wyłącznie na konkretnych umiejętnościach? Nic prostszego!"
                Variant="blue" 
            />
            <WhyUsArgument 
                Icon="icon-[tabler--calendar-cog]" 
                Argument="Elastyczność" 
                Description="Zarówno forma, jak i terminy oferowanych przez nas zajęć są w pełni dopasowane do możliwości czasowych ucznia. Dopasujemy częstotliwość i intensywność kursu do Twoich preferencji!"
                Variant="purple" 
            />
        </div>
    );
};

export default WhyUs;