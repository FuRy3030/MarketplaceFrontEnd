import NavigationLink from "../../atoms/global/NavigationLink";

function NavigationBarDesktop() {
    return (
        <div className="flex flex-row gap-x-2">
            <NavigationLink Text="Olimpiady" />
            <NavigationLink Text="Tutorzy" />
            <NavigationLink Text="O nas" />
            <NavigationLink Text="Kontakt" />
        </div>
    );
};

export default NavigationBarDesktop;