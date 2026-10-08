import Image from "next/image";
import { instagram, units } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Image
              src="/logo-twentyone.png"
              alt="Twenty One Company"
              width={1000}
              height={250}
              className="-ml-3 h-14 w-auto"
            />
            <p className="mt-3 max-w-[20rem] text-giz">O extraordinário é o básico bem feito todos os dias.</p>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold underline decoration-laranja decoration-2 underline-offset-4 hover:text-laranja"
            >
              {instagram.handle}
            </a>
          </div>

          {units.map((unit) => (
            <div key={unit.id}>
              <h3 className="font-display text-lg font-extrabold uppercase [font-stretch:125%]">{unit.name}</h3>
              <address className="mt-2 text-sm not-italic text-giz">
                {unit.street}
                <br />
                {unit.district}
              </address>
              <ul className="mt-3 space-y-1 text-sm">
                <li>
                  <a href={unit.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-laranja">
                    WhatsApp {unit.phone}
                  </a>
                </li>
                <li>
                  <a href={unit.maps} target="_blank" rel="noopener noreferrer" className="hover:text-laranja">
                    Abrir no Google Maps
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-aco">
          © 2026 Twenty One Company, Uberlândia, MG. Academia desde 2001.
        </p>
      </div>
    </footer>
  );
}
