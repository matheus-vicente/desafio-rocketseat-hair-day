import useLocalStorage from "use-local-storage";

import {
  APPOINTMET_STORAGE_KEY,
  type Appointment,
} from "../models/appointment";

export function useAppointments() {
  const [appointments] = useLocalStorage<Array<Appointment>>(
    APPOINTMET_STORAGE_KEY,
    []
  );

  function appointmentsByDate(date: string) {
    return appointments.filter(
      (appointment) => appointment.appointmentDate === date
    );
  }

  function timesByDate(date: string) {
    return appointmentsByDate(date).map((appointment) => appointment.time);
  }

  return {
    appointments,
    timesByDate,
    appointmentsByDate,
  };
}
