interface Config {
    GraphQLUrl: string;
    TutorsMicroservice_GraphQLUrl: string;
    TutorsMicroservice_FilesUrl: string;
    MentorFrontendUrl: string;
}

const DevConfig: Config = {
    GraphQLUrl: 'https://localhost:44384/graphql/',
    TutorsMicroservice_GraphQLUrl: 'https://localhost:44378/graphql/',
    TutorsMicroservice_FilesUrl: 'https://localhost:44378/files/',
    MentorFrontendUrl: 'https://localhost:3001'
};

const ProdConfig: Config = {
    GraphQLUrl: 'https://competifymarketplacebackendtestserver.azurewebsites.net/graphql/',
    TutorsMicroservice_GraphQLUrl: 'https://competifymentorbackendtestserver.azurewebsites.net/graphql/',
    TutorsMicroservice_FilesUrl: 'https://competifymentorbackendtestserver.azurewebsites.net/files/',
    MentorFrontendUrl: 'https://competify-mentor-git-10-final-version-fury3030.vercel.app'
};
  
export const Config = process.env.NODE_ENV === 'production' ? ProdConfig : DevConfig;