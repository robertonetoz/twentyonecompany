/* Faixa laranja com as bordas na inclinação do corte da logo. As cunhas repetem a cor das seções vizinhas. */
export function Partners() {
  return (
    <section aria-labelledby="convenios" className="relative bg-laranja py-[calc(4rem+5vw)] text-black lg:py-[calc(5rem+5vw)]">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-px h-[5vw] bg-[linear-gradient(to_bottom_right,var(--color-borracha)_calc(50%-0.5px),transparent_50%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-px h-[5vw] bg-[linear-gradient(to_bottom_right,transparent_50%,#000_calc(50%+0.5px))]"
      />

      <div className="wrap relative grid grid-cols-1 items-end gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <h2 id="convenios" className="titulo">
            Seu benefício vale aqui
          </h2>
          <p className="mt-5 max-w-[30rem] text-lg font-medium">
            Treine na Twenty One usando o plano que a sua empresa já oferece. Confirme no WhatsApp qual
            plano dá acesso à unidade que você escolheu.
          </p>
        </div>

        <ul className="display text-[clamp(2.4rem,1rem+6vw,5.5rem)] leading-[0.95]">
          <li className="[font-stretch:150%]">Wellhub</li>
          <li className="-mt-1 font-sans text-base font-semibold normal-case leading-normal">o antigo Gympass</li>
          <li className="mt-3 [font-stretch:60%]">TotalPass</li>
        </ul>
      </div>
    </section>
  );
}
