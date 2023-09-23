import { proxy } from "valtio";

type PriceOptionStateType = {
    PaidHours: number | undefined;
    ServiceName: "OWE" | "OP" | "OM" | "OI" | "OFIZ" | "OLCHEM" | "OBIOL" | "OHIS" | "OGEO" | "OLIJP" | "LOSY" | "OFIL" | "OWOPISW" | "OASTRO" | "OJA" | "OJN" | "OJFR" | "OSTAT" | undefined;
};

const PriceOptionState = proxy({
    PaidHours: undefined,
    ServiceName: undefined
} as PriceOptionStateType);

export default PriceOptionState;