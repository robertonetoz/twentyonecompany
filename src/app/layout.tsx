import type { Metadata, Viewport } from "next";
import { Anybody, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twentyonecompany.vercel.app"),
  title: "Twenty One Company | Academia em Uberlândia desde 2001",
  description:
    "Musculação, Fit Dance, Pilates, treino na bike e Muay Thai em três unidades de Uberlândia: Santa Mônica, Novo Mundo e Pátio Sabiá. Aberta de segunda a sexta, das 5h às 22h. Aceitamos Wellhub e TotalPass.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Twenty One Company | Academia em Uberlândia",
    description: "O básico bem feito gera resultado. Três unidades em Uberlândia, desde 2001.",
    url: "/",
    siteName: "Twenty One Company",
    locale: "pt_BR",
    type: "website",
  },
  // A imagem da prévia do link vem de src/app/opengraph-image.png.
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${anybody.variable} ${hanken.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
