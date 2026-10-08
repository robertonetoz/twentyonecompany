import { units } from "@/data/site";
import { WhatsAppIcon } from "./icons";

export function Signup() {
  return (
    <section id="matricula" className="bg-borracha py-24 lg:py-32">
      <div className="wrap">
        <h2 className="titulo">Matricule-se pelo WhatsApp</h2>
        <p className="mt-5 max-w-[36rem] text-lg text-giz">
          Escolha a unidade e fale direto com a recepção. Eles passam os planos, os valores e a grade de
          aulas, e você já combina a primeira visita.
        </p>

        <ul className="mt-12">
          {units.map((unit) => (
            <li key={unit.id} className="border-b border-white/15 first:border-t">
              <a
                href={unit.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate grid grid-cols-1 items-center gap-x-8 gap-y-1 px-2 py-6 transition-colors duration-300 hover:text-black focus-visible:text-black sm:grid-cols-[auto_1fr_auto] sm:px-5 sm:py-7"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-laranja transition-transform duration-500 ease-rep group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                <span className="display text-[clamp(2rem,1rem+3.8vw,4rem)] [font-stretch:60%] sm:w-[2.6ch]">
                  U{unit.number}
                </span>
                <span>
                  <span className="display block text-[clamp(1.5rem,1rem+2.2vw,2.6rem)] [font-stretch:125%]">
                    {unit.name}
                  </span>
                  <span className="block text-giz transition-colors duration-300 group-hover:text-black group-focus-visible:text-black">
                    {unit.street}
                  </span>
                </span>
                <span className="mt-3 flex items-center gap-2.5 font-bold sm:mt-0">
                  <WhatsAppIcon className="size-6" />
                  {unit.phone}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
