import type { ComponentProps } from "react";

import { Text, textVariants } from "./text";

const buttonVariants = {
  style:
    "flex place-content-center border-2 border-transparent rounded-lg cursor-pointer transition",
  variant: {
    primary: "bg-yellow hover:border-yellow-light",
  },
  size: {
    lg: "py-4 w-80",
  },
  disabled: "bg-yellow-dark pointer-events-none",
};

const buttonTextVariants = {
  variant: {
    primary: "text-gray-900",
  },
};

type ButtonProps = Omit<ComponentProps<"button">, "size"> & {
  size?: keyof typeof buttonVariants.size;
  variant?: keyof typeof buttonVariants.variant;
  textVariant?: keyof typeof textVariants.variant;
};

export function Button({
  size = "lg",
  variant = "primary",
  textVariant = "title-sm",
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${buttonVariants.style}
        ${buttonVariants.size[size]}
        ${buttonVariants.variant[variant]}
        ${disabled && buttonVariants.disabled}
        ${className ? className : ""}
      `}
      {...props}
    >
      <Text
        variant={textVariant}
        className={`${buttonTextVariants.variant[variant]}`}
      >
        {children}
      </Text>
    </button>
  );
}
