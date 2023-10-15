import { useSnapshot } from "valtio";
import AuthState from "../store/auth/AuthState";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NotLoggedModal from "../components/modals/NotLoggedModal";

interface AuthorizeProviderProps {
    children: React.ReactNode;
}

function AuthorizeProvider(Props: AuthorizeProviderProps) {
    const IsUserLogged = useSnapshot(AuthState).IsLogged;
    const Router = useRouter();

    useEffect(() => {
        if (IsUserLogged && Router.route.startsWith('/auth')) {
            Router.push('/tutors');
        } else if (!IsUserLogged && (Router.route.startsWith('/profile') || 
            Router.route.startsWith('/tutors') || 
            Router.route.startsWith('/olympiads/search')))
        {
            Router.push('/auth/login');
        }
    }, [IsUserLogged, Router.route]);

    return (
        <>
            {Props.children}
            <NotLoggedModal 
                IsFromUpperComponentModalVisible={Router.route.startsWith('/auth/login') && !IsUserLogged}               
            />
        </>
    );
};

export default AuthorizeProvider;