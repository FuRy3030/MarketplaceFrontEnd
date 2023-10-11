import { Config } from "../../../../../config";
import { useMutation } from "@tanstack/react-query";
import request, { ClientError, gql } from "graphql-request";
import { SetAuthHeader } from "../../../GraphQLClient";
import { useRouter } from "next/router";
import AuthState from "../../../../store/auth/AuthState";

const AUTHENTICATE_USER_VIA_GOOGLE_MUTATION = gql`
  mutation authenticateViaGoogle($googleToken: String!) {
    authenticateViaGoogle(googleToken: $googleToken)
  }
`;

const UseGoogle = (() => {
    const Router = useRouter();

    return useMutation<string, ClientError, string>(
        ['AuthenticateUserViaGoogle'],
        async (Token: string) => {
            const Response: any = await request(Config.GraphQLUrl, AUTHENTICATE_USER_VIA_GOOGLE_MUTATION, 
                { googleToken: Token });
            return Response.authenticateViaGoogle as string;
        },
        {
            onSuccess: (Token: string) => {
                const ExpirationDate = new Date();
                ExpirationDate.setHours(ExpirationDate.getHours() + 12);
                localStorage.setItem('session', Token);
                localStorage.setItem('expiration', ExpirationDate.toISOString());
                SetAuthHeader(Token);

                AuthState.IsLogged = true;
                setTimeout(() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('expiration');
                    AuthState.IsLogged = false;
                    Router.push("/tutors");
                }, 43200000);

                Router.push('/tutors');
            }
        }
    )
});

export default UseGoogle;