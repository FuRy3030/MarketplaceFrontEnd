import { useEffect, useState } from 'react';
import clsx from 'clsx';

import "../styles/HomePage.scss";
import GradientBackground from '@/app/components/atoms/landing/GradientBackground';
import IsMobile from '@/app/hooks/universal/IsMobile';
import NavigationBar from '@/app/components/organisms/global/NavigatioBar';
import GetClassNameForHeadlineWord from '@/app/helpers/landing/GetClassNameForHeadlineWord';
import StandardButton from '@/app/components/atoms/buttons/StandardButton';
import Container from '@/app/components/atoms/grid/Container';
import CompanyQuality from '@/app/components/molecules/landing/CompanyQuality';
import HorizontalCallToAction from '@/app/components/molecules/landing/HorizontalCallToAction';
import SmallSectionHeader from '@/app/components/atoms/landing/SmallSectionHeader';
import WhyUs from '@/app/components/molecules/landing/WhyUs';
import SocialMediaButton from '@/app/components/atoms/landing/SocialMediaButton';

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
                <h1 id='Headline' className='text-mobile-title px-4 relative text-deep-dark font-bold mb-6 mt-6 cursor-default leading-[1.05] md:mb-5 md:mt-0 md:px-0 md:text-title' style={{fontFamily: "'Source Sans Pro', sans-serif", letterSpacing: '-0.04em'}}>
                    Rozpocznij <br />
                    przygotowanie z <br />
                    nami do
                    <span className={clsx('HeadlineAnimated__Word', GetClassNameForHeadlineWord(HeadlineWordSelectedIndex, 0))}>olimpiad</span> 
                    <span className={clsx('HeadlineAnimated__Word', GetClassNameForHeadlineWord(HeadlineWordSelectedIndex, 1))}>konkursów</span> 
                    <span className={clsx('HeadlineAnimated__Word', GetClassNameForHeadlineWord(HeadlineWordSelectedIndex, 2))}>egzaminów</span>
                </h1>
                <h2 className='px-4 text-dark font-bold my-4 cursor-default text-2xl md:text-3xl md:px-0'>
                    Łączymy uczniów z laureatami olimpiad 
                </h2>
                <div className='p-4 bg-white-transparent-90 rounded-xl mb-5'>
                    <p className='text-dark font-semibold cursor-default text-justify text-lg'>
                        W BLANK zajmujemy się kompleksowym przygotowaniem do olimpiad: łączymy ambitnych uczniów szkół średnich z laureatami najwyższych lokat, którzy dokładnie wiedzą, co trzeba zrobić, aby wygrać olimpiadę. 
                    </p>
                </div>
                <StandardButton Text={"Przygotuj się razem z nami!"} onClick={() => {}} ClassNames={'w-max'}
                    Icon={'icon-[material-symbols--chevron-right-rounded]'} Variant='dark' />
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
            <div className={clsx('absolute left-0 w-screen md:w-[98.5vw] lg:w-[99vw] xl:w-screen h-auto mt-6', 
                IsHigherLandingScreenNeeded ? 'top-[120vh]' : !IsMobileUsed ? 'top-[110vh]' : 'top-[100vh]')}
            >
                <Container ClassNames="flex flex-wrap">
                    <CompanyQuality 
                        Heading='Czym się zajmujemy?'
                        Description='Kierując się wartościami profesjonalizmu oraz erudycji, nasi tutorzy prowadzą indywidualne zajęcia przygotowujące do olimpiad. Nasze zajęcia odbywają się online, w godzinach wspólnie dobranych przez tutora i ucznia. Skupiamy się podczas nich na jednostkowych potrzebach - lekcje są w pełni dostosowane do potrzeb i wymagań ucznia.'
                        ImagePath='virtual-class'
                        AltTagImage='Virtual class icon'
                    />
                    <CompanyQuality 
                        Heading='Jak wyglądają nasze zajęcia?'
                        Description='Początkowym etapem współpracy jest ustalenie wspólnego planu nauki, który następnie może być modyfikowany wraz z pojawiającymi się potrzebami. Po zaakceptowaniu planu nauki, uczeń przystępuje do jego realizacji, spotykając się z tutorem w ustalonym wcześniej przedziale godzinowym. Podczas godzin lekcyjnych uczeń przygotowuje się do kolejnych etapów olimpiad, skupiając się na nauce teorii, rozwiązywaniu zadań bądź przygotowywaniu prac badawczych.'
                        ImagePath='plan-board'
                        AltTagImage='Success plan icon'
                    />
                </Container>
                <HorizontalCallToAction 
                    CallToActionText="Masz pytania lub chcesz dowiedzieć się więcej?" 
                    ButtonText="Umów się na bezpłatną konsultację" 
                    Icon="icon-[ant-design--schedule-filled]" 
                />
                <Container ClassNames="flex flex-wrap">
                    <CompanyQuality 
                        Heading='Kim są nasi tutorzy?'
                        Description='Nasi tutorzy to laureaci najwyższych lokat poprzednich edycji olimpiad - osoby, które dobrze znają program i wymagania kompetycji i świetnie wiedzą, co trzeba zrobić, aby doskonale się do nich przygotować. Obecnie kończą oni liceum bądź studiują na najlepszych uczelniach w Polsce, jak i za granicą.'
                        ImagePath='olympiad-winner'
                        AltTagImage='Prized tutor icon'
                    />
                </Container>
                <HorizontalCallToAction 
                    CallToActionText="Chcesz sprawdzić swoich przyszłych mentorów?" 
                    ButtonText="Poznaj naszych tutorów" 
                    Icon="icon-[octicon--comment-discussion-16]"
                />
                <Container ClassNames="my-14">
                    <SmallSectionHeader 
                        SubHeader="Dlaczego my?" 
                        Header="Najbardziej spersonalizowane podejście w przygotowaniu do olimpiady" 
                    />
                    <WhyUs />
                </Container>
                <Container ClassNames="my-14">
                    <SmallSectionHeader 
                        SubHeader="Kontakt" 
                        Header="Skontaktuj się z nami!" 
                    />
                    <p className='mb-6 text-base font-semibold text-semi-dark text-justify w-full md:text-left md:w-[80%]'>
                        Z przyjemnością rozwiążemy wszystkie Twoje wątpliwości dotyczące naszej oferty oraz odpowiemy na wszystkie pytania, które pojawią się po Twojej stronie. Nasi tutorzy odpowiedzą na Twoje pytania związane z przeprowadzeniem zajęć czy  konkretnych olimpiad. 
                    </p>
                    <h6 className='text-xl font-bold text-dark mb-4'>W razie pytań napisz maila, zadzwoń lub zadaj je nam poprzez social media:</h6>
                    <div className='flex flex-row flex-wrap justify-center md:justify-around md:w-11/12 mx-auto'>
                        <SocialMediaButton Icon="icon-[tabler--mail-star]" Color="#5c51d3" />
                        <SocialMediaButton Icon="icon-[material-symbols--phone-callback-outline-rounded]" Color="#0d3cfb" />
                        <SocialMediaButton Icon="icon-[bx--bxl-facebook]" Color="#0165E1" />
                        <SocialMediaButton Icon="icon-[mdi--facebook-messenger]" Color="#17A9FD" />
                        <SocialMediaButton Icon="icon-[mdi--instagram]" Color="#d62976" />
                        <SocialMediaButton Icon="icon-[mdi--linkedin]" Color="#0A66C2" />
                        <SocialMediaButton Icon="icon-[ic--baseline-tiktok]" Color="#000000" />
                    </div>
                </Container>
            </div>
        </>
    );
}
  
export default LandingPage;