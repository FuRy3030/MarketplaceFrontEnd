import clsx from "clsx";
import SideBarLink, { SideBarLinkProps } from "../../atoms/navigation/SideBarLink";

interface SideBarLinksSectionProps {
    Heading: string;
    Links: SideBarLinkProps[];
    ClassName?: string;
};

function SideBarLinksSection(Props: SideBarLinksSectionProps) {
    return (
        <div className={clsx("flex flex-col mb-4", Props.ClassName)}>
            <h6 className="mb-2.5 ml-2 font-semibold text-sm uppercase text-semi-dark cursor-default">
                {Props.Heading}
            </h6>
            {Props.Links.map((Link: SideBarLinkProps, Index: number) => (
                <SideBarLink key={Index} {...Link} />
            ))}
        </div>
    );
};

export default SideBarLinksSection;