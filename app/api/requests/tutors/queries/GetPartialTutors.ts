import { gql } from "graphql-request";
import TutorsMicroserviceGraphQLClient from "../../../TutorsMicroserviceGraphQLClient";
import IPartialTutor from "../../../types/tutors/IPartialTutor";
import { ToUpperCaseArray } from "../../../../helpers/universal/ToUpperCase";

const GET_PARTIAL_TUTORS = gql`
    query {
        GetAllTutors {
            lastName
            firstName
            id
            tutorDetails {
                city
                country
                olympiads {
                    name
                    experience
                }
                isStationary
                isRemote
            }
            tutorPricings {
                basePrice
            }
        }
    }
`;

async function GetPartialTutors() {
    const Response = await TutorsMicroserviceGraphQLClient.request<{ GetAllTutors: IPartialTutor [] }>
        (GET_PARTIAL_TUTORS);
    return ToUpperCaseArray(Response.GetAllTutors) as IPartialTutor [];
};

export default GetPartialTutors;