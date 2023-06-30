import RectangularButton from "../../atoms/buttons/RectangularButton";
import NavigationBarLink from "../../atoms/navigation/NavigationBarLink";

function NavigationBar() {
    return (
        <div className="flex items-center z-30 relative w-screen h-auto bg-white px-7 py-4 border-b border-gray-200 border-solid">
            <div className="w-auto flex flex-row gap-x-4 items-center mt-1">
                <img className="w-[140px] h-auto" src="/logo/competify-logo.png" alt="Logo" />
            </div>
            <span className="text-base text-semi-dark font-medium cursor-default px-4 py-2 mr-auto">
                Razem z nami zawalczysz o najwyższe wyniki!
            </span>
            <NavigationBarLink
                To="/"
                Text="Home"
                Icon="" 
            />
            <NavigationBarLink
                To="/tutors"
                Text="Tutorzy"
                Icon="" 
            />
            <RectangularButton
                Text="Dla uczniów"
                ClassName="mr-4 ml-7"
                Icon="icon-[ph--student]" 
                OnClick={() => {}}
            />
            <RectangularButton
                Text="Dla tutorów"
                Icon="icon-[ph--chalkboard-teacher]" 
                OnClick={() => {}}
            />
        </div>
    );
};

export default NavigationBar;