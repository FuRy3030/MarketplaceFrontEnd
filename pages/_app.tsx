import { AppProps } from 'next/app';
import '../styles/global.scss';
import '../styles/overrides.scss';
import '@elastic/eui/dist/eui_theme_light.css';
import { useRouter } from 'next/router';
import AuthorizeProvider from '../app/providers/AuthorizeProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import DefaultQueryClient from '../app/api/DefaultQueryClient';
import BasicLayout from '../layouts/TutorsSearchLayout';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function MyApp({ Component, pageProps }: AppProps) {
    const Router = useRouter();

    const IsBasicLayoutRoute = Router.pathname.startsWith('/tutors') || 
        Router.pathname.startsWith('/olympiads') ||
        Router.pathname.startsWith('/profile');

    return (
        <QueryClientProvider client={DefaultQueryClient}>
            <GoogleReCaptchaProvider
                reCaptchaKey="6LeIniMoAAAAAJKIkrpaYkDGPZpDfUGpZnnvvk1H"
                language="pl"
                scriptProps={{
                    async: false, 
                    defer: false, 
                    appendTo: 'head', 
                    nonce: undefined
                }}
            >
                <AuthorizeProvider>
                    {IsBasicLayoutRoute ? 
                        <BasicLayout>
                            <Component {...pageProps} />
                        </BasicLayout>
                        :
                        <Component {...pageProps} />
                    }
                </AuthorizeProvider>
            </GoogleReCaptchaProvider>
        </QueryClientProvider>
    );
}

export default MyApp;