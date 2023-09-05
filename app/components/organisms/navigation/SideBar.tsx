import { useSnapshot } from "valtio";
import RectangularButton from "../../atoms/buttons/RectangularButton";
import SideBarLinksSection from "../../molecules/navigation/SideBarLinksSection";
import clsx from "clsx";
import AuthState from "../../../store/auth/AuthState";
import Link from "next/link";
import { useRouter } from "next/router";
import { Config } from "../../../../config";

function SideBar(Props: { IsNavOpen: boolean, ToggleNavigation: (IsOpne: boolean) => void }) {
    const { IsNavOpen, ToggleNavigation } = Props;
    const IsUserLogged = useSnapshot(AuthState).IsLogged;
    const Router = useRouter();

    return (
        <>
            <div className={clsx("fixed top-0 w-[280px] h-screen bg-white shadow-lg px-6 py-6 z-50 transition-all duration-300 border-r border-gray-200 border-solid", 
                IsNavOpen ? "right-0" : "right-[-280px]")}
            >
                <span className="icon-[material-symbols--close-rounded] absolute top-3 right-3 text-2xl text-brand-purple cursor-pointer" 
                    onClick={() => ToggleNavigation(false)}>                    
                </span>
                <div className="w-full flex flex-col pb-2 mb-5 border-b border-gray-200 border-solid">
                    <img className="w-[150px] h-auto mb-0" src="/logo/competify-logo.png" alt="Logo" />
                    <span className="text-xs text-semi-dark-alt font-semibold cursor-default">Łączymy uczniów z laureatami olimpiad</span>
                </div>
                <SideBarLinksSection
                    Heading="Odkrywaj"
                    Links={[
                        {
                            To: "/",
                            Text: "Jak to działa",
                            Icon: 'icon-[material-symbols--contact-support-outline-rounded]'
                        },
                        {
                            To: "/tutors",
                            Text: "Tutorzy",
                            Icon: 'icon-[material-symbols--person-search-outline-rounded]'
                        },
                        {
                            To: "/olympiads",
                            Text: "Znajdź olimpiadę",
                            Icon: 'icon-[mdi--book-search-outline]'
                        }
                    ]}
                    ClassName="lg:hidden"
                />
                {IsUserLogged && <SideBarLinksSection
                    Heading="Moje zasoby"
                    Links={[
                        // {
                        //     To: "/profile/tutors",
                        //     Text: "Tutorzy",
                        //     Icon: 'icon-[material-symbols--supervisor-account-outline-rounded]'
                        // },
                        {
                            To: "/profile/meetings",
                            Text: "Zajęcia",
                            Icon: 'icon-[healthicons--group-discussion-meetingx3-outline]'
                        }
                    ]}
                />}
                <SideBarLinksSection
                    Heading="Zasady i warunki"
                    Links={[
                        {
                            To: "/regulations",
                            Text: "Regulamin",
                            Icon: 'icon-[material-symbols--lab-profile-outline-rounded]'
                        },
                        {
                            To: "/privacy-policy",
                            Text: "Polityka prywatności",
                            Icon: 'icon-[material-symbols--privacy-tip-outline-rounded]'
                        }
                    ]}
                />
                {!IsUserLogged &&
                    <>      
                        <Link href="/auth/login">         
                            <RectangularButton
                                Text="Dla uczniów"
                                Icon="icon-[ph--student]" 
                                ClassName="mb-4 w-full"
                                OnClick={() => {}}
                            />
                        </Link> 
                        <Link href={`${Config.MentorFrontendUrl}/auth/login`}>
                            <RectangularButton
                                Text="Dla tutorów"
                                Icon="icon-[ph--chalkboard-teacher]"
                                ClassName="mb-4 w-full" 
                                OnClick={() => {}}
                            />
                        </Link>
                    </>
                }
                {IsUserLogged &&
                    <RectangularButton 
                        Text="Wyloguj"
                        Icon="icon-[ion--power]"
                        OnClick={() => {
                            localStorage.removeItem('token');
                            localStorage.removeItem('expiration');
                            AuthState.IsLogged = false;
                            Router.push("/tutors");
                        }}
                        ClassName="mb-4 w-full"
                    />
                }
            </div>
            {IsNavOpen && <div 
                className="fixed w-screen h-screen top-0 left-0 z-40" 
                style={{background: 'rgba(0, 0, 0, 0.5)'}}
                onClick={() => ToggleNavigation(false)} 
            />}
        </>
    );
};

export default SideBar;