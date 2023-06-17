import IsMobile from "../../../hooks/universal/IsMobile";
import NavigationLink from "../../atoms/global/NavigationLink";

function NavigationBarDesktop() {
    return (
        <div className="flex flex-row gap-x-2">
            <img src="/logo/logo-transparent2.png" alt="logo" className="cursor-default w-[150px] h-auto mr-12" />
            <NavigationLink Text="O nas" To="#CompanyQualities" />
            <NavigationLink Text="Dlaczego my" To="#WhyUs" />
            <NavigationLink Text="Tutorzy" To="#Tutors" />
            <NavigationLink Text="Kontakt" To="#Contact" />
        </div>
    );
};

export default NavigationBarDesktop;