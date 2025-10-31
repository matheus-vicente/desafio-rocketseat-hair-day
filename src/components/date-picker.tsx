import { useRef } from "react";

import CaretDown from "../assets/icons/caret-down.svg?react";
import CalendarBlank from "../assets/icons/calendar-blank.svg?react";

import { Icon } from "./icon";

const datePickerVariants = {
  style:
    "cursor-pointer flex items-center gap-2 border border-gray-500 p-3 rounded-lg",
};

const datePickerInputVariant = {
  style:
    "flex-1 outline-0 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden",
};

export function DatePicker() {
  const dateRef = useRef<HTMLInputElement>(null);

  function openDatePicker() {
    if (dateRef.current && typeof dateRef.current.showPicker === "function") {
      dateRef.current.showPicker();
    } else {
      dateRef.current?.focus();
    }
  }

  return (
    <button className={datePickerVariants.style} onClick={openDatePicker}>
      <Icon svg={CalendarBlank} className="w-5 y-5 text-yellow" />
      <input
        type="date"
        ref={dateRef}
        className={datePickerInputVariant.style}
      />
      <Icon svg={CaretDown} className="w-5 y-5" />
    </button>
  );
}
