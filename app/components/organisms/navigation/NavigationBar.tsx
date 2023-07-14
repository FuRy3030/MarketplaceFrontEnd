import RectangularButton from "../../atoms/buttons/RectangularButton";
import NavigationBarLink from "../../atoms/navigation/NavigationBarLink";

function NavigationBar(Props: { ToggleNavigation: (IsOpen: boolean) => void }) {
    const { ToggleNavigation } = Props;

    return (
        <div className="flex items-center z-30 relative w-screen h-auto bg-white px-7 py-4 border-b border-gray-200 border-solid">
            <div className="w-auto flex flex-row gap-x-4 items-center mt-1">
                <img className="w-[140px] h-auto" src="/logo/competify-logo.png" alt="Logo" />
            </div>
            <span className="hidden sm:block text-base text-semi-dark font-medium cursor-default px-4 py-2 mr-auto">
                Razem z nami zawalczysz o najwyższe wyniki!
            </span>
            <NavigationBarLink
                To="/"
                Text="Jak to działa"
                Icon="icon-[material-symbols--contact-support-outline-rounded]"
                ClassName="hidden lg:flex"
            />
            <NavigationBarLink
                To="/tutors"
                Text="Tutorzy"
                Icon="icon-[material-symbols--person-search-outline-rounded]" 
                ClassName="hidden lg:flex"
            />
            <NavigationBarLink
                To="/olympiads"
                Text="Znajdź olimpiadę"
                Icon="icon-[mdi--book-search-outline]" 
                ClassName="hidden lg:flex"
            />
            {/* <RectangularButton
                Text="Dla uczniów"
                ClassName="mr-4 ml-7"
                Icon="icon-[ph--student]" 
                OnClick={() => {}}
            />
            <RectangularButton
                Text="Dla tutorów"
                Icon="icon-[ph--chalkboard-teacher]" 
                OnClick={() => {}}
            /> */}
            <div className="ml-auto pl-3 pr-1.5 sm:ml-4 border-l border-gray-200 border-solid">
                <button className="flex items-center justify-center p-2.5 rounded-full w-full h-full transition-all duration-300 hover:bg-brand-purple-extra-light"
                    onClick={() => ToggleNavigation(true)}
                >
                    <span className="icon-[uil--bars] text-2xl text-brand-purple-light"></span>
                </button>
            </div>
        </div>
    );
};

export default NavigationBar;