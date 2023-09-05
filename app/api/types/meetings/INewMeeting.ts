interface INewMeeting {
    MeetingDates: string []; 
    TutorId: string;
    EducationalServiceName: "OWE" | "OP" | "OM" | "OI" | "OFIZ" | "OLCHEM" | "OBIOL" | "OHIS" | "OGEO" | "OLIJP" | "LOSY" | "OFIL" | "OWOPISW" | "OASTRO" | "OJA" | "OJN" | "OJFR";
    PaidHours: number | undefined;
};

export default INewMeeting;