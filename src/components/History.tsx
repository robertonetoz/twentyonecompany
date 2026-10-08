"use client";

import { useRef } from "react";
import { MotionConfig, motion, useScroll, useTransform, type MotionValue } from "motion/react";

/* Uma anilha em 2001, três em 2026: uma por unidade. Elas entram na barra conforme a página rola. */
const RIGHT_PLATES = [
  { className: "h-44 bg-laranja sm:h-52", from: 0.2 },
  { className: "h-36 bg-white sm:h-44", from: 0.4 },
  { className: "h-28 bg-[#3a3a3a] sm:h-36", from: 0.6 },
];

function SidePlate({
  progress,
  from,
  direction,
  className,
}: {
  progress: MotionValue<number>;
  from: number;
  direction: 1 | -1;
  className: string;
}) {
  const x = useTransform(progress, [from, from + 0.4], [direction * 140, 0], { clamp: true });
  const opacity = useTransform(progress, [from, from + 0.15], [0, 1]);
  return (
    <motion.span
      style={{ x, opacity }}
      className={`block w-6 rounded-[5px] shadow-[inset_-3px_0_0_rgb(0_0_0/0.25),inset_3px_0_0_rgb(255_255_255/0.2)] sm:w-8 ${className}`}
    />
  );
}

export function History() {
  const bar = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: bar, offset: ["start 0.95", "start 0.3"] });

  return (
    <MotionConfig reducedMotion="user">
      <section id="historia" className="overflow-hidden py-24 lg:py-32">
        <div className="wrap">
          <h2 className="titulo max-w-[20ch]">Não começamos grandes. Começamos acreditando.</h2>

          <div ref={bar} aria-hidden className="relative mt-16 flex h-56 items-center sm:h-64">
            <div className="aco absolute inset-x-0 h-4 rounded-full" />
            <div className="relative flex w-full items-center">
              <span className="w-[7%] shrink-0" />
              <SidePlate progress={scrollYProgress} from={0.1} direction={-1} className="h-44 bg-laranja sm:h-52" />
              <span className="aco ml-1 block h-10 w-3 shrink-0 rounded-sm" />
              <span className="recartilhado block h-4 flex-1" />
              <span className="aco mr-1 block h-10 w-3 shrink-0 rounded-sm" />
              <span className="flex items-center gap-1">
                {RIGHT_PLATES.map((plate) => (
                  <SidePlate
                    key={plate.from}
                    progress={scrollYProgress}
                    from={plate.from}
                    direction={1}
                    className={plate.className}
                  />
                ))}
              </span>
              <span className="w-[7%] shrink-0" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1fr_1.2fr_1fr]">
            <div>
              <p className="display text-[clamp(2.75rem,1.5rem+5vw,5.5rem)] [font-stretch:60%]">2001</p>
              <p className="mt-2 max-w-[17rem] text-giz">Uma academia pequena e uma aposta.</p>
            </div>

            <div className="order-last col-span-2 lg:order-none lg:col-span-1 lg:pt-3 lg:text-center">
              <p className="display text-2xl [font-stretch:150%] sm:text-3xl">25 anos de história</p>
              <blockquote className="mt-4 text-xl text-giz lg:mx-auto lg:max-w-[24rem]">
                Algumas academias abrem portas. Outras constroem legados.
              </blockquote>
            </div>

            <div className="text-right">
              <p className="display text-[clamp(2.75rem,1.5rem+5vw,5.5rem)] text-laranja [font-stretch:60%]">2026</p>
              <p className="ml-auto mt-2 max-w-[19rem] text-giz">
                Três unidades em Uberlândia e mais de 18 mil pessoas acompanhando no Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
