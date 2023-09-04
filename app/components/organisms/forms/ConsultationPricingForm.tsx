import ITutor from "../../../api/types/tutors/ITutor";
import GetNumericalExperienceLevel from "../../../helpers/tutors/GetNumericalExperienceLevel";
import GetReadableExperienceLevel from "../../../helpers/tutors/GetReadableExperienceLevel";
import UseOlympiadsLabelValuePair from "../../../hooks/constants/UseOlympiadsLabelValuePair";
import UseOlympiadsLogos from "../../../hooks/constants/UseOlympiadsLogos";
import PriceOption from "../../molecules/list-items/PriceOption";
import TutorOlympiad from "../../molecules/list-items/TutorOlympiad";

function ConsultationPricingForm({ Tutor } : { Tutor: ITutor }) {
    return (
        <>
            {Tutor.TutorPricings.map((Pricing) => {
                const Experience = Tutor.TutorDetails.Olympiads
                    .find(Olympiad => Olympiad.Name === Pricing.Name)?.Experience!;

                return ( 
                    <div key={Pricing.Name}>
                        <TutorOlympiad 
                            key={Pricing.Name}
                            Name={UseOlympiadsLabelValuePair().find(
                                (OlympiadData) => OlympiadData.value === Pricing.Name)?.label as string}
                            Color={UseOlympiadsLabelValuePair().find(
                                (OlympiadData) => OlympiadData.value === Pricing.Name)?.color as string}
                            Logo={UseOlympiadsLogos()[Pricing.Name]}
                            Experience={GetReadableExperienceLevel(Experience)}
                            ActiveDots={GetNumericalExperienceLevel(Experience)}
                            ClassName="mt-8 mb-1"
                        />
                        <div className="w-full flex flex-wrap justify-between my-3.5">
                            <PriceOption
                                Id={Pricing.Id + "0"}
                                PaidHours={0}
                                ServiceName="Próbna konsultacja"
                                ServiceCode={Pricing.Name}
                                Price={0}
                                Currency="PLN"
                                ClassName="w-full md:w-[47.5%] lg:w-full xl:w-[47.5%] my-3.5"
                            />
                            <PriceOption
                                Id={Pricing.Id + "1"}
                                PaidHours={1}
                                ServiceName="Zwykła konsultacja"
                                ServiceCode={Pricing.Name}
                                Price={Pricing.BasePrice}
                                Currency="PLN"
                                ClassName="w-full md:w-[47.5%] lg:w-full xl:w-[47.5%] my-3.5"
                            />
                            <PriceOption
                                Id={Pricing.Id + "2"}
                                PaidHours={2}
                                ServiceName="Pakiet podwójny"
                                ServiceCode={Pricing.Name}
                                Price={Pricing.DoublePackagePrice}
                                OldPrice={2 * Pricing.BasePrice}
                                Currency="PLN"
                                ClassName="w-full md:w-[47.5%] lg:w-full xl:w-[47.5%] my-3.5"
                                IsHotOffer
                            />
                            <PriceOption
                                Id={Pricing.Id + "3"}
                                PaidHours={3}
                                ServiceName="Pakiet potrójny"
                                ServiceCode={Pricing.Name}
                                Price={Pricing.TriplePackagePrice}
                                OldPrice={3 * Pricing.BasePrice}
                                Currency="PLN"
                                ClassName="w-full md:w-[47.5%] lg:w-full xl:w-[47.5%] my-3.5"
                                IsHotOffer
                            />
                            <PriceOption
                                Id={Pricing.Id + "5"}
                                PaidHours={5}
                                ServiceName="Pakiet 5 zajęć"
                                ServiceCode={Pricing.Name}
                                Price={Pricing.FivePackagePrice}
                                OldPrice={5 * Pricing.BasePrice}
                                Currency="PLN"
                                ClassName="w-full md:w-[47.5%] lg:w-full xl:w-[47.5%] my-3.5"
                                IsHotOffer
                            />
                            <PriceOption
                                Id={Pricing.Id + "10"}
                                PaidHours={10}
                                ServiceName="Pakiet 10 zajęć"
                                ServiceCode={Pricing.Name}
                                Price={Pricing.TenPackagePrice}
                                OldPrice={10 * Pricing.BasePrice}
                                Currency="PLN"
                                ClassName="w-full md:w-[47.5%] lg:w-full xl:w-[47.5%] my-3.5"
                                IsHotOffer
                            />
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default ConsultationPricingForm;