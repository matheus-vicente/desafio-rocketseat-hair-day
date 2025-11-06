import LogoImg from "../assets/images/logo.svg?react";

import { Icon } from "../components/icon";

export function Logo() {
  return (
    <div className="py-3 px-5 absolute top-0 left-0 bg-gray-600 rounded-br-xl">
      <Icon svg={LogoImg} />
    </div>
  );
}
