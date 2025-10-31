import { createElement, type JSX, type ReactNode } from "react";

export const textVariants = {
  style: "font-sans",
  variant: {
    "text-sm": "text-sm/5 text-gray-300",
    "text-md": "text-md/6 text-gray-200",
    "title-sm": "text-sm/5 text-gray-300 font-bold",
    "title-md": "text-md/6 text-gray-200 font-bold",
    "title-lg": "text-[24px]/8 text-gray-100 font-bold",
  },
};

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: keyof typeof textVariants.variant;
  className?: string;
  children: ReactNode;
};

export function Text({
  as = "span",
  variant = "text-md",
  className,
  children,
}: TextProps) {
  return createElement(
    as,
    {
      className: `
      ${textVariants.style}
      ${textVariants.variant[variant]}
      ${className ? className : ""}
    `,
    },
    children
  );
}
