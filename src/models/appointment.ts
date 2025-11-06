export const APPOINTMET_STORAGE_KEY = "appointments";

export const timeSchedule = {
  morning: ["09:00", "10:00", "11:00", "12:00"],
  afternoon: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  night: ["19:00", "20:00", "21:00"],
};

export type Appointment = {
  id: string;
  time: string;
  client: string;
  appointmentDate: string;
};
