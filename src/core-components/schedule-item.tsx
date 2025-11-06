import Trash from "../assets/icons/trash.svg?react";

import { Text } from "../components/text";
import { ButtonIcon } from "../components/button-icon";

import type { Appointment } from "../models/appointment";
import { useAppointment } from "../hooks/appointment";

type ScheduleItemProps = {
  appointment: Appointment;
};

export function ScheduleItem({
  appointment: { id, time, client },
}: ScheduleItemProps) {
  const { deleteAppointment } = useAppointment();

  function handleDeleteAppointment() {
    deleteAppointment(id);
  }

  return (
    <div className="flex gap-5">
      <Text variant="title-md">{time}</Text>

      <Text className="flex-1">{client}</Text>

      <ButtonIcon
        icon={Trash}
        className="h-5 w-5"
        onClick={handleDeleteAppointment}
      />
    </div>
  );
}
