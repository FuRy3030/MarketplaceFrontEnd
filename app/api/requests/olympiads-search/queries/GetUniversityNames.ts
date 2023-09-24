import { gql } from "graphql-request";
import GraphQLClient from "../../../GraphQLClient";

const GET_UNIVERSITY_NAMES = gql`
    query {
        GetUniversities
    }
`;

async function GetUniversityNames() {
    const Response = await GraphQLClient.request<{ GetUniversities: string [] }>(GET_UNIVERSITY_NAMES);
    return Response.GetUniversities as string [];
};

export default GetUniversityNames;