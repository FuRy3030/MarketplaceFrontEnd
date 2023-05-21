import clsx from 'clsx';
import "../../../../styles/HomePage.scss";
import IsMobile from '@/app/hooks/universal/IsMobile';

interface GradientBackgroundProps {
    IsVisible: boolean;
    ClassName: string;
}

function GradientBackground({ IsVisible, ClassName } : GradientBackgroundProps) {
    const IsMobileUsed = IsMobile();
    
    return (
        <div className={clsx(ClassName, IsVisible ? 'fade-in' : 'fade-out')}>
            <svg className={clsx('wave-svg', IsMobileUsed && 'wave-svg-mobile')} xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1000 200">
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(0)">
                        <stop offset="0%" stopColor="rgba(191, 0, 198, 0.5)" />
                        <stop offset="50%" stopColor="rgba(171, 0, 235, 0.5)" />
                        <stop offset="100%" stopColor="rgba(75, 71, 181, 0.5)" />
                    </linearGradient>
                </defs>
                <path className='wave-group' fill="url(#gradient)" 
                    d="M0,200 L0,100 C100,75 200,25 300,50 C400,75 500,125 600,100 C700,75 800,25 900,50 L1000,0 L1000,200 Z" />
            </svg>
        </div>
    );
};

export default GradientBackground;