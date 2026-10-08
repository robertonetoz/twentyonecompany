"use client";

import { MotionConfig, motion, useScroll, useTransform } from "motion/react";
import { units } from "@/data/site";
import { getStatus, useSaoPauloNow } from "@/lib/hours";
import { Plate } from "./Plate";

/* --k é o tamanho da fonte em % da largura do cartaz, medido para cada linha preencher a coluna. */
const LINES = [
  { text: "O básico", stretch: "150%", k: 13.1, tall: false, color: "text-white" },
  { text: "bem feito", stretch: "50%", k: 36.7, tall: true, color: "text-laranja" },
  { text: "gera resultado.", stretch: "100%", k: 10.5, tall: false, color: "text-white" },
];

function UnitsNow() {
  const now = useSaoPauloNow();

  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-3 border-t border-white/15 pt-5 sm:grid-cols-3">
      {units.map((unit) => {
        const status = now ? getStatus(unit.schedule, now) : null;
        return (
          <li key={unit.id}>
            <a href="#unidades" className="group block">
              <span className="font-display text-lg font-extrabold uppercase [font-stretch:125%] group-hover:text-laranja">
                {unit.name}
              </span>
              <span className="mt-0.5 flex min-h-6 items-center gap-2 text-sm text-giz">
                {status && (
                  <>
                    <span
                      className={`size-2 shrink-0 rounded-full ${status.open ? "pulso bg-laranja" : "bg-aco"}`}
                    />
                    {status.text}
                  </>
                )}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1400], [0, 150]);

  return (
    <MotionConfig reducedMotion="user">
      <section id="topo" className="relative flex min-h-svh flex-col overflow-hidden pt-18">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[46vw] bottom-[9rem] size-[112vw] sm:-right-[30vw] sm:size-[84vw] lg:-right-[14vw] lg:bottom-auto lg:top-1/2 lg:size-[min(96vh,58vw)] lg:-translate-y-1/2"
        >
          <div className="rola relative size-full">
            <motion.div style={{ rotate }} className="size-full">
              <Plate />
            </motion.div>
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_200deg,transparent_0_16%,rgb(255_255_255/0.13)_23%,transparent_31%_64%,rgb(255_255_255/0.07)_71%,transparent_79%)] mix-blend-screen" />
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#000_36%,rgb(0_0_0/0.74)_56%,rgb(0_0_0/0.6)_82%,#000_100%)] lg:bg-[linear-gradient(90deg,#000_34%,transparent_62%)]"
        />

        <div className="wrap relative flex flex-1 flex-col justify-between gap-12 pb-8 pt-10 lg:pt-14">
          <div className="lg:w-[56%]">
            <h1 className="cartaz display">
              {LINES.map((line, index) => (
                <span
                  key={line.text}
                  className={`cartaz-linha ${line.tall ? "cartaz-linha-alta leading-[0.86]" : "leading-[0.98]"} ${line.color}`}
                  style={{ "--k": line.k, "--i": index, fontStretch: line.stretch } as React.CSSProperties}
                >
                  {line.text}
                </span>
              ))}
            </h1>

            <p className="mt-7 max-w-[34rem] text-lg text-giz">
              Academia em Uberlândia desde 2001. Musculação, Fit Dance, Pilates, bike e Muay Thai em três
              unidades, com instrutor por perto do primeiro treino em diante.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 pl-2">
              <a href="#matricula" className="btn">
                Quero me matricular
              </a>
              <a href="#unidades" className="btn btn-contorno">
                Conhecer as unidades
              </a>
            </div>
          </div>

          <UnitsNow />
        </div>
      </section>
    </MotionConfig>
  );
}
