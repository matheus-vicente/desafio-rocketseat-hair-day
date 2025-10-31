import type { ComponentProps, FC } from "react";

type IconProps = ComponentProps<"svg"> & {
  svg: FC<ComponentProps<"svg">>;
};

export function Icon({ svg: SvgComponent, className, ...props }: IconProps) {
  return <SvgComponent className={className ? className : ""} {...props} />;
}
