interface NavigationLinkProps {
    Text: string;
    To: string;
}

function NavigationLink(Props: NavigationLinkProps) {
    return (
        <a className="hidden sm:block px-6 py-2 w-auto font-bold text-white cursor-pointer hover:opacity-60 transition-opacity duration-500 ease-in-out" 
            style={{fontSize: 'clamp(10px, 1.6vw, 20px)'}} href={Props.To}
        >
            {Props.Text}
        </a>
    );
};

export default NavigationLink;