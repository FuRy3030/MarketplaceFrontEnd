import IPartialTutor from "../../api/types/tutors/IPartialTutor";
import ITutor from "../../api/types/tutors/ITutor";

function FindTutorPricingRange(Tutor: ITutor | IPartialTutor) {
    let TutorPricingText = "";

    if (Tutor.TutorPricings.length === 1) {
        TutorPricingText = `${Tutor.TutorPricings[0].BasePrice} PLN`;
    } else {
        const MinTutorPrice = Math.min(...Tutor.TutorPricings.map((Pricing) => Pricing.BasePrice));
        const MaxTutorPrice = Math.max(...Tutor.TutorPricings.map((Pricing) => Pricing.BasePrice));
        TutorPricingText = `${MinTutorPrice} - ${MaxTutorPrice} PLN`;
    }

    return TutorPricingText;
};

export default FindTutorPricingRange;