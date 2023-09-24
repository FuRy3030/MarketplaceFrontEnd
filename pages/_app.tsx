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
import Head from 'next/head';
import { useEffect, useState } from 'react';
import LoadingLayout from '../layouts/LoadingLayout';

function MyApp({ Component, pageProps }: AppProps) {
    const Router = useRouter();

    const IsBasicLayoutRoute = Router.pathname.startsWith('/tutors') || 
        Router.pathname.startsWith('/olympiads') ||
        Router.pathname.startsWith('/profile');

    const [IsPageLoading, SetIsPageLoading] = useState<boolean>(false);
    useEffect(() => {
        Router.events.on('routeChangeStart', () => SetIsPageLoading(true));
        Router.events.on('routeChangeComplete', () => SetIsPageLoading(false));
        Router.events.on('routeChangeError', () => SetIsPageLoading(false));

        return () => {
            Router.events.off('routeChangeStart', () => SetIsPageLoading(true));
            Router.events.off('routeChangeComplete', () => SetIsPageLoading(false));
            Router.events.off('routeChangeError', () => SetIsPageLoading(false));
        };
    }, [Router.events]);

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
                    <Head>
                        <title>Competify - Razem z nami zawalczysz o najwyższe wyniki!</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                        <meta name="description" content="W Competify zajmujemy się kompleksowym przygotowaniem do olimpiad: łączymy ambitnych uczniów szkół średnich z laureatami najwyższych lokat, którzy dokładnie wiedzą, co trzeba zrobić, aby wygrać olimpiadę" />
                        <meta property="og:title" content="Competify - Razem z nami zawalczysz o najwyższe wyniki!" />
                        <meta property="og:description" content="W Competify zajmujemy się kompleksowym przygotowaniem do olimpiad: łączymy ambitnych uczniów szkół średnich z laureatami najwyższych lokat, którzy dokładnie wiedzą, co trzeba zrobić, aby wygrać olimpiadę" />
                        <meta property="og:image" content="/website-previews/website-preview.png" />
                        <meta property="og:url" content="https://www.competify.pl" />
                        <meta property="og:type" content="website" />
                        <link rel="icon" href="/logo/favicon.ico" />
                        <script>
                        {`
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '146653598423875');
                            fbq('track', 'PageView');
                        `}
                        </script>
                        <noscript>
                            <img
                                height="1"
                                width="1"
                                style={{ display: 'none' }}
                                src="https://www.facebook.com/tr?id=146653598423875&ev=PageView&noscript=1"
                            />
                        </noscript>
                        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QXVP0FWBDK"></script>
                        <script>
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-QXVP0FWBDK');
                        `}
                        </script>
                    </Head>
                    {IsPageLoading ? 
                        <LoadingLayout /> 
                        : 
                        IsBasicLayoutRoute ? 
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