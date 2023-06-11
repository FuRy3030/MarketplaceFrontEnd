import clsx from "clsx";

interface ContainerProps {
    children?: any;
    ClassNames?: string;
    Id?: string;
}

function Container(Props: ContainerProps) {
    return (
        <div className={clsx("mx-auto w-[88vw] 2xl:w-[1350px]", Props.ClassNames)} id={Props.Id}>
            {Props.children}
        </div>
    );
};

export default Container;