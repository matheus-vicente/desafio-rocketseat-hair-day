import { useState, type ChangeEvent, type FormEvent } from "react";

import UserSquare from "../assets/icons/user-square.svg?react";

import { Text } from "../components/text";
import { Button } from "../components/button";
import { InputText } from "../components/input-text";
import { DatePicker } from "../components/date-picker";
import { TimeSelect } from "../components/time-select";
import { HeaderSectionAppointment } from "./header-section-appointment";

import { formatDate } from "../utils/formatDate";
import { timeSchedule } from "../models/appointment";
import { useAppointment } from "../hooks/appointment";
import { useAppointments } from "../hooks/appointments";

export function SectionAppointment() {
  const [client, setClient] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointmentDate, setAppointmentDate] = useState<string>(
    formatDate(new Date())
  );

  const { createAppointment } = useAppointment();
  const { timesByDate } = useAppointments();

  function handleDisableTimeSelect(time: string) {
    const today = new Date();

    if (appointmentDate === formatDate(today)) {
      return today.getHours().toString() + ":00" >= time;
    }

    return timesByDate(appointmentDate).includes(time);
  }

  function handleChangeAppointmentDate(e: ChangeEvent<HTMLInputElement>) {
    setAppointmentDate(e.target.value);
  }

  function handleChangeSelectedTime(
    e: ChangeEvent<HTMLInputElement>,
    time: string
  ) {
    setSelectedTime(time);
  }

  function handleChangeClient(e: ChangeEvent<HTMLInputElement>) {
    setClient(e.target.value);
  }

  function handleDisableSubmitButton() {
    if (!client || !selectedTime) return true;

    return false;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log({
      client,
      selectedTime,
      appointmentDate: appointmentDate,
    });

    createAppointment({
      client,
      selectedTime,
      appointmentDate: appointmentDate,
    });

    setClient("");
    setSelectedTime("");
    setAppointmentDate(formatDate(new Date()));
  }

  return (
    <section className="p-20 max-w-126 h-full bg-gray-700 flex flex-col gap-6 rounded-xl">
      <HeaderSectionAppointment />

      <form
        className="h-full flex flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-8">
          <label className="flex flex-col gap-2">
            <Text as="h3" variant="title-md">
              Data
            </Text>

            <DatePicker
              className="w-full"
              min={formatDate(new Date())}
              value={appointmentDate}
              onChange={handleChangeAppointmentDate}
            />
          </label>

          <div className="flex flex-col gap-3">
            <Text as="h3" variant="title-md">
              Horários
            </Text>

            <div className="flex flex-col gap-1">
              <Text>Manhã</Text>

              <div className="grid grid-cols-4 gap-2">
                {timeSchedule.morning.map((time) => (
                  <TimeSelect
                    key={time}
                    name="time-group"
                    selected={selectedTime === time}
                    disabled={handleDisableTimeSelect(time)}
                    onChange={(e) => handleChangeSelectedTime(e, time)}
                  >
                    <Text>{time}</Text>
                  </TimeSelect>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Text>Tarde</Text>

              <div className="grid grid-cols-4 gap-2">
                {timeSchedule.afternoon.map((time) => (
                  <TimeSelect
                    key={time}
                    name="time-group"
                    selected={selectedTime === time}
                    disabled={handleDisableTimeSelect(time)}
                    onChange={(e) => handleChangeSelectedTime(e, time)}
                  >
                    <Text>{time}</Text>
                  </TimeSelect>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Text>Noite</Text>

              <div className="grid grid-cols-4 gap-2">
                {timeSchedule.night.map((time) => (
                  <TimeSelect
                    key={time}
                    name="time-group"
                    selected={selectedTime === time}
                    disabled={handleDisableTimeSelect(time)}
                    onChange={(e) => handleChangeSelectedTime(e, time)}
                  >
                    <Text>{time}</Text>
                  </TimeSelect>
                ))}
              </div>
            </div>
          </div>

          <label className="flex flex-col gap-2">
            <Text as="h3" variant="title-md">
              Cliente
            </Text>
            <InputText
              icon={UserSquare}
              value={client}
              onChange={handleChangeClient}
            />
          </label>
        </div>

        <Button type="submit" disabled={handleDisableSubmitButton()}>
          AGENDAR
        </Button>
      </form>
    </section>
  );
}
