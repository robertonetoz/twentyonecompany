import type { SVGProps } from "react";
import type { ModalityId } from "@/data/site";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 2.6a9.4 9.4 0 0 0-8 14.3L2.8 21.2l4.4-1.2A9.4 9.4 0 1 0 12 2.6Z" />
      <path
        d="M8.9 7.4c-.3 0-.6.1-.8.4-.4.4-.9 1-.9 2.1 0 1.2.8 2.3 1 2.5.1.2 1.7 2.7 4.2 3.7 2 .8 2.5.7 2.9.6.5-.1 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1-.1-.2-.2-.2-.5-.4l-1.7-.8c-.3-.1-.4-.1-.6.1l-.7.9c-.2.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.3-.8-.7-1.3-1.5-1.4-1.8-.2-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5l-.8-1.9c-.2-.4-.4-.4-.6-.4Z"
        fill="currentColor"
        stroke="none"
      />
    </Base>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </Base>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21.5s7-6.2 7-11.7a7 7 0 1 0-14 0c0 5.5 7 11.7 7 11.7Z" />
      <circle cx="12" cy="9.8" r="2.5" />
    </Base>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 8.5a2 2 0 0 1 2-2h2.2l1.5-2.3h6.6l1.5 2.3H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="13" r="3.6" />
    </Base>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </Base>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m9 5 7 7-7 7" />
    </Base>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 7h18M3 12h18M3 17h18" />
    </Base>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="m12 2.5 2.9 6.2 6.8.8-5 4.7 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.7 6.8-.8Z" />
    </svg>
  );
}

/** Fachada de loja, para o lugar da foto que ainda não chegou. */
export function FacadeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 20.5h18M4.5 20.5V9.5h15v11M2.5 9.5l2-5h15l2 5ZM9.5 20.5v-6h5v6" />
    </Base>
  );
}

export function DumbbellIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M8 12h8M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5" />
    </Base>
  );
}

/* Ícones das modalidades: traço branco que se desenha, com um único volume em laranja. */

const stroke = {
  fill: "none",
  stroke: "#fff",
  strokeWidth: 3.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  pathLength: 1,
} as const;

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

function Musculacao() {
  return (
    <g transform="rotate(-24 48 48)">
      <path className="traco" style={d(0)} {...stroke} d="M31 48h34" />
      <rect className="traco" style={d(1)} {...stroke} x="19" y="29" width="11" height="38" rx="3" />
      <rect className="traco" style={d(2)} {...stroke} x="66" y="29" width="11" height="38" rx="3" />
      <rect className="surge" style={d(4)} fill="#ff5a0a" x="7" y="37" width="8" height="22" rx="2.5" />
      <rect className="surge" style={d(5)} fill="#ff5a0a" x="81" y="37" width="8" height="22" rx="2.5" />
    </g>
  );
}

function FitDance() {
  return (
    <>
      <circle className="surge" style={d(0)} fill="#ff5a0a" cx="50" cy="17" r="7" />
      <path className="traco" style={d(1)} {...stroke} d="M49 29 45 54" />
      <path className="traco" style={d(2)} {...stroke} d="M49 32 64 24 71 10" />
      <path className="traco" style={d(3)} {...stroke} d="M48 33 33 41 23 33" />
      <path className="traco" style={d(4)} {...stroke} d="M45 54 59 66 56 86" />
      <path className="traco" style={d(5)} {...stroke} d="M45 54 33 68 18 66" />
      <path className="traco" style={d(7)} {...stroke} strokeWidth={2.5} d="M76 40c5 4 5 12 0 16M84 34c9 8 9 20 0 28" />
    </>
  );
}

function Pilates() {
  return (
    <>
      <path className="traco" style={d(0)} {...stroke} d="M10 80h76" />
      <circle className="surge" style={d(1)} fill="#ff5a0a" cx="21" cy="40" r="7" />
      <path className="traco" style={d(2)} {...stroke} d="M27 49 46 71" />
      <path className="traco" style={d(3)} {...stroke} d="M46 71 82 33" />
      <path className="traco" style={d(4)} {...stroke} d="M31 54 62 40" />
    </>
  );
}

function Bike() {
  return (
    <>
      <path className="traco" style={d(0)} {...stroke} d="M10 84h76" />
      <circle className="traco" style={d(1)} {...stroke} stroke="#ff5a0a" strokeWidth={5} cx="30" cy="60" r="17" />
      <circle className="surge" style={d(2)} fill="#fff" cx="30" cy="60" r="3.5" />
      <path className="traco" style={d(3)} {...stroke} d="M30 60 42 28" />
      <path className="traco" style={d(4)} {...stroke} d="M34 24h16c4 0 5 5 1 7" />
      <path className="traco" style={d(5)} {...stroke} d="M38 40 64 56 70 84" />
      <path className="traco" style={d(6)} {...stroke} d="M64 56 68 34M59 33h18" />
      <path className="traco" style={d(7)} {...stroke} d="M30 60h34M54 68l8 8" />
    </>
  );
}

function MuayThai() {
  return (
    <>
      <path
        className="traco"
        style={d(0)}
        {...stroke}
        d="M35 64V53c-8-1-14-7-14-15 0-6 4-11 10-11 2-9 10-15 21-15 13 0 23 9 23 22 0 10-4 17-10 21v9"
      />
      <path className="traco" style={d(3)} {...stroke} d="M31 27c6 1 10 6 10 12 0 5-2 9-6 11" />
      <path className="traco" style={d(4)} {...stroke} strokeWidth={2.5} d="M48 29c6-3 14-2 19 2" />
      <rect className="surge" style={d(5)} fill="#ff5a0a" x="32" y="66" width="36" height="19" rx="3" />
      <path className="traco" style={d(7)} {...stroke} stroke="#000" strokeWidth={2.5} d="M32 75.5h36" />
    </>
  );
}

const MODALITY_ICONS: Record<ModalityId, () => React.JSX.Element> = {
  musculacao: Musculacao,
  fitdance: FitDance,
  pilates: Pilates,
  bike: Bike,
  muaythai: MuayThai,
};

export function ModalityIcon({ id, ...props }: IconProps & { id: ModalityId }) {
  const Icon = MODALITY_ICONS[id];
  return (
    <svg viewBox="0 0 96 96" aria-hidden {...props}>
      <Icon />
    </svg>
  );
}
