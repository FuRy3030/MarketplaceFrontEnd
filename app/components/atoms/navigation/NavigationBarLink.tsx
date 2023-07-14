import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavigationBarLinkProps {
    To: string;
    Text: string;
    Icon: string;
    ClassName?: string;
}

function NavigationBarLink(Props: NavigationBarLinkProps) {
    const Router = useRouter();
    const IsLinkActive = Router.pathname === Props.To;

    return (
        <Link href={Props.To} className={clsx("font-bold text-base px-3.5 py-2 flex items-center hover:text-brand-purple-light transition-all duration-300",
            IsLinkActive ? "text-brand-purple-light" : "text-semi-dark-alt", Props.ClassName)}
        >
            <span className={clsx('mr-2 text-lg', Props.Icon)}></span>{Props.Text}
        </Link>
    );
};

export default NavigationBarLink;