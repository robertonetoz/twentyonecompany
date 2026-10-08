import { useSyncExternalStore } from "react";
import type { Schedule } from "@/data/site";

const DAY_NAMES = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const WEEKDAY_INDEX: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export type Now = { day: number; minutes: number };

function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h}h${String(m).padStart(2, "0")}` : `${h}h`;
}

/** Dia da semana e minutos do dia no horário de Uberlândia, onde quer que o visitante esteja. */
function saoPauloNow(epochMinute: number): Now {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(epochMinute * 60_000));
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    day: WEEKDAY_INDEX[get("weekday")] ?? 0,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

export function getStatus(schedule: Schedule, now: Now): { open: boolean; text: string } {
  const today = schedule[now.day];
  if (today && now.minutes >= today[0] && now.minutes < today[1]) {
    return { open: true, text: `Aberta agora, fecha às ${formatTime(today[1])}` };
  }
  if (today && now.minutes < today[0]) {
    return { open: false, text: `Fechada agora, abre hoje às ${formatTime(today[0])}` };
  }
  for (let offset = 1; offset <= 7; offset++) {
    const day = (now.day + offset) % 7;
    const slot = schedule[day];
    if (!slot) continue;
    const when = offset === 1 ? "amanhã" : DAY_NAMES[day];
    return { open: false, text: `Fechada agora, abre ${when} às ${formatTime(slot[0])}` };
  }
  return { open: false, text: "Fechada agora" };
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null;

/** `null` no servidor e na hidratação; depois, a hora de Uberlândia atualizada a cada minuto. */
export function useSaoPauloNow(): Now | null {
  const minute = useSyncExternalStore<number | null>(subscribe, getMinute, getServerMinute);
  return minute === null ? null : saoPauloNow(minute);
}
