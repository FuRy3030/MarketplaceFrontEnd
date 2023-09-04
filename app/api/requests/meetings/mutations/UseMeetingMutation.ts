import { useMutation } from "@tanstack/react-query";
import { ClientError, gql } from "graphql-request";
import INewMeeting from "../../../types/meetings/INewMeeting";
import GraphQLClient from "../../../GraphQLClient";
import { useRouter } from "next/router";

const CREATE_MEETING_MUTATION = gql`
  mutation CreateMeeting($tutorId: String!, $educationalService: SubjectOlympiadNames!, $dates: [DateTime!]!) {
    CreateMeeting(tutorId: $tutorId, educationalService: $educationalService, dates: $dates)
  }
`;

const UseMeetingMutation = (() => {
    const Router = useRouter();
    
    return useMutation<string, ClientError, INewMeeting>(
        ['CreateMeeting'],
        async (NewMeeting: INewMeeting) => {
            const Response = await GraphQLClient.request<{ CreateMeeting: string }>(CREATE_MEETING_MUTATION, 
                { 
                    tutorId: NewMeeting.TutorId, 
                    educationalService: NewMeeting.EducationalServiceName, 
                    dates: NewMeeting.MeetingDates 
                }
            );

            return Response.CreateMeeting;
        },
        {
            onSuccess: (PaymentURL: string) => {            
                Router.push(PaymentURL);
            }
        }
    )
});

export default UseMeetingMutation;