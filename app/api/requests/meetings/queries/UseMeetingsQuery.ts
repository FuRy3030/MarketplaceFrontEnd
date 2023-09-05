import { useQuery } from "@tanstack/react-query";
import { ClientError, gql } from "graphql-request";
import IMeeting from "../../../types/meetings/IMeeting";
import GraphQLClient from "../../../GraphQLClient";
import { ToUpperCaseArray } from "../../../../helpers/universal/ToUpperCase";

const GET_MEETINGS_QUERY = gql`
    query {
        GetAllStudentMeetingsForUserNoPaging {
            id
            tutorName
            educationalServiceName
            date
            isPaid
            checkoutSessionURI
        }
    }
`;

const UseMeetingsQuery = (() => {
    return useQuery<IMeeting [], ClientError, IMeeting []>(
        ['UserMeetings'],
        async () => {
            const Response = await GraphQLClient.request<{ GetAllStudentMeetingsForUserNoPaging: IMeeting [] }>
                (GET_MEETINGS_QUERY);
            return ToUpperCaseArray(Response.GetAllStudentMeetingsForUserNoPaging) as IMeeting [];
        }
    );
});

export default UseMeetingsQuery;