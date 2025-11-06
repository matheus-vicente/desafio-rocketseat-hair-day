import { Logo } from "../core-components/logo";
import { SectionSchedule } from "../core-components/section-schedule";
import { SectionAppointment } from "../core-components/section-appointment";

export function PageHome() {
  return (
    <main className="p-3 mx-auto max-w-360 h-lvh relative flex gap-3">
      <Logo />

      <SectionAppointment />

      <SectionSchedule />
    </main>
  );
}
