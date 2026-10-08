"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

const LINKS = [
  { href: "#unidades", label: "Unidades" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#historia", label: "História" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#instagram", label: "Instagram" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-laranja focus:px-4 focus:py-2 focus:font-bold focus:text-black"
      >
        Pular para o conteúdo
      </a>

      <div className="wrap flex h-18 items-center justify-between gap-3 sm:gap-6">
        <a href="#topo" className="min-w-0 sm:shrink-0" aria-label="Twenty One Company, voltar ao topo">
          <Image
            src="/logo-twentyone.png"
            alt="Twenty One Company"
            width={1000}
            height={250}
            priority
            className="h-8 w-auto max-w-full object-contain object-left sm:h-12"
          />
        </a>

        <nav aria-label="Seções do site" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem] font-semibold">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-giz transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <a href="#matricula" className="btn min-h-11! px-4! text-sm sm:px-5! sm:text-[0.95rem]">
            Matricule-se
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movel" aria-label="Seções do site" className="border-t border-white/10 lg:hidden">
          <ul className="wrap py-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display block py-3 text-2xl [font-stretch:125%]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
