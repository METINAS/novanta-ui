import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { syne } from "@/app/[locale]/fonts";
import clsx from "clsx";

type MLinkProps = {
    children: React.ReactNode;
    route: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    ariaLabel?: string;
    type: "nav" | "link" | "footer";
    icon?: React.ReactNode;
};

const MLink: React.FC<MLinkProps> = ({
                                         children,
                                         route,
                                         className = "",
                                         onClick,
                                         ariaLabel,
                                         type = "nav",
                                         icon,
                                     }) => {
    const pathname = usePathname();
    const isActive = pathname === route;

    const base = `${syne.className} p-4 font-bold pp-16 md:pp-20 hover:underline cursor-pointer decoration-2 underline-offset-4`;

    const texture =
        type === "nav"
            ? "text-white decoration-brand"
            : type === "footer"
                ? "text-black decoration-brand"
                : "text-emerald decoration-emerald";

    return (
        <Link
            href={route}
            aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
            aria-current={isActive ? "page" : undefined}
            onClick={onClick}
            className={clsx(base, texture, className)}
        >
            <div className="flex flex-row gap-2 items-center">
                {children}
                {icon && icon}
            </div>
        </Link>
    );
};

export default MLink;