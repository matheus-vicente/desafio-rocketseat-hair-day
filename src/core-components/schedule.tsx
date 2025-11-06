import { useEffect, useState } from "react";

import CloudSun from "../assets/icons/cloud-sun.svg?react";
import MoonStars from "../assets/icons/moon-stars.svg?react";
import SunHorizon from "../assets/icons/sun-horizon.svg?react";

import { Icon } from "../components/icon";
import { Text } from "../components/text";
import { ScheduleItem } from "./schedule-item";

import { useAppointments } from "../hooks/appointments";
import { timeSchedule, type Appointment } from "../models/appointment";

type ScheduleOptions = {
  id: string;
  items: Array<Appointment>;
};

type ScheduleProps = {
  scheduleDate: string;
};

export function Schedule({ scheduleDate }: ScheduleProps) {
  const { appointmentsByDate } = useAppointments();

  const [appointments, setAppointments] = useState<Array<ScheduleOptions>>([]);

  useEffect(() => {
    const morningAppointments: ScheduleOptions = {
      id: "morning",
      items: [],
    };
    const afternoonAppointments: ScheduleOptions = {
      id: "afternoon",
      items: [],
    };
    const nightAppointments: ScheduleOptions = {
      id: "night",
      items: [],
    };

    appointmentsByDate(scheduleDate).forEach((appointment) => {
      if (timeSchedule.morning.includes(appointment.time)) {
        morningAppointments.items.push(appointment);
      }

      if (timeSchedule.afternoon.includes(appointment.time)) {
        afternoonAppointments.items.push(appointment);
      }

      if (timeSchedule.night.includes(appointment.time)) {
        nightAppointments.items.push(appointment);
      }
    });

    const data: Array<ScheduleOptions> = [
      morningAppointments,
      afternoonAppointments,
      nightAppointments,
    ];

    setAppointments(data);
  }, [scheduleDate]);

  return (
    <div className="flex flex-col gap-3">
      <div className="border border-gray-600 rounded-lg">
        <div className="flex items-center py-3 px-5 gap-3 border-0 border-b border-b-gray-600">
          <Icon svg={SunHorizon} className="h-5 w-5 text-yellow" />

          <Text variant="text-sm" className="flex-1">
            Manhã
          </Text>

          <Text variant="text-sm">09h as 12h</Text>
        </div>

        <div className="p-5 flex flex-col gap-3">
          {appointments.length > 0 && appointments[0].items.length > 0 ? (
            appointments[0].items.map((appointment) => (
              <ScheduleItem key={appointment.id} appointment={appointment} />
            ))
          ) : (
            <Text variant="text-sm">
              Não há agendamentos para este período.
            </Text>
          )}
        </div>
      </div>

      <div className="border border-gray-600 rounded-lg">
        <div className="flex items-center py-3 px-5 gap-3 border-0 border-b border-b-gray-600">
          <Icon svg={CloudSun} className="h-5 w-5 text-yellow" />

          <Text variant="text-sm" className="flex-1">
            Tarde
          </Text>

          <Text variant="text-sm">13h as 18h</Text>
        </div>

        <div className="p-5 flex flex-col gap-3">
          {appointments.length > 0 && appointments[1].items.length > 0 ? (
            appointments[1].items.map((appointment) => (
              <ScheduleItem key={appointment.id} appointment={appointment} />
            ))
          ) : (
            <Text variant="text-sm">
              Não há agendamentos para este período.
            </Text>
          )}
        </div>
      </div>

      <div className="border border-gray-600 rounded-lg">
        <div className="flex items-center py-3 px-5 gap-3 border-0 border-b border-b-gray-600">
          <Icon svg={MoonStars} className="h-5 w-5 text-yellow" />

          <Text variant="text-sm" className="flex-1">
            Noite
          </Text>

          <Text variant="text-sm">19h as 21h</Text>
        </div>

        <div className="p-5 flex flex-col gap-3">
          {appointments.length > 0 && appointments[2].items.length > 0 ? (
            appointments[2].items.map((appointment) => (
              <ScheduleItem key={appointment.id} appointment={appointment} />
            ))
          ) : (
            <Text variant="text-sm">
              Não há agendamentos para este período.
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}

// <Text variant="text-sm">Nenhum agendamento para este período</Text>
