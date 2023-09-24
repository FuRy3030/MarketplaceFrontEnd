import { gql } from "graphql-request";
import GraphQLClient from "../../../GraphQLClient";
import { ToUpperCaseArray } from "../../../../helpers/universal/ToUpperCase";

const GET_BOOKED_DATES_FOR_TUTOR = gql`
  query GetBookedDatesForTutor($tutorId: String!) {
    GetBookedDatesForTutor(tutorId: $tutorId)
  }
`;

async function GetBookedDatesForTutor(TutorId?: string) {
    if (TutorId) {
        const Response = await GraphQLClient.request<{ GetBookedDatesForTutor: string [] }>
            (GET_BOOKED_DATES_FOR_TUTOR, { tutorId: TutorId });
        return ToUpperCaseArray(Response.GetBookedDatesForTutor) as string [];
    }
};

export default GetBookedDatesForTutor;