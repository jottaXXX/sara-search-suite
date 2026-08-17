import { createFileRoute } from "@tanstack/react-router";

import { ValuationForm } from "@/components/ValuationForm";

export const Route = createFileRoute("/avaliacao")({
  head: () => ({
    meta: [
      { title: "Avaliação de imóveis em Timon e Teresina | Sara Fernandes Imóveis" },
      {
        name: "description",
        content:
          "Solicite a avaliação gratuita do seu imóvel em Timon-MA ou Teresina-PI e receba o valor de mercado com análise de imóveis comparáveis.",
      },
      { property: "og:title", content: "Avaliação de imóveis | Sara Fernandes Imóveis" },
      {
        property: "og:description",
        content: "Avaliação criteriosa do seu imóvel, direto no WhatsApp com nossa administração.",
      },
    ],
  }),
  component: Avaliacao,
});

const STEPS = [
  {
    step: "01",
    title: "Você envia os dados",
    text: "Nome, endereço do imóvel e telefone — o formulário abre direto no WhatsApp da administração.",
  },
  {
    step: "02",
    title: "Analisamos o imóvel",
    text: "Estudamos metragem, estado de conservação, localização e imóveis comparáveis na região.",
  },
  {
    step: "03",
    title: "Você recebe o valor",
    text: "Entregamos uma faixa de preço realista, com estratégia de venda ou locação sugerida.",
  },
];

function Avaliacao() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="eyebrow">Avaliação de imóveis</p>
      <h1 className="mt-2 max-w-2xl font-serif text-3xl text-foreground md:text-5xl">
        Quanto vale o seu imóvel hoje?
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Avaliação sem custo e sem compromisso, feita por consultora registrada no CRECI-PI 3291.
        Preencha os campos e conversamos pelo WhatsApp.
      </p>

      <div className="mt-10">
        <ValuationForm />
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {STEPS.map((item) => (
          <div key={item.step} className="border-t border-gold pt-5">
            <span className="font-serif text-3xl text-gold">{item.step}</span>
            <h2 className="mt-2 font-serif text-xl text-foreground">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
