import React, {ElementType, ComponentPropsWithoutRef} from "react";
import clsx from "clsx";

type Variants = "regular" | "full";
type XPaddings = {
    left: number;
    right: number;
};

type Props<E extends ElementType> = {
    as?: E;
    variant?: Variants;
    className?: string;
    backgroundImage?: string;
    children?: React.ReactNode;
    paddings?: XPaddings;
} & Omit<ComponentPropsWithoutRef<E>, "as" | "className" | "children">;

export default function MContainer<E extends ElementType = "div">({
                                                                      as,
                                                                      variant = "regular",
                                                                      className,
                                                                      backgroundImage,
                                                                      children,
                                                                      paddings = {
                                                                          left: 0,
                                                                          right: 0,
                                                                      },
                                                                      ...rest
                                                                  }: Props<E>) {
    const Tag = (as || "div") as ElementType;

    return (
        <Tag
            className={clsx(paddings?.left === 0 && paddings?.right === 0 ? "m-container" : `m-container-custom-pX pl-${paddings.left} pr-${paddings.right}`,
                variant === "regular" && "m-container--regular",
                variant === "full" && "m-container--full",
                className
            )}
            style={
                variant === "full" && backgroundImage
                    ? {
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }
                    : undefined
            }
            {...rest}
        >
            {children}
        </Tag>
    );
}