import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { History } from "@/components/History";
import { InstagramCta } from "@/components/InstagramCta";
import { Modalities } from "@/components/Modalities";
import { Partners } from "@/components/Partners";
import { Reviews } from "@/components/Reviews";
import { Signup } from "@/components/Signup";
import { Units } from "@/components/Units";
import { instagram, units } from "@/data/site";
import { getUnitPhotos } from "@/lib/photos";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const toTime = (minutes: number) =>
  `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": units.map((unit) => ({
    "@type": "ExerciseGym",
    name: `Twenty One Company, Unidade ${unit.number} (${unit.name})`,
    sameAs: [instagram.url],
    hasMap: unit.maps,
    telephone: `+55 ${unit.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: unit.street,
      addressLocality: "Uberlândia",
      addressRegion: "MG",
      postalCode: unit.cep,
      addressCountry: "BR",
    },
    openingHoursSpecification: Object.entries(unit.schedule).map(([day, [opens, closes]]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAYS[Number(day)],
      opens: toTime(opens),
      closes: toTime(closes),
    })),
  })),
};

export default function Home() {
  const photos = getUnitPhotos();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main id="conteudo">
        <Hero />
        <Units photos={photos} />
        <Modalities />
        <History />
        <Reviews />
        <Partners />
        <InstagramCta />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
