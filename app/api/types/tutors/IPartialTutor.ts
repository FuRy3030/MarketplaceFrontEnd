interface IPartialTutor {
    Id: string;
    FirstName: string;
    LastName: string;
    TutorDetails: {
        City: string;
        Country: string;
        Olympiads: {
            Name: "OWE" | "OP" | "OM" | "OI" | "OFIZ" | "OLCHEM" | "OBIOL" | "OHIS" | "OGEO" | "OLIJP" | "LOSY" | "OFIL" | "OWOPISW" | "OASTRO" | "OJA" | "OJN" | "OJFR" | "OSTAT";
            Experience: 'FINALIST' | 'LAUREATE' | 'INTERNATIONAL' | 'WINNER';
        } [];
        IsRemote: boolean;
        IsStationary: boolean;
    };
    TutorPricings: {
        BasePrice: number;
    } [];
};

export default IPartialTutor;