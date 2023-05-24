interface SmallSectionHeaderProps {
    Header: string;
    SubHeader: string;
}

function SmallSectionHeader(Props: SmallSectionHeaderProps) {
    return (
        <>
            <h6 className="text-lg font-bold text-brand-purple mb-4">{Props.SubHeader}</h6>
            <h2 className="text-3xl font-extrabold text-dark mb-7">{Props.Header}</h2>
        </>
    );
};

export default SmallSectionHeader;