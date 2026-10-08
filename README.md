# Twenty One Company

Site da academia Twenty One Company (Uberlândia, MG). Next.js (App Router), React, Tailwind CSS v4 e Motion.

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para gerar a versão de produção: `npm run build` e `npm start`.

## Fotos das unidades

Solte as fotos nas pastas abaixo. A galeria de cada unidade se monta sozinha, em ordem de nome de arquivo.

```
public/unidades/u1/fachada      public/unidades/u1/aparelhos      (Santa Mônica)
public/unidades/u2/fachada      public/unidades/u2/aparelhos      (Novo Mundo)
public/unidades/u3/fachada      public/unidades/u3/aparelhos      (Pátio Sabiá)
```

Formatos: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`. Numere os arquivos (`01.jpg`, `02.jpg`…) para escolher a ordem.
A primeira foto de fachada e as duas primeiras de aparelhos viram a prévia que aparece na página.

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Endereços, WhatsApp, horários, notas do Google | `src/data/site.ts` |
| Modalidades e textos | `src/data/site.ts` |
| Avaliações exibidas | `src/data/site.ts` |
| Cores e tipografia | `src/app/globals.css` |
| Título da aba e descrição para o Google | `src/app/layout.tsx` |

O aviso "Aberta agora / Fechada agora" é calculado no navegador com o horário de Brasília, a partir de
`schedule` em `src/data/site.ts`. Feriados não entram nesse cálculo.
