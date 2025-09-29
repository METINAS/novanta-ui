import React, { ElementType, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type Variants = "regular" | "full";

type Props<E extends ElementType> = {
    as?: E;
    variant?: Variants;
    className?: string;
    backgroundImage?: string;
    children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<E>, "as" | "className" | "children">;

export default function MContainer<E extends ElementType = "div">({
                                                                      as,
                                                                      variant = "regular",
                                                                      className,
                                                                      backgroundImage,
                                                                      children,
                                                                      ...rest
                                                                  }: Props<E>) {
    const Tag = (as || "div") as ElementType;

    return (
        <Tag
            className={clsx(
                "m-container",
                variant === "regular" && "m-container--regular",
                variant === "full" && "m-container--full",
                className
            )}
            style={
                variant === "full" && backgroundImage
                    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
                    : undefined
            }
            {...rest}
        >
            {children}
        </Tag>
    );
}