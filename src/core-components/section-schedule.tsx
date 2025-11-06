import { useState, type ChangeEvent } from "react";

import { Text } from "../components/text";
import { DatePicker } from "../components/date-picker";

import { formatDate } from "../utils/formatDate";
// import { useAppointments } from "../hooks/appointments";
import { Schedule } from "./schedule";

export function SectionSchedule() {
  const [scheduleDate, setScheduleDate] = useState<string>(
    formatDate(new Date())
  );

  // const { appointmentsByDate } = useAppointments();

  function handleChandeScheduleDate(e: ChangeEvent<HTMLInputElement>) {
    setScheduleDate(e.target.value);
  }

  return (
    <section className="py-20 mx-auto w-full max-w-2xl flex flex-col gap-8">
      <header className="flex ">
        <div className="flex-1 flex flex-col gap-1">
          <Text as="h1" variant="title-lg">
            Sua Agenda
          </Text>

          <Text variant="text-sm">
            Consulte seus cortes de cabelos agendados por dia
          </Text>
        </div>

        <DatePicker value={scheduleDate} onChange={handleChandeScheduleDate} />
      </header>

      <Schedule scheduleDate={scheduleDate} />
    </section>
  );
}
