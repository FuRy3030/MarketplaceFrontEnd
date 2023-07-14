function GetReadableEducationLevel(EducationLevel: string) {
    switch (EducationLevel) {
        case 'STUDENT':
            return 'Uczeń liceum ogólnokształcącego lub technikum';
        case 'BACHELOR':
            return 'Studia I stopnia (licencjackie lub inżynierskie)';
        case 'MASTERS':
            return 'Studia II stopnia (magisterskie lub inżynierskie)';
        case 'PHD':
            return 'Profesor akademicki i / lub doktorat';
        default:
            return '';
    }
};

export default GetReadableEducationLevel;