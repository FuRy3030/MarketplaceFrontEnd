import clsx from "clsx";

interface BottomDrawerProps {
    children: React.ReactNode;
    ClassName?: string;
}

function BottomDrawer(Props: BottomDrawerProps) {
    return (
        <div className={clsx("sticky bottom-0 left-0 bg-white rounded-t-lg z-20 px-5 sm:px-8 py-3.5", Props.ClassName)} 
            style={{ width: 'calc(100% + 2rem)', boxShadow: '0 -2px 4px 0 rgba(0, 0, 0, 0.1)' }}
        >
            {Props.children}
        </div>
    )
};

export default BottomDrawer;