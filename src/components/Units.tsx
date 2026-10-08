"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { animate, useReducedMotion } from "motion/react";
import { units, type Unit, type UnitId } from "@/data/site";
import { getStatus, useSaoPauloNow } from "@/lib/hours";
import type { PhotoKind, UnitPhotos } from "@/lib/photos";
import { Gallery } from "./Gallery";
import { CameraIcon, DumbbellIcon, FacadeIcon, PinIcon, StarIcon, WhatsAppIcon } from "./icons";

const PLATE_HEIGHT = 86;
const PLATE_GAP = 6;
const STEP = PLATE_HEIGHT + PLATE_GAP;
const LIFT = 14;

function Tile({ src, kind, className }: { src?: string; kind: PhotoKind; className: string }) {
  const Icon = kind === "fachada" ? FacadeIcon : DumbbellIcon;
  return (
    <span className={`relative block overflow-hidden ${className}`}>
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, 60vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <span className="listras absolute inset-0 grid place-items-center text-aco">
          <span className="flex flex-col items-center gap-2 text-sm">
            <Icon className="size-8" />
            {kind === "fachada" ? "Fachada" : "Aparelhos"}
          </span>
        </span>
      )}
    </span>
  );
}

function Panel({ unit, photos, onOpenGallery }: { unit: Unit; photos: UnitPhotos; onOpenGallery: () => void }) {
  const now = useSaoPauloNow();
  const status = now ? getStatus(unit.schedule, now) : null;
  const total = photos.fachada.length + photos.aparelhos.length;

  return (
    <div
      role="tabpanel"
      id={`painel-${unit.id}`}
      aria-labelledby={`placa-${unit.id}`}
      className="troca @container"
    >
      <p className="text-giz">Unidade {unit.number}</p>
      <h3 className="display mt-1 text-[clamp(1.75rem,7.8cqw,4.25rem)] [font-stretch:150%]">{unit.name}</h3>

      <div className="mt-4 flex min-h-7 flex-wrap items-center gap-x-6 gap-y-2">
        {status && (
          <p className="flex items-center gap-2.5 font-semibold">
            <span className={`size-2.5 rounded-full ${status.open ? "pulso bg-laranja" : "bg-aco"}`} />
            {status.text}
          </p>
        )}
        {unit.rating && (
          <p className="flex items-center gap-1.5 text-giz">
            <StarIcon className="size-4 text-laranja" />
            <span className="font-semibold text-white">{unit.rating.score}</span> em {unit.rating.count} avaliações
            no Google
          </p>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        <div>
          <address className="not-italic">
            <span className="block text-xl font-semibold">{unit.street}</span>
            <span className="block text-giz">{unit.district}</span>
            <span className="block text-giz">CEP {unit.cep}</span>
          </address>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-4 pl-2">
            <a href={unit.whatsapp} target="_blank" rel="noopener noreferrer" className="btn">
              <WhatsAppIcon className="size-5" />
              Chamar no WhatsApp
            </a>
            <a href={unit.maps} target="_blank" rel="noopener noreferrer" className="btn btn-contorno">
              <PinIcon className="size-5" />
              Como chegar
            </a>
          </div>
          <p className="mt-4 text-sm text-giz">WhatsApp da unidade: {unit.phone}</p>
        </div>

        <dl className="self-start">
          {unit.hours.map((row) => {
            const today = now ? row.days.includes(now.day) : false;
            return (
              <div
                key={row.label}
                className={`flex items-baseline justify-between gap-4 border-b border-white/15 py-2.5 ${
                  today ? "text-white" : "text-giz"
                }`}
              >
                <dt className="flex items-center gap-2">
                  {row.label}
                  {today && <span className="bg-laranja px-1.5 text-xs font-bold text-black">hoje</span>}
                </dt>
                <dd className="font-display text-lg font-extrabold [font-stretch:110%]">{row.value}</dd>
              </div>
            );
          })}
          <div className="flex items-baseline justify-between gap-4 py-2.5 text-giz">
            <dt>Feriados</dt>
            {unit.holidays ? (
              <dd className="font-display text-lg font-extrabold [font-stretch:110%]">{unit.holidays}</dd>
            ) : (
              <dd className="text-sm">confirme pelo WhatsApp</dd>
            )}
          </div>
        </dl>
      </div>

      <button
        type="button"
        onClick={onOpenGallery}
        className="group relative mt-10 block w-full text-left"
        aria-haspopup="dialog"
      >
        <span aria-hidden className="grid h-56 grid-cols-3 grid-rows-2 gap-1.5 [clip-path:polygon(0_0,100%_0,100%_calc(100%-2.75rem),calc(100%-1.4rem)_100%,0_100%)] sm:h-72">
          <Tile src={photos.fachada[0]} kind="fachada" className="col-span-2 row-span-2" />
          <Tile src={photos.aparelhos[0]} kind="aparelhos" className="" />
          <Tile src={photos.aparelhos[1] ?? photos.fachada[1]} kind="aparelhos" className="" />
        </span>
        <span className="absolute bottom-0 left-0 flex items-center gap-3 bg-laranja py-3 pl-4 pr-6 font-bold text-black transition-colors [clip-path:polygon(0_0,100%_0,calc(100%-0.9rem)_100%,0_100%)] group-hover:bg-white">
          <CameraIcon className="size-5" />
          Clique para ver as fotos da unidade {unit.number}
        </span>
        <span className="absolute right-3 top-3 bg-black/80 px-2.5 py-1 text-sm text-giz">
          {total > 0 ? `${total} ${total === 1 ? "foto" : "fotos"}` : "Fotos em breve"}
        </span>
      </button>
    </div>
  );
}

export function Units({ photos }: { photos: Record<UnitId, UnitPhotos> }) {
  const [active, setActive] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const pin = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const plates = useRef<(HTMLButtonElement | null)[]>([]);
  const sequence = useRef(0);

  const unit = units[active];

  /* O pino sai, desce até a placa escolhida, entra, e a pilha acima dele faz uma repetição. */
  async function select(index: number) {
    if (index === active) return;
    setActive(index);

    const pinElement = pin.current;
    if (!pinElement) return;
    const y = index * STEP;
    if (reduceMotion) {
      animate(pinElement, { y }, { duration: 0 });
      return;
    }

    const id = ++sequence.current;
    await animate(pinElement, { x: 30 }, { duration: 0.12, ease: "easeOut" });
    if (id !== sequence.current) return;
    await animate(pinElement, { y }, { duration: 0.26, ease: [0.3, 0, 0.2, 1] });
    if (id !== sequence.current) return;
    await animate(pinElement, { x: 0 }, { duration: 0.12, ease: "easeIn" });
    if (id !== sequence.current) return;

    const lifted = [head.current, ...plates.current.slice(0, index + 1)].filter((el) => el !== null);
    const rep = { duration: 0.6, ease: "easeInOut" } as const;
    animate(lifted, { y: [0, -LIFT, 0] }, rep);
    animate(pinElement, { y: [y, y - LIFT, y] }, rep);
  }

  function onKeyDown(event: React.KeyboardEvent) {
    const delta = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (active + delta + units.length) % units.length;
    select(next);
    plates.current[next]?.focus();
  }

  return (
    <section id="unidades" className="py-24 lg:py-32">
      <div className="wrap">
        <h2 className="titulo">Escolha sua unidade</h2>
        <p className="mt-4 max-w-[36rem] text-lg text-giz">
          Crave o pino na placa da unidade para ver endereço, horários e fotos.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]">
          <div className="relative max-w-[26rem] select-none self-start pr-11 lg:sticky lg:top-28">
            <div aria-hidden className="aco-vertical absolute inset-y-0 left-[20%] w-2" />
            <div aria-hidden className="aco-vertical absolute inset-y-0 right-[calc(2.75rem+20%)] w-2" />
            <div aria-hidden className="aco relative h-3" />
            <div aria-hidden className="mx-auto h-9 w-1 bg-[#3a3a3a]" />

            <div ref={head} aria-hidden className="placa relative mb-1.5 grid h-8 place-items-center">
              <span className="font-display text-xs font-black text-aco [font-stretch:150%]">TWENTY ONE</span>
            </div>

            <div className="relative">
              <div
                role="tablist"
                aria-label="Unidades"
                aria-orientation="vertical"
                onKeyDown={onKeyDown}
                className="flex flex-col"
                style={{ gap: PLATE_GAP }}
              >
                {units.map((item, index) => {
                  const selected = index === active;
                  return (
                    <button
                      key={item.id}
                      ref={(element) => {
                        plates.current[index] = element;
                      }}
                      type="button"
                      role="tab"
                      id={`placa-${item.id}`}
                      aria-selected={selected}
                      aria-controls={`painel-${item.id}`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => select(index)}
                      className="placa relative flex items-center gap-4 pl-3.5 pr-14 text-left"
                      style={{ height: PLATE_HEIGHT }}
                    >
                      <span
                        className={`grid h-13 w-15 shrink-0 place-items-center font-display text-xl font-black transition-colors [font-stretch:125%] ${
                          selected ? "bg-laranja text-black" : "bg-black text-giz"
                        }`}
                      >
                        U{item.number}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block truncate font-display text-lg font-extrabold uppercase transition-[font-stretch,color] duration-300 ${
                            selected ? "text-white [font-stretch:125%]" : "text-giz [font-stretch:90%]"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span className="block truncate text-sm text-giz">{item.street}</span>
                      </span>
                      <span
                        aria-hidden
                        className="absolute right-3.5 top-1/2 size-5 -translate-y-1/2 rounded-full bg-black shadow-[inset_0_2px_4px_#000,0_1px_0_rgb(255_255_255/0.14)]"
                      />
                    </button>
                  );
                })}
              </div>

              <div
                ref={pin}
                aria-hidden
                className="pointer-events-none absolute -right-9 top-0 flex items-center"
                style={{ height: PLATE_HEIGHT }}
              >
                <span className="aco h-2.5 w-14 rounded-l-full" />
                <span className="-ml-1 size-7 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff9a52,#ff5a0a_45%,#b83200)] shadow-[0_2px_6px_rgb(0_0_0/0.8)]" />
              </div>
            </div>

            <div aria-hidden className="h-10" />
            <div aria-hidden className="aco relative h-3" />
          </div>

          <Panel key={unit.id} unit={unit} photos={photos[unit.id]} onOpenGallery={() => setGalleryOpen(true)} />
        </div>
      </div>

      {galleryOpen && (
        <Gallery
          unit={unit}
          photos={photos[unit.id]}
          initialKind={photos[unit.id].fachada.length === 0 && photos[unit.id].aparelhos.length > 0 ? "aparelhos" : "fachada"}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </section>
  );
}
