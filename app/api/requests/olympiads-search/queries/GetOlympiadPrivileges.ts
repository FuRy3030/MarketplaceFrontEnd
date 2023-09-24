import { gql } from "graphql-request";
import GraphQLClient from "../../../GraphQLClient";
import { ToUpperCaseArray } from "../../../../helpers/universal/ToUpperCase";

const GET_OLYMPIAD_PRIVILEGES = gql`
    query GetPrivileges($universityName: String!, $major: String!) {
        GetPrivileges(universityName: $universityName, major: $major) {
            olympiad
            laureate
            finalist
        }
    }
`;

async function GetOlympiadPrivileges(UniversityName: string, Major: string) {
    const Response = await GraphQLClient.request<{ GetPrivileges: IOlympiadPrivilege [] }>(GET_OLYMPIAD_PRIVILEGES,
        { universityName: UniversityName, major: Major });
    return ToUpperCaseArray(Response.GetPrivileges) as IOlympiadPrivilege [];
};

export default GetOlympiadPrivileges;