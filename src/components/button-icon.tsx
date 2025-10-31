import type { ComponentProps } from "react";

import { Icon } from "./icon";

const buttonIconVariants = {
  style:
    "flex items-center justify-center outline-0 border-0 cursor-pointer group",
  size: {
    sm: "h-5 w-5",
  },
};

const buttonIconIconVariants = {
  style: "text-yellow group-hover:text-yellow-dark transition-colors",
};

type ButtonIconProps = Omit<ComponentProps<"button">, "size"> & {
  icon: ComponentProps<typeof Icon>["svg"];
  size?: keyof typeof buttonIconVariants.size;
};

export function ButtonIcon({
  icon,
  size = "sm",
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={`
        ${buttonIconVariants.style}
        ${buttonIconVariants.size[size]}
        ${className ? className : ""}
      `}
      {...props}
    >
      <Icon svg={icon} className={buttonIconIconVariants.style} />
    </button>
  );
}
