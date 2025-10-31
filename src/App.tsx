import CalendarBlank from "./assets/icons/calendar-blank.svg?react";
import CaretDown from "./assets/icons/caret-down.svg?react";
import CaretLeft from "./assets/icons/caret-left.svg?react";
import CaretRight from "./assets/icons/caret-right.svg?react";
import CloudSun from "./assets/icons/cloud-sun.svg?react";
import MoonStars from "./assets/icons/moon-stars.svg?react";
import SunHorizon from "./assets/icons/sun-horizon.svg?react";
import Trash from "./assets/icons/trash.svg?react";
import UserSquare from "./assets/icons/user-square.svg?react";
import { Button } from "./components/button";
import { ButtonIcon } from "./components/button-icon";
import { DatePicker } from "./components/date-picker";
import { Icon } from "./components/icon";
import { InputText } from "./components/input-text";

import { Text } from "./components/text";
import { TimeSelect } from "./components/time-select";

function App() {
  return (
    <div className="px-50">
      <div className="flex items-center gap-2">
        <Icon svg={CalendarBlank} className="text-gray-100 h-5 w-5" />
        <Icon svg={CaretDown} className="text-gray-100 h-5 w-5" />
        <Icon svg={CaretLeft} className="text-gray-100 h-5 w-5" />
        <Icon svg={CaretRight} className="text-gray-100 h-5 w-5" />
        <Icon svg={CloudSun} className="text-gray-100 h-5 w-5" />
        <Icon svg={MoonStars} className="text-gray-100 h-5 w-5" />
        <Icon svg={SunHorizon} className="text-gray-100 h-5 w-5" />
        <Icon svg={Trash} className="text-gray-100 h-5 w-5" />
        <Icon svg={UserSquare} className="text-gray-100 h-5 w-5" />
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-2">
        <Text as="h1" variant="title-lg">
          Título 01
        </Text>

        <Text as="h2" variant="title-md">
          Título 02
        </Text>

        <Text as="h3" variant="title-sm">
          Título 03
        </Text>

        <Text variant="text-md">Texto 01</Text>

        <Text variant="text-sm">Texto 02</Text>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-2">
        <Button>AGENDAR</Button>

        <Button disabled>AGENDAR</Button>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-2">
        <InputText
          id="input-client"
          icon={CalendarBlank}
          placeholder="Nome do cliente"
        />
      </div>

      <hr className="my-4" />

      <div className="flex gap-2">
        <ButtonIcon icon={Trash} />
      </div>

      <hr className="my-4" />

      <div className="flex gap-2">
        <TimeSelect>
          <Text>09:00</Text>
        </TimeSelect>

        <TimeSelect selected>
          <Text>10:00</Text>
        </TimeSelect>

        <TimeSelect disabled>
          <Text>11:00</Text>
        </TimeSelect>
      </div>

      <hr className="my-4" />

      <DatePicker />
    </div>
  );
}

export default App;
