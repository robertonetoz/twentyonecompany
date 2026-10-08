import { featuredReview, reviews, units } from "@/data/site";
import { StarIcon } from "./icons";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 text-laranja ${className}`} role="img" aria-label="5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((star) => (
        <StarIcon key={star} className="size-4" />
      ))}
    </span>
  );
}

export function Reviews() {
  const rated = units.filter((unit) => unit.rating);

  return (
    <section id="avaliacoes" className="bg-borracha py-24 lg:py-32">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          <div>
            <h2 className="titulo">Quem treina aqui, avalia</h2>

            <ul className="mt-10">
              {rated.map((unit) => (
                <li key={unit.id} className="border-t border-white/15 py-5 last:border-b">
                  <a
                    href={unit.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5"
                  >
                    <span className="display text-6xl [font-stretch:60%] group-hover:text-laranja">
                      {unit.rating!.score}
                    </span>
                    <span>
                      <Stars />
                      <span className="mt-1.5 block font-semibold">
                        Unidade {unit.number}, {unit.name}
                      </span>
                      <span className="block text-sm text-giz underline decoration-white/30 underline-offset-4 group-hover:decoration-laranja">
                        Ler as {unit.rating!.count} avaliações no Google
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <figure className="lg:pt-2">
            <span aria-hidden className="block h-12 w-5 -skew-x-[14deg] bg-laranja" />
            <blockquote className="mt-6 font-display text-[clamp(1.5rem,1rem+1.9vw,2.6rem)] font-extrabold leading-[1.12] [font-stretch:88%]">
              {featuredReview.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-giz">
              <Stars />
              {featuredReview.name}, aluna há 10 anos
            </figcaption>
          </figure>
        </div>

        <ul className="mt-20 gap-x-12 sm:columns-2 lg:columns-3">
          {reviews.map((review) => (
            <li key={review.name} className="mb-10 break-inside-avoid border-l-2 border-laranja pl-5">
              <blockquote className="text-lg leading-snug">{review.text}</blockquote>
              <p className="mt-3 text-sm text-giz">{review.name}, no Google</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
