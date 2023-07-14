import { AppProps } from 'next/app';
import '../styles/global.scss';
import '../styles/overrides.scss';
import '@elastic/eui/dist/eui_theme_light.css';
import { useRouter } from 'next/router';
import TutorsSearchLayout from '../layouts/TutorsSearchLayout';
import AuthorizeProvider from '../app/providers/AuthorizeProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import DefaultQueryClient from '../app/api/DefaultQueryClient';

function MyApp({ Component, pageProps }: AppProps) {
    const Router = useRouter();

    // Check if the current route starts with '/tutors'
    const IsTutorRoute = Router.pathname.startsWith('/tutors');

    return (
        <QueryClientProvider client={DefaultQueryClient}>
            <AuthorizeProvider>
                {IsTutorRoute ? 
                    <TutorsSearchLayout>
                        <Component {...pageProps} />
                    </TutorsSearchLayout>
                    :
                    <Component {...pageProps} />
                }
            </AuthorizeProvider>
        </QueryClientProvider>
    );
}

export default MyApp;