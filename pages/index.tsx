import { useEffect, useState } from 'react';
import clsx from 'clsx';

import "../styles/HomePage.scss";
import GradientBackground from '@/app/components/atoms/landing/GradientBackground';
import IsMobile from '@/app/hooks/universal/IsMobile';
import NavigationBar from '@/app/components/organisms/global/NavigatioBar';
import GetClassNameForHeadlineWord from '@/app/helpers/landing/GetClassNameForHeadlineWord';

function LandingPage() {
    const [BackgroundIndexVisibility, SetBackgroundIndexVisibility] = useState<number>(0);
    const [HeadlineWordSelectedIndex, SetHeadlineWordSelectedIndex] = useState<number>(0);
    const [IsHigherLandingScreenNeeded, SetIsHigherLandingScreenNeeded] = useState<boolean>(false);
    const IsMobileUsed = IsMobile();

    useEffect(() => {
        const AnimationInterval = setInterval(() => {
            SetBackgroundIndexVisibility((PrevValue) => PrevValue < 2 ? PrevValue + 1 : 0);
        }, 16000);
    
        // Clean up the interval on component unmount
        return () => {
            clearInterval(AnimationInterval);
        };
    }, []);

    useEffect(() => {
        const AnimationInterval = setInterval(() => {
            SetHeadlineWordSelectedIndex((PrevValue) => PrevValue < 2 ? PrevValue + 1 : 0);
        }, 6000);
    
        // Clean up the interval on component unmount
        return () => {
            clearInterval(AnimationInterval);
        };
    }, []);

    useEffect(() => {
        const HandleResize = () => {
            const WidthToHeightRatio: number = window.innerWidth / window.innerHeight;
            SetIsHigherLandingScreenNeeded(WidthToHeightRatio >= 1.5 && window.innerWidth < 1500);
        };
    
        // Add event listener to track window resize
        window.addEventListener('resize', HandleResize);

        const WidthToHeightRatio: number = window.innerWidth / window.innerHeight;
        SetIsHigherLandingScreenNeeded(WidthToHeightRatio >= 1.5 && window.innerWidth < 1500);
    
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', HandleResize);
        };
    }, []);
    // fontFamily: "'Lilita One', cursive" letterSpacing: '-0.04em'
    // className={clsx('w-screen relative overflow-hidden', IsHigherLandingScreenNeeded ? 'h-[120vh]' : !IsMobileUsed ? 'h-[110vh]' : 'h-screen')}

    return (
        <>
            <NavigationBar />
            <div className='z-10 absolute top-[100px] left-[5vw] w-[90vw] mx-auto h-auto flex flex-col md:left-[7.5vw] md:w-[70vw]'>
                <h1 id='Headline' className='relative text-deepDark font-extrabold mb-7 mt-6 cursor-default leading-[1.1] md:mb-5 md:mt-0' style={{fontSize: 'clamp(30px, 4.75vw, 85px)', fontFamily: "'Source Sans Pro', sans-serif", letterSpacing: '-0.04em'}}>
                    Zwycięska kadra <br />
                    mentorów przygotuje <br />
                    Cię do każdej 
                    <span className={clsx('HeadlineAnimated__Word', GetClassNameForHeadlineWord(HeadlineWordSelectedIndex, 0))}>olimpiady</span> 
                    <span className={clsx('HeadlineAnimated__Word', GetClassNameForHeadlineWord(HeadlineWordSelectedIndex, 1))}>konkursu</span> 
                    <span className={clsx('HeadlineAnimated__Word', GetClassNameForHeadlineWord(HeadlineWordSelectedIndex, 2))}>egzaminu</span>
                </h1>
                <h2 className='text-dark font-bold my-3 cursor-default text-2xl md:text-3xl'>
                    Łączymy uczniów z laureatami olimpiad 
                </h2>
                <p className='text-dark font-semibold cursor-default text-justify text-lg'>
                    W BLANK zajmujemy się kompleksowym przygotowaniem do olimpiad: łączymy ambitnych uczniów szkół średnich z laureatami najwyższych lokat, którzy dokładnie wiedzą, co trzeba zrobić, aby wygrać olimpiadę. 
                </p>
            </div>
            <div>
                <div className={clsx('LandingPageImageContainer', IsMobileUsed && 'LandingPageImageContainer--Mobile')}>
                    <img src="/personal_design_images/landing-page-fullhd.png" alt="Landing Page" 
                        className={clsx(!IsMobileUsed ? 'FullscreenImage' : 'FullscreenImage--Mobile', 
                        IsHigherLandingScreenNeeded ? 'FullscreenImage--SquareViewports' : !IsMobileUsed && 'FullscreenImage--SquareViewportsLight')} 
                    />
                </div>
                <div className='GradientShape'>
                    {!IsMobileUsed ? 
                        <>
                            <GradientBackground IsVisible={BackgroundIndexVisibility === 0} ClassName="GradientShape__Background--Toned" />
                            <GradientBackground IsVisible={BackgroundIndexVisibility === 1} ClassName="GradientShape__Background--Bright" />
                            <GradientBackground IsVisible={BackgroundIndexVisibility === 2} ClassName="GradientShape__Background--Contrast" />
                        </> 
                    : 
                        <GradientBackground IsVisible={true} ClassName="GradientShape__Background--Mobile" />
                    }
                </div>
            </div>
        </>
    );
}
  
export default LandingPage;