import { instagram } from "@/data/site";
import { InstagramIcon } from "./icons";

export function InstagramCta() {
  return (
    <section id="instagram" className="overflow-hidden py-24 lg:py-32">
      <div className="wrap">
        <h2 className="titulo max-w-[18ch]">Dica de treino toda semana, de graça</h2>
        <p className="mt-5 max-w-[36rem] text-lg text-giz">
          No Instagram a equipe posta dicas de execução, conteúdo de treino, os antes e depois dos alunos
          e os avisos de horário. Vale seguir mesmo antes de se matricular.
        </p>

        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 block"
          aria-label={`Seguir ${instagram.handle} no Instagram`}
        >
          <span className="cartaz block">
            <span className="display block whitespace-nowrap normal-case text-[11cqw] transition-[font-stretch,color] duration-700 ease-rep [font-stretch:50%] group-hover:text-laranja group-hover:[font-stretch:62%] group-focus-visible:text-laranja group-focus-visible:[font-stretch:62%]">
              {instagram.handle}
            </span>
          </span>
          <span className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 pl-2">
            <span className="btn">
              <InstagramIcon className="size-5" />
              Seguir no Instagram
            </span>
            <span className="text-giz">{instagram.followers} seguidores</span>
          </span>
        </a>
      </div>
    </section>
  );
}
