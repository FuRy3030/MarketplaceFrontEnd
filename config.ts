interface Config {
    GraphQLUrl: string;
    TutorsMicroservice_GraphQLUrl: string;
    TutorsMicroservice_FilesUrl: string;
}

const DevConfig: Config = {
    GraphQLUrl: 'https://localhost:44384/graphql/',
    TutorsMicroservice_GraphQLUrl: 'https://localhost:44378/graphql/',
    TutorsMicroservice_FilesUrl: 'https://localhost:44378/files'
};

const ProdConfig: Config = {
    GraphQLUrl: 'https://competifymarketplacebackendtestserver.azurewebsites.net/graphql/',
    TutorsMicroservice_GraphQLUrl: 'https://competifymentorbackendtestserver.azurewebsites.net/graphql/',
    TutorsMicroservice_FilesUrl: 'https://competifymentorbackendtestserver.azurewebsites.net/files'
};
  
export const Config = process.env.NODE_ENV === 'production' ? ProdConfig : DevConfig;