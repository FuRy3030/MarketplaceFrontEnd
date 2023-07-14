function GetReadableExperienceLevel(ExperienceLevel: string) {
    switch (ExperienceLevel) {
        case 'WINNER':
            return 'Zwycięzca olimpiady';
        case 'INTERNATIONAL':
            return 'Olimpiada międzynarodowa';
        case 'LAUREATE':
            return 'Laureat olimpiady';
        case 'FINALIST':
            return 'Finalista olimpiady';
        default:
            return '';
    }
};

export default GetReadableExperienceLevel;