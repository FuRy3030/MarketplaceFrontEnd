export default interface IMeeting {
    Id: string;
    TutorName: string;
    EducationalServiceName: "OWE" | "OP" | "OM" | "OI" | "OFIZ" | "OLCHEM" | "OBIOL" | "OHIS" | "OGEO" | "OLIJP" | "LOSY" | "OFIL" | "OWOPISW" | "OASTRO" | "OJA" | "OJN" | "OJFR" | "OSTAT";
    Date: string;
    IsPaid: boolean;
    CheckoutSessionURI: string | undefined;
};