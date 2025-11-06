import useLocalStorage from "use-local-storage";

import {
  APPOINTMET_STORAGE_KEY,
  type Appointment,
} from "../models/appointment";

type AppointmentPayload = {
  client: string;
  selectedTime: string;
  appointmentDate: string;
};

export function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Array<Appointment>>(
    APPOINTMET_STORAGE_KEY,
    []
  );

  function createAppointment(payload: AppointmentPayload) {
    setAppointments([
      ...appointments,
      {
        id: crypto.randomUUID(),
        client: payload.client,
        time: payload.selectedTime,
        appointmentDate: payload.appointmentDate,
      },
    ]);
  }

  function deleteAppointment(id: string) {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  }

  return { createAppointment, deleteAppointment };
}
