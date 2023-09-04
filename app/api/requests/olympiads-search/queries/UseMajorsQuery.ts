import { useQuery } from "@tanstack/react-query";
import { ClientError, gql } from "graphql-request";
import GraphQLClient from "../../../GraphQLClient";

const GET_UNIVERISTY_MAJORS = gql`
    query GetMajors($universityName: String!) {
        GetMajors(universityName: $universityName) 
    }
`;

const UseMajorsQuery = ((UniversityName: string) => {
    return useQuery<string [], ClientError, string []>(
        ['Majors'],
        async () => {
            const Response = await GraphQLClient.request<{ GetMajors: string [] }>(GET_UNIVERISTY_MAJORS, 
                { universityName: UniversityName });
            return Response.GetMajors as string [];
        }
    );
});

export default UseMajorsQuery;