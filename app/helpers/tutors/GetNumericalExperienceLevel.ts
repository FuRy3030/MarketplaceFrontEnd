function GetNumericalExperienceLevel(ExperienceLevel: string) {
    switch (ExperienceLevel) {
        case 'WINNER':
            return 4;
        case 'INTERNATIONAL':
            return 3;
        case 'LAUREATE':
            return 2;
        case 'FINALIST':
            return 1;
        default:
            return 0;
    }
};

export default GetNumericalExperienceLevel;