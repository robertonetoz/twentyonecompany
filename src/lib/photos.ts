import fs from "node:fs";
import path from "node:path";
import { units, type UnitId } from "@/data/site";

export type UnitPhotos = { fachada: string[]; aparelhos: string[] };
export type PhotoKind = keyof UnitPhotos;

const IMAGE = /\.(jpe?g|png|webp|avif)$/i;

function list(unit: UnitId, kind: PhotoKind) {
  const dir = path.join(process.cwd(), "public", "unidades", unit, kind);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/unidades/${unit}/${kind}/${file}`);
  } catch {
    return [];
  }
}

/**
 * Lê as fotos direto das pastas public/unidades/<u1|u2|u3>/<fachada|aparelhos>.
 * Basta soltar os arquivos lá: a galeria de cada unidade se monta sozinha, em ordem de nome.
 */
export function getUnitPhotos(): Record<UnitId, UnitPhotos> {
  return Object.fromEntries(
    units.map((unit) => [unit.id, { fachada: list(unit.id, "fachada"), aparelhos: list(unit.id, "aparelhos") }]),
  ) as Record<UnitId, UnitPhotos>;
}
