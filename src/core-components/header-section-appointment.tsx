import { Text } from "../components/text";

export function HeaderSectionAppointment() {
  return (
    <header className="flex flex-col gap-3">
      <Text as="h2" variant="title-lg">
        Agende um atendimento
      </Text>

      <Text variant="text-sm">
        Selecione data, horário e informe o nome do cliente para criar o
        agendamento
      </Text>
    </header>
  );
}
