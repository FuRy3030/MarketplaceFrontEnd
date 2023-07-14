interface Config {
    GraphQLUrl: string;
    TutorsMicroservice_GraphQLUrl: string;
    TutorsMicroservice_FilesUrl: string;
}

const DevConfig: Config = {
    GraphQLUrl: 'https://localhost:44384/graphql/',
    TutorsMicroservice_GraphQLUrl: 'https://localhost:44378/graphql/',
    TutorsMicroservice_FilesUrl: 'https://localhost:44378/files/'
};

const ProdConfig: Config = {
    GraphQLUrl: '',
    TutorsMicroservice_GraphQLUrl: '',
    TutorsMicroservice_FilesUrl: ''
};
  
export const Config = process.env.NODE_ENV === 'production' ? ProdConfig : DevConfig;