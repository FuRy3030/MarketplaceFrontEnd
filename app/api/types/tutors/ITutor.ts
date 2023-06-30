interface ITutor {
    Id: string;
    FirstName: string;
    LastName: string;
    TutorDetails: {
        Id: string;
        GeoLocation: {
            Longitude: number;
            Latitude: number;
        };
        City: string;
        Country: string;
        FullLocation: string;
        Education: 'STUDENT' | 'BACHELOR' | 'MASTERS' | 'PHD';
        Olympiads: {
            Name: "OWE" | "OP" | "OM" | "OI" | "OFIZ" | "OLCHEM" | "OBIOL" | "OHIS" | "OGEO" | "OLIJP" | "LOSY" | "OFIL" | "OWOPISW" | "OASTRO" | "OJA" | "OJN" | "OJFR";
            Experience: 'FINALIST' | 'LAUREATE' | 'INTERNATIONAL' | 'WINNER';
        } [];
        IsRemote: boolean;
        IsStationary: boolean;
        Description: string;
    };
    TutorSchedule: {
        Id: string;
        Timezone: string;
        ScheduleStartTime: string;
        ScheduleEndTime: string;
        LessonDuration: number;
        AvaliableHours: { Item1: string; Item2: string [] } [];
        ExceptionDates: string [];
        AdditionDates: string [];
    };
    TutorPricings: {
        Id: string;
        Name: "OWE" | "OP" | "OM" | "OI" | "OFIZ" | "OLCHEM" | "OBIOL" | "OHIS" | "OGEO" | "OLIJP" | "LOSY" | "OFIL" | "OWOPISW" | "OASTRO" | "OJA" | "OJN" | "OJFR";
        BasePrice: number;
        DoublePackagePrice: number;
        TriplePackagePrice: number;
        FivePackagePrice: number;
        TenPackagePrice: number;
        IsDoublePackagePriceActive: boolean;
        IsTriplePackagePriceActive: boolean;
        IsFivePackagePriceActive: boolean;
        IsTenPackagePriceActive: boolean;
    } [];
}

export default ITutor;