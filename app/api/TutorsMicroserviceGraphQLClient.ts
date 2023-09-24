import { GraphQLClient } from 'graphql-request';
import { Config } from '../../config';

const TutorsMicroserviceGraphQLClient = new GraphQLClient(Config.TutorsMicroservice_GraphQLUrl);

export default TutorsMicroserviceGraphQLClient;