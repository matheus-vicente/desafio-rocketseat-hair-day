import type { ComponentProps } from "react";
import { Icon } from "./icon";

const inputTextVariants = {
  style: "flex-1 outline-0 text-gray-200 placeholder:text-gray-400",
};

const inputTextLabelVariants = {
  style:
    "flex items-center gap-3 rounded-lg border outline-0 border-gray-500 has-focus-within:border-yellow-dark",
  size: {
    lg: "p-3 w-80",
  },
};

type InputTextProps = Omit<ComponentProps<"input">, "size" | "id"> & {
  id: string;
  icon: ComponentProps<typeof Icon>["svg"];
  size?: keyof typeof inputTextLabelVariants.size;
};

export function InputText({
  id,
  icon,
  size = "lg",
  className,
  ...props
}: InputTextProps) {
  return (
    <label
      htmlFor={id}
      className={`
        ${inputTextLabelVariants.style}
        ${inputTextLabelVariants.size[size]}
        ${className ? className : ""}
      `}
    >
      <Icon svg={icon} className="h-5 w-5 text-yellow" />
      <input
        id={id}
        type="text"
        placeholder="Nome do cliente"
        className={`
          ${inputTextVariants.style}
        `}
        {...props}
      />
    </label>
  );
}
