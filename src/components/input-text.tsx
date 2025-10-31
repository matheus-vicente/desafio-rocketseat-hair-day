import type { ComponentProps } from "react";
import { Icon } from "./icon";

const inputTextVariants = {
  style: "flex-1 outline-0 text-gray-200 placeholder:text-gray-400",
};

const inputTextLabelVariants = {
  style:
    "flex items-center p-3 gap-3 rounded-lg border outline-0 border-gray-500 has-focus-within:border-yellow-dark",
};

type InputTextProps = Omit<ComponentProps<"input">, "size"> & {
  icon: ComponentProps<typeof Icon>["svg"];
};

export function InputText({ icon, className, ...props }: InputTextProps) {
  return (
    <div
      className={`
        ${inputTextLabelVariants.style}
        ${className ? className : ""}
      `}
    >
      <Icon svg={icon} className="h-5 w-5 text-yellow" />
      <input
        type="text"
        placeholder="Nome do cliente"
        className={`
          ${inputTextVariants.style}
        `}
        {...props}
      />
    </div>
  );
}
