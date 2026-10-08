"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { instagram, type Unit } from "@/data/site";
import type { PhotoKind, UnitPhotos } from "@/lib/photos";
import { ChevronIcon, CloseIcon, InstagramIcon, WhatsAppIcon } from "./icons";

const KINDS: { id: PhotoKind; label: string }[] = [
  { id: "fachada", label: "Fachada" },
  { id: "aparelhos", label: "Aparelhos" },
];

type Props = {
  unit: Unit;
  photos: UnitPhotos;
  initialKind: PhotoKind;
  onClose: () => void;
};

export function Gallery({ unit, photos, initialKind, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [kind, setKind] = useState<PhotoKind>(initialKind);
  const [index, setIndex] = useState(0);

  const list = photos[kind];
  const current = list[index];
  const label = KINDS.find((item) => item.id === kind)!.label;

  useEffect(() => {
    const element = dialog.current;
    if (element && !element.open) element.showModal();
    return () => element?.close();
  }, []);

  const step = (delta: number) => setIndex((value) => (value + delta + list.length) % list.length);

  return (
    <dialog
      ref={dialog}
      aria-label={`Fotos da unidade ${unit.number}, ${unit.name}`}
      onClose={() => {
        // Só o fechamento nativo (Esc) chega aqui com o dialog fechado; o do cleanup do efeito é ignorado.
        if (!dialog.current?.open) onClose();
      }}
      onKeyDown={(event) => {
        if (list.length < 2) return;
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-black text-white"
    >
      <div className="flex h-full flex-col">
        <div className="wrap flex items-center justify-between gap-4 py-4">
          <p className="display text-xl [font-stretch:125%] sm:text-2xl">
            <span className="text-giz">Unidade {unit.number}</span> {unit.name}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="grid size-11 shrink-0 place-items-center bg-white text-black transition-colors hover:bg-laranja"
            aria-label="Fechar fotos"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <div className="wrap flex gap-6" role="tablist" aria-label="Tipo de foto">
          {KINDS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={kind === item.id}
              onClick={() => {
                setKind(item.id);
                setIndex(0);
              }}
              className={`border-b-4 pb-2 font-bold transition-colors ${
                kind === item.id ? "border-laranja text-white" : "border-transparent text-giz hover:text-white"
              }`}
            >
              {item.label}
              <span className="ml-2 font-normal text-giz">{photos[item.id].length}</span>
            </button>
          ))}
        </div>

        {current ? (
          <>
            <div className="relative mt-4 min-h-0 flex-1">
              <Image
                key={current}
                src={current}
                alt={`${label} da unidade ${unit.name}, foto ${index + 1} de ${list.length}`}
                fill
                sizes="100vw"
                className="troca object-contain"
              />
              {list.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center bg-black/70 hover:bg-laranja hover:text-black sm:left-6"
                  >
                    <ChevronIcon className="size-6 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Próxima foto"
                    className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center bg-black/70 hover:bg-laranja hover:text-black sm:right-6"
                  >
                    <ChevronIcon className="size-6" />
                  </button>
                </>
              )}
            </div>

            <ul className="wrap flex gap-2 overflow-x-auto py-4">
              {list.map((src, i) => (
                <li key={src} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ver foto ${i + 1}`}
                    aria-current={i === index}
                    className={`relative block h-16 w-24 overflow-hidden transition-opacity ${
                      i === index ? "outline-2 outline-laranja" : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="wrap flex flex-1 flex-col items-start justify-center pb-16">
            <p className="titulo max-w-[18ch]">
              As fotos de {label.toLowerCase()} desta unidade chegam em breve
            </p>
            <p className="mt-5 max-w-[32rem] text-giz">
              Enquanto isso, veja a unidade {unit.name} por dentro no Instagram ou peça fotos direto no
              WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 pl-2">
              <a href={instagram.url} target="_blank" rel="noopener noreferrer" className="btn">
                <InstagramIcon className="size-5" />
                Ver no Instagram
              </a>
              <a href={unit.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-contorno">
                <WhatsAppIcon className="size-5" />
                Pedir fotos no WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}
