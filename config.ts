interface Config {
    TutorsMicroservice_GraphQLUrl: string;
    TutorsMicroservice_FilesUrl: string;
}

const DevConfig: Config = {
    TutorsMicroservice_GraphQLUrl: 'https://localhost:44378/graphql/',
    TutorsMicroservice_FilesUrl: 'https://localhost:44378/files/'
};

const ProdConfig: Config = {
    TutorsMicroservice_GraphQLUrl: '',
    TutorsMicroservice_FilesUrl: ''
};
  
export const Config = process.env.NODE_ENV === 'production' ? ProdConfig : DevConfig;