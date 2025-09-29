import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MLinkProps = {
    children: React.ReactNode;
    route: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    ariaLabel?: string;
};

const MLink: React.FC<MLinkProps> = ({
                                         children,
                                         route,
                                         className = "",
                                         onClick,
                                         ariaLabel,
                                     }) => {
    const pathname = usePathname();
    const isActive = pathname === route;

    return (
        <Link
            href={route}
            aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
            aria-current={isActive ? "page" : undefined}
            onClick={onClick}
            className={`p-4 pp-16 md:pp-20 text-white hover:underline decoration-brand cursor-pointer decoration-2 underline-offset-4 ${className}`}
        >
            {children}
        </Link>
    );
};

export default MLink;