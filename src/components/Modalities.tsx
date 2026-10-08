"use client";

import { useState } from "react";
import { modalities } from "@/data/site";
import { ModalityIcon } from "./icons";

export function Modalities() {
  const [active, setActive] = useState(0);
  const current = modalities[active];

  return (
    <section id="modalidades" className="bg-borracha py-24 lg:py-32">
      <div className="wrap">
        <h2 className="titulo">Cinco jeitos de treinar</h2>

        <div className="mt-12 grid grid-cols-1 gap-x-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <ul className="@container">
            {modalities.map((modality, index) => {
              const selected = index === active;
              return (
                <li key={modality.id} className="border-b border-white/15 first:border-t">
                  <button
                    type="button"
                    aria-expanded={selected}
                    aria-controls={`modalidade-${modality.id}`}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className="flex w-full items-center gap-4 py-4 text-left lg:py-5"
                  >
                    <span
                      className={`h-[0.62em] shrink-0 -skew-x-[14deg] bg-laranja text-[clamp(1.5rem,9.2cqw,5rem)] transition-[width,margin] duration-300 ease-rep ${
                        selected ? "w-[0.3em]" : "-mr-4 w-0"
                      }`}
                    />
                    <span
                      className={`display whitespace-nowrap text-[clamp(1.5rem,9.2cqw,5rem)] transition-[font-stretch,color] duration-500 ease-rep ${
                        selected ? "text-white [font-stretch:115%]" : "text-aco [font-stretch:62%]"
                      }`}
                    >
                      {modality.name}
                    </span>
                  </button>

                  {/* No celular a descrição abre embaixo da linha; no desktop ela vai para o painel ao lado. */}
                  <div
                    id={`modalidade-${modality.id}`}
                    hidden={!selected}
                    className="flex items-start gap-5 pb-7 lg:hidden"
                  >
                    <ModalityIcon id={modality.id} className="size-20 shrink-0" />
                    <p className="text-giz">{modality.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <div key={current.id} className="sticky top-32" aria-live="polite">
              <ModalityIcon id={current.id} className="size-44" />
              <p className="mt-8 max-w-[26rem] text-xl">{current.text}</p>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[40rem] text-giz">
          As aulas e os horários de cada modalidade mudam de uma unidade para outra. Confirme a grade no
          WhatsApp da sua unidade antes de vir.
        </p>
      </div>
    </section>
  );
}
