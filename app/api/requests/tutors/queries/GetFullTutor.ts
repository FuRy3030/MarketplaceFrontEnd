import { gql } from "graphql-request";
import TutorsMicroserviceGraphQLClient from "../../../TutorsMicroserviceGraphQLClient";
import ToUpperCase from "../../../../helpers/universal/ToUpperCase";
import ITutor from "../../../types/tutors/ITutor";

const GET_FULL_TUTOR = gql`
    query GetTutor($id: ObjectId!) {
        GetTutor(id: $id) {
            lastName
            firstName
            id
            tutorDetails {
                id
                tutorId
                geoLocation {
                    latitude
                    longitude
                }
                city
                country
                fullLocation
                isRemote
                isStationary
                description
                education
                olympiads {
                    experience
                    name
                }
            }
            tutorPricings {
                id
                name
                basePrice
                doublePackagePrice
                triplePackagePrice
                fivePackagePrice
                tenPackagePrice
                isDoublePackagePriceActive
                isTriplePackagePriceActive
                isFivePackagePriceActive
                isTenPackagePriceActive
            }
            tutorSchedule {
                id
                timezone
                lessonDuration
                scheduleStartTime
                scheduleEndTime
                avaliableHours {
                    item1
                    item2
                }
                exceptionDates
                additionDates
            }
        }
    }
`;

async function GetFullTutor(Id?: string) {
    if (Id) {
        const Response = await TutorsMicroserviceGraphQLClient.request<{ GetTutor: ITutor }>
            (GET_FULL_TUTOR, { id: Id });
        return ToUpperCase(Response.GetTutor) as ITutor;
    }
};

export default GetFullTutor;