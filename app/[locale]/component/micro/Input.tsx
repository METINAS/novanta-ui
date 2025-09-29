"use client";

import * as React from "react";
import {
    TextField,
    Label,
    Input,
    TextArea,
    Text,
    Button as AriaButton,
    type TextFieldProps,
} from "react-aria-components";
import clsx from "clsx";

type Size = "sm" | "md" | "lg";
type Texture = "solid" | "soft" | "outline" | "ghost";

/** Local extension — we DO NOT forward `validationState` into <TextField/> */
export type MInputProps = Omit<TextFieldProps, "children" | "className"> & {
    size?: Size;
    texture?: Texture;
    label?: React.ReactNode;
    description?: React.ReactNode;

    /** Our own validation flag for styling & error text */
    validationState?: "valid" | "invalid";
    /** Optional error message to render under the field. */
    errorMessage?: React.ReactNode;

    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    clearable?: boolean;
    passwordToggle?: boolean;
    loading?: boolean;
    multiline?: boolean;
    className?: string;
    rows?: number;

    /** Controlled value & onChange (RAC TextField uses (value: string) => void) */
    value?: string;
    onChange?: (value: string) => void;

    /** Input type when not multiline (e.g., "text", "email", "password") */
    type?: React.ComponentProps<typeof Input>["type"];
};

const sizeStyles: Record<Size, { field: string; label: string; desc: string }> = {
    sm: { field: "h-9 text-sm px-3 gap-2 rounded-xl",   label: "text-sm mb-1",   desc: "text-xs mt-1" },
    md: { field: "h-11 text-base px-4 gap-2.5 rounded-2xl", label: "text-sm mb-1.5", desc: "text-xs mt-1.5" },
    lg: { field: "h-12 text-base px-4 gap-3 rounded-2xl",   label: "text-base mb-1.5", desc: "text-sm mt-1.5" },
};

function textureClass(texture: Texture) {
    switch (texture) {
        case "solid":
            return "bg-white text-gray-900 border border-gray-300 data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-orange-500 data-[invalid=true]:border-red-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700";
        case "soft":
            return "bg-orange-50 text-gray-900 border border-orange-200 data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-orange-500 data-[invalid=true]:border-red-500 dark:bg-orange-950/30 dark:text-gray-100 dark:border-orange-900/50";
        case "outline":
            return "bg-transparent text-gray-900 border border-gray-300 data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-orange-500 data-[invalid=true]:border-red-500 dark:text-gray-100 dark:border-gray-700";
        case "ghost":
        default:
            return "bg-transparent text-gray-900 border border-transparent hover:border-gray-300 data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-orange-500 data-[invalid=true]:border-red-500 dark:text-gray-100 dark:hover:border-gray-700";
    }
}

export function MInput({
                           size = "md",
                           texture = "solid",
                           label,
                           description,
                           validationState,         // <- ours; we won’t spread it into <TextField/>
                           errorMessage,
                           startIcon,
                           endIcon,
                           clearable,
                           passwordToggle,
                           loading,
                           multiline,
                           className,
                           type = "text",
                           isDisabled,
                           rows = 4,
                           value,
                           onChange,
                           ...props                // <- safe to spread; doesn’t include our local props
                       }: MInputProps) {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = !multiline && type === "password";
    const computedType: React.ComponentProps<typeof Input>["type"] =
        isPassword ? (showPassword ? "text" : "password") : type;

    const wrapper = clsx(
        "group/input relative inline-flex w-full items-center border transition",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizeStyles[size].field,
        textureClass(texture),
        "focus-within:border-orange-400",
        className
    );

    const fieldPaddingX = size === "sm" ? "pl-2.5 pr-2.5" : size === "md" ? "pl-3 pr-3" : "pl-3.5 pr-3.5";
    const leftPad = startIcon ? "pl-1" : "";
    const rightPad = endIcon || clearable || (passwordToggle && isPassword) || loading ? "pr-1" : "";
    const controlled = typeof value === "string";

    const invalid = validationState === "invalid" || (!!errorMessage && errorMessage !== "") || undefined;

    return (
        <TextField
            {...props}
            isDisabled={isDisabled}
            value={value}
            onChange={onChange}
            className="w-full"
        >
            {label && (
                <Label className={clsx("block font-medium text-gray-800 dark:text-gray-200", sizeStyles[size].label)}>
                    {label}
                    {props.isRequired && <span className="ml-1 text-red-600" aria-hidden>*</span>}
                </Label>
            )}

            <div className={wrapper} data-invalid={invalid} data-focus-visible="false">
                {startIcon && <span aria-hidden className="ml-1.5 inline-flex items-center">{startIcon}</span>}

                <div className={clsx("flex-1", fieldPaddingX, leftPad, rightPad)}>
                    {multiline ? (
                        <TextArea rows={rows} className="w-full bg-transparent outline-none placeholder:text-gray-400" />
                    ) : (
                        <Input type={computedType} className="w-full bg-transparent outline-none placeholder:text-gray-400" />
                    )}
                </div>

                {/* clear button (controlled mode) */}
                {clearable && controlled && value.length > 0 && (
                    <AriaButton
                        onPress={() => onChange?.("")}
                        aria-label="Clear"
                        className="mr-1.5 inline-flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-orange-500 dark:hover:bg-gray-800"
                    >
                        <span aria-hidden>×</span>
                    </AriaButton>
                )}

                {/* password toggle */}
                {passwordToggle && isPassword && (
                    <AriaButton
                        onPress={() => setShowPassword((s) => !s)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="mr-1.5 inline-flex size-5 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-orange-500 dark:hover:bg-gray-800"
                    >
                        <span aria-hidden className="text-xs">{showPassword ? "🙈" : "👁️"}</span>
                    </AriaButton>
                )}

                {loading && (
                    <span
                        aria-hidden
                        className="mr-1.5 inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent text-gray-500"
                    />
                )}

                {endIcon && <span aria-hidden className="mr-1.5 inline-flex items-center">{endIcon}</span>}
            </div>

            {description && (
                <Text slot="description" className={clsx("text-gray-600 dark:text-gray-300", sizeStyles[size].desc)}>
                    {description}
                </Text>
            )}

            {invalid && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                    {errorMessage || "Please correct this field."}
                </p>
            )}
        </TextField>
    );
}

export default MInput;