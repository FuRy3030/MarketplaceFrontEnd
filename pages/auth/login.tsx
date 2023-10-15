import LoginForm from "../../app/components/organisms/forms/LoginForm";
import StandardHeader from "../../app/components/molecules/typography/StandardHeader";
import MySimpleLinksNavigation from "../../app/components/molecules/links/MySimpleLinksNavigation";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import UseGoogle from "../../app/api/requests/auth/mutations/UseGoogle";

function Page() {
    const { mutate } = UseGoogle();

    const OnGoogleLoginSuccess = (CredentialResponse: CredentialResponse) => {
        if (CredentialResponse.credential) {
            mutate(CredentialResponse.credential);
        }
    };

    return (
        <div className="w-screen min-h-auto flex flex-col-reverse md:min-h-screen md:flex-row">
            <div className="w-full md:w-1/2 relative bg-light-grey">
                <img alt="Becoming a mentor" src="/un-draw/login-background.svg" 
                    className="scale-[1] relative py-14 px-8 md:py-6 md:px-6 md:absolute md:bottom-0 md:left-0 h-auto object-cover" 
                />
                <div className="hidden md:block w-full px-16 py-10 z-10">
                </div>   
            </div>
            <div className="w-full md:w-1/2 bg-white shadow px-8 md:px-16 py-10 z-10"> 
                <StandardHeader 
                    UpperHeader="Logowanie -> Uczeń"
                    Header="Witaj z powrotem!"
                    SubHeader="Kontynuuj swoje przygotowania... Zaloguj się na platformę, aby korzystać z tutoringu z laureatami i zwycięzcami olimpiad"
                    Variant="purple"
                />
                <div className="w-full flex justify-center">
                    <GoogleLogin
                        onSuccess={OnGoogleLoginSuccess}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>
                <span className="w-full flex justify-center text-center mt-3.5 mb-2.5 font-bold text-dark text-base cursor-default">
                    --- Albo --- 
                </span>
                <LoginForm />
                <MySimpleLinksNavigation 
                    ClassName="mt-8"
                    Heading="Nie znalazłeś tego czego szukasz?"
                    Links={[
                        {
                            To: "/auth/register",
                            Text: "Zarejestruj się",
                            Variant: "grey"
                        },
                        {
                            To: "/auth/password-recovery",
                            Text: "Zapomniałem hasła",
                            Variant: "grey"
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default Page;