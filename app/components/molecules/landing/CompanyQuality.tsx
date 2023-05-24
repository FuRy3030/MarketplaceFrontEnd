interface CompanyQualityProps {
    ImagePath: string;
    AltTagImage?: string;
    Heading: string;
    Description: string;
}

function CompanyQuality(Props: CompanyQualityProps) {
    return (
        <div className="my-4 w-full md:w-1/2 md:mb-6 px-6">
            <img src={`/flaticon/landing/${Props.ImagePath}.png`} alt={Props.AltTagImage ? Props.AltTagImage : "Icon Image"} 
                className="mb-4 mx-auto w-[55%] h-auto"
            />
            <h3 className="w-full text-center text-dark text-xl mb-3 font-bold">
                {Props.Heading}
            </h3>
            <p className="w-full text-justify text-semi-dark text-base font-semibold">
               {Props.Description}
            </p>
        </div>
    );
};

export default CompanyQuality;