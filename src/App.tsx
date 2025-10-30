import CalendarBlank from "./assets/icons/calendar-blank.svg?react";
import CaretDown from "./assets/icons/caret-down.svg?react";
import CaretLeft from "./assets/icons/caret-left.svg?react";
import CaretRight from "./assets/icons/caret-right.svg?react";
import CloudSun from "./assets/icons/cloud-sun.svg?react";
import MoonStars from "./assets/icons/moon-stars.svg?react";
import SunHorizon from "./assets/icons/sun-horizon.svg?react";
import Trash from "./assets/icons/trash.svg?react";
import UserSquare from "./assets/icons/user-square.svg?react";

function App() {
  return (
    <>
      <div className="flex items-center gap-2">
        <CalendarBlank className="text-gray-100 h-5 w-5" />
        <CaretDown className="text-gray-100 h-5 w-5" />
        <CaretLeft className="text-gray-100 h-5 w-5" />
        <CaretRight className="text-gray-100 h-5 w-5" />
        <CloudSun className="text-gray-100 h-5 w-5" />
        <MoonStars className="text-gray-100 h-5 w-5" />
        <SunHorizon className="text-gray-100 h-5 w-5" />
        <Trash className="text-gray-100 h-5 w-5" />
        <UserSquare className="text-gray-100 h-5 w-5" />
      </div>
    </>
  );
}

export default App;
