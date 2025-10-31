import Logo from "../assets/images/logo.svg?react";
import Trash from "../assets/icons/trash.svg?react";
import UserSquare from "../assets/icons/user-square.svg?react";
import SunHorizon from "../assets/icons/sun-horizon.svg?react";

import { Text } from "../components/text";
import { Icon } from "../components/icon";
import { Button } from "../components/button";
import { InputText } from "../components/input-text";
import { DatePicker } from "../components/date-picker";
import { TimeSelect } from "../components/time-select";
import { ButtonIcon } from "../components/button-icon";

export function PageHome() {
  return (
    <main className="p-3 mx-auto max-w-360 h-lvh relative flex gap-3">
      <div className="py-3 px-5 absolute top-0 left-0 bg-gray-600 rounded-br-xl">
        <Icon svg={Logo} />
      </div>

      {/* Section Make Appointment */}

      <section className="p-20 max-w-126 h-full bg-gray-700 flex flex-col justify-between rounded-xl">
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-3">
            <Text as="h2" variant="title-lg">
              Agende um atendimento
            </Text>

            <Text variant="text-sm">
              Selecione data, horário e informe o nome do cliente para criar o
              agendamento
            </Text>
          </header>

          <div className="flex flex-col gap-8">
            <label className="flex flex-col gap-2">
              <Text as="h3" variant="title-md">
                Data
              </Text>

              <DatePicker
                className="w-full"
                min={new Date().toISOString().split("T")[0]}
              />
            </label>

            <div className="flex flex-col gap-3">
              <Text as="h3" variant="title-md">
                Horários
              </Text>

              <div className="flex flex-col gap-1">
                <Text>Manhã</Text>

                <div className="grid grid-cols-4 gap-2">
                  <TimeSelect>
                    <Text>09:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>10:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>11:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>12:00</Text>
                  </TimeSelect>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Text>Tarde</Text>

                <div className="grid grid-cols-4 gap-2">
                  <TimeSelect>
                    <Text>13:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>14:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>15:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>16:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>17:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>18:00</Text>
                  </TimeSelect>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Text>Noite</Text>

                <div className="grid grid-cols-4 gap-2">
                  <TimeSelect>
                    <Text>19:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>20:00</Text>
                  </TimeSelect>
                  <TimeSelect>
                    <Text>21:00</Text>
                  </TimeSelect>
                </div>
              </div>
            </div>

            <label className="flex flex-col gap-2">
              <Text as="h3" variant="title-md">
                Cliente
              </Text>
              <InputText icon={UserSquare} />
            </label>
          </div>
        </div>

        <Button>AGENDAR</Button>
      </section>

      {/* Section Schedule */}

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

          <DatePicker />
        </header>

        {/* MAIN */}
        <div className="flex flex-col gap-3">
          {/* CARD */}
          <div className="border border-gray-600 rounded-lg">
            {/* HEADER CARD */}
            <div className="flex items-center py-3 px-5 gap-3 border-0 border-b border-b-gray-600">
              <Icon svg={SunHorizon} className="h-5 w-5 text-yellow" />

              <Text variant="text-sm" className="flex-1">
                Manhã
              </Text>

              <Text variant="text-sm">09h as 12h</Text>
            </div>

            {/* BODY CARD */}
            <div className="p-5 flex flex-col gap-3">
              {/* ITEM CARD */}
              <div className="flex gap-5">
                <Text variant="title-md">09:00</Text>

                <Text className="flex-1">Evelyn Liberato</Text>

                <ButtonIcon icon={Trash} className="h-5 w-5" />
              </div>

              <div className="flex gap-5">
                <Text variant="title-md">10:00</Text>

                <Text className="flex-1">Evelyn Liberato</Text>

                <ButtonIcon icon={Trash} className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="border border-gray-600 rounded-lg">
            {/* HEADER CARD */}
            <div className="flex items-center py-3 px-5 gap-3 border-0 border-b border-b-gray-600">
              <Icon svg={SunHorizon} className="h-5 w-5 text-yellow" />

              <Text variant="text-sm" className="flex-1">
                Tarde
              </Text>

              <Text variant="text-sm">09h as 12h</Text>
            </div>

            {/* BODY CARD */}
            <div className="p-5 flex flex-col gap-3">
              {/* ITEM CARD */}
              <div className="flex gap-5">
                <Text variant="title-md">09:00</Text>

                <Text className="flex-1">Evelyn Liberato</Text>

                <ButtonIcon icon={Trash} className="h-5 w-5" />
              </div>

              <div className="flex gap-5">
                <Text variant="title-md">10:00</Text>

                <Text className="flex-1">Evelyn Liberato</Text>

                <ButtonIcon icon={Trash} className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
