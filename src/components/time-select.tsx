import type { ComponentProps } from "react";

const timeSelectVariants = {
  style: "w-20 py-2 flex place-content-center border rounded-lg transition",
  variant: {
    default: "cursor-pointer bg-gray-600 border-gray-500 hover:bg-gray-500",
    selected: "cursor-pointer bg-gray-600 border-yellow hover:bg-gray-500",
    disabled: "pointer-events-none bg-transparent border-gray-500",
  },
};

type TimeSelectType = ComponentProps<"input"> & {
  selected?: boolean;
};

export function TimeSelect({
  selected = false,
  disabled = false,
  className,
  children,
  ...props
}: TimeSelectType) {
  return (
    <label
      className={`
      ${timeSelectVariants.style}
      ${
        selected
          ? timeSelectVariants.variant.selected
          : timeSelectVariants.variant.default
      }
      ${
        disabled
          ? timeSelectVariants.variant.disabled
          : timeSelectVariants.variant.default
      }
      ${className ? className : ""}
    `}
    >
      {children}
      <input type="radio" hidden {...props} />
    </label>
  );
}
