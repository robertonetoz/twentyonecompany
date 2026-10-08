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
  title: "Twenty One Company | Academia em Uberlândia desde 2001",
  description:
    "Musculação, Fit Dance, Pilates, treino na bike e Muay Thai em três unidades de Uberlândia: Santa Mônica, Novo Mundo e Pátio Sabiá. Aberta de segunda a sexta, das 5h às 22h. Aceitamos Wellhub e TotalPass.",
  openGraph: {
    title: "Twenty One Company | Academia em Uberlândia",
    description: "O básico bem feito gera resultado. Três unidades em Uberlândia, desde 2001.",
    locale: "pt_BR",
    type: "website",
  },
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
