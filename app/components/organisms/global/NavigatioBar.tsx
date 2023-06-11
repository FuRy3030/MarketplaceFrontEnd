import IsMobile from "@/app/hooks/universal/IsMobile";
import NavigationBarDesktop from "../../molecules/global/NavigationBarDesktop";

function NavigationBar() {
    const IsMobileUsed = IsMobile();

    return (
        <div className="w-auto absolute top-0 left-0 h-auto z-20">
            <div className="my-4 mx-8 flex w-auto h-auto">
                <NavigationBarDesktop />
            </div>
        </div>
    );
};

export default NavigationBar;