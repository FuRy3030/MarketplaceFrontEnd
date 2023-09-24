import { useState } from "react";
import NavigationBar from "../app/components/organisms/navigation/NavigationBar";
import SideBar from "../app/components/organisms/navigation/SideBar";
import LoadingScreen from "../app/components/LoadingScreen";

function LoadingLayout() {
    const [IsNavOpen, SetIsNavOpen] = useState<boolean>(false);

    const ToggleNavigation = (IsOpen: boolean) => {
        SetIsNavOpen(IsOpen);
    };
    
    return (
        <>
            <div className="w-full flex flex-col relative overflow-hidden min-h-screen">
                <NavigationBar ToggleNavigation={ToggleNavigation} />
                <div className="flex justify-center items-center" 
                    style={{ minHeight: 'calc(100vh - 76.67px)', maxHeight: 'calc(100vh - 76.67px)' }}
                >
                    <LoadingScreen Message="Proszę poczekaj, ładujemy nasze zasoby..." />
                </div>
            </div>
            <SideBar IsNavOpen={IsNavOpen} ToggleNavigation={ToggleNavigation} />
        </>
    );
}

export default LoadingLayout;