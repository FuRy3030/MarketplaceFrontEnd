import { useState } from "react";
import NavigationBar from "../app/components/organisms/navigation/NavigationBar";
import SideBar from "../app/components/organisms/navigation/SideBar";

function BasicLayout({ children } : { children: React.ReactNode }) {
    const [IsNavOpen, SetIsNavOpen] = useState<boolean>(false);

    const ToggleNavigation = (IsOpen: boolean) => {
        SetIsNavOpen(IsOpen);
    };
    
    return (
        <>
            <div className="w-full flex flex-col relative overflow-hidden min-h-screen">
                <NavigationBar ToggleNavigation={ToggleNavigation} />
                {children}
            </div>
            <SideBar IsNavOpen={IsNavOpen} ToggleNavigation={ToggleNavigation} />
        </>
    );
}

export default BasicLayout;