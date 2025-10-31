import type { ComponentProps } from "react";

import { Text, textVariants } from "./text";

const buttonVariants = {
  style:
    "flex place-content-center py-4 border-2 border-transparent rounded-lg cursor-pointer transition",
  variant: {
    primary: "bg-yellow hover:border-yellow-light",
  },
  disabled: "bg-yellow-dark pointer-events-none",
};

const buttonTextVariants = {
  variant: {
    primary: "text-gray-900",
  },
};

type ButtonProps = Omit<ComponentProps<"button">, "size"> & {
  variant?: keyof typeof buttonVariants.variant;
  textVariant?: keyof typeof textVariants.variant;
};

export function Button({
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
