import Link from "next/link";
import RectangularButton from "../../atoms/buttons/RectangularButton";
import NavigationBarLink from "../../atoms/navigation/NavigationBarLink";
import { useSnapshot } from "valtio";
import AuthState from "../../../store/auth/AuthState";

function NavigationBar(Props: { ToggleNavigation: (IsOpen: boolean) => void }) {
    const { ToggleNavigation } = Props;
    const IsUserLogged = useSnapshot(AuthState).IsLogged;

    return (
        <div className="flex items-center z-30 relative w-screen h-auto bg-white px-3.5 md:px-7 py-4 border-b border-gray-200 border-solid">
            <div className="w-auto flex flex-row gap-x-4 items-center mt-1 mr-auto lg:mr-0">
                <Link href="/tutors" className="cursor-pointer">
                    <img className="w-[140px] h-auto" src="/logo/competify-logo.png" alt="Logo" />
                </Link>
            </div>
            <span className="hidden lg:block text-sm text-semi-dark font-medium cursor-default px-3 py-2 mr-auto">
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
            {!IsUserLogged &&
                <Link href="/auth/login" className="ml-1.5 mr-1">         
                    <RectangularButton
                        Text="Zaloguj się"
                        Icon="icon-[ph--student]" 
                        ClassName="w-full mx-1"
                        OnClick={() => {}}
                    />
                </Link>
            }
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
            <div className="pl-3 pr-1.5 ml-4 border-l border-gray-200 border-solid">
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