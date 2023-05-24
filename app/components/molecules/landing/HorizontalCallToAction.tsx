import StandardButton from "../../atoms/buttons/StandardButton";
import Container from "../../atoms/grid/Container";

interface HorizontalCallToActionProps {
    CallToActionText: string;
    ButtonText: string;
    Icon?: string;
}

function HorizontalCallToAction(Props: HorizontalCallToActionProps) {
    return (
        <div className="w-full bg-dark my-4 py-5">
            <Container ClassNames="flex flex-col md:flex-row justify-around items-center">
                <h6 className="text-sm mb-2.5 md:mb-0 font-bold text-white md:text-lg cursor-default">{Props.CallToActionText}</h6>
                <StandardButton Text={Props.ButtonText} onClick={() => {}} 
                    Icon={Props.Icon} ClassNames="max-sm:text-sm" Variant='purple' />
            </Container>
        </div>
    );
};

export default HorizontalCallToAction;