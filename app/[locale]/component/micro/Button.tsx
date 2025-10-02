"use client";

import * as React from "react";
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";
import clsx from "clsx";
import {kanitBold, syne} from "@/app/[locale]/fonts";

type Texture = "solid" | "soft" | "outline" | "ghost";
type Variant = "brand" | "emerald"; // brand = primary, emerald = secondary
type Size = "sm" | "md" | "lg" | "xl";

export type MButtonProps = Omit<AriaButtonProps, "className" | "children"> & {
    children?: React.ReactNode;
    texture?: Texture;
    variant?: Variant;
    size?: Size;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loading?: boolean;
    className?: string;
    xlLabel?: string;
};

const base =
    "inline-flex items-center justify-center gap-4 font-medium transition " +
    "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "ring-offset-white dark:ring-offset-black";

const sizeClasses: Record<Size, string> = {
    sm: "text-sm h-9 px-3",
    md: "text-base h-11 px-4",
    lg: "text-base h-12 px-5",
    xl: "text-lg h-20 px-4",
};

function textureClasses(texture: Texture, variant: Variant) {
    const isBrand = variant === "brand";

    const bg      = isBrand ? "bg-[var(--color-brand)]"             : "bg-[var(--color-emerald)]";
    const bgHov   = isBrand ? "hover:bg-[var(--color-brand-hover)]" : "hover:bg-[var(--color-emerald-hover)]";
    const bgAct   = isBrand ? "active:bg-[var(--color-brand-pressed)]" : "active:bg-[var(--color-emerald-pressed)]";
    const bgDis   = isBrand ? "disabled:bg-[var(--color-brand-disabled)]" : "disabled:bg-[var(--color-emerald-disabled)]";
    const ring    = isBrand ? "focus-visible:ring-[var(--color-brand)]" : "focus-visible:ring-[var(--color-emerald)]";

    const text    = isBrand ? "text-[var(--color-brand)]"           : "text-[var(--color-emerald)]";
    const textDis = isBrand ? "disabled:text-[var(--color-brand-disabled)]" : "disabled:text-[var(--color-emerald-disabled)]";

    const border  = isBrand ? "border-[color:var(--color-brand)]"   : "border-[color:var(--color-emerald)]";
    const borderDis = isBrand ? "disabled:border-[color:var(--color-brand-disabled)]" : "disabled:border-[color:var(--color-emerald-disabled)]";

    const hovSoft = isBrand ? "hover:bg-[var(--color-brand-hover)]/10" : "hover:bg-[var(--color-emerald-hover)]/10";
    const actSoft = isBrand ? "active:bg-[var(--color-brand-pressed)]/10" : "active:bg-[var(--color-emerald-pressed)]/10";

    switch (texture) {
        case "solid":
            return clsx(bg, "text-white", bgHov, bgAct, bgDis, ring);

        case "soft":
            return clsx(
                isBrand ? "bg-[var(--color-brand)]/10" : "bg-[var(--color-emerald)]/10",
                text,
                hovSoft,
                actSoft,
                ring
            );

        case "outline":
            return clsx(
                "bg-transparent border",
                text,
                border,
                hovSoft,
                actSoft,
                textDis,
                borderDis,
                ring
            );

        case "ghost":
        default:
            return clsx("bg-transparent", text, hovSoft, actSoft, textDis, ring);
    }
}

export function MButton({
                            children,
                            leftIcon,
                            rightIcon,
                            texture = "solid",
                            variant = "brand",
                            size = "md",
                            loading = false,
                            className,
                            isDisabled,
                            xlLabel,
                            ...ariaProps
                        }: MButtonProps) {
    const disabled = isDisabled || loading;

    return (
        <AriaButton
            {...ariaProps}
            isDisabled={disabled}
            className={clsx(base, sizeClasses[size], textureClasses(texture, variant), className)}
        >
            {leftIcon && (
                <span aria-hidden className={clsx("inline-flex", size !== "xl" ? "text-[1.05em]" : "text-[2em]")}>
                    {leftIcon}
                </span>
            )}

            <span className={`${syne.className} font-bold inline-flex items-center`}>
                {loading && (
                    <span
                        aria-hidden
                        className="mr-2 inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                    />
                )}
                {xlLabel ? (
                    <div className="flex flex-col gap-1 items-start">
                        <p className="text-xs">{xlLabel}</p>
                        {children}
                    </div>
                ) : (
                    <>
                        {children}
                    </>
                )}
            </span>

            {rightIcon && (
                <span aria-hidden className={clsx("inline-flex", size !== "xl" ? "text-[1.05em]" : "text-[1.4em]")}>
                    {rightIcon}
                </span>
            )}
        </AriaButton>
    );
}

export default MButton;