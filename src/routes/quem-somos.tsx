import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo-sara-fernandes.png.asset.json";
import { AGENTS, SITE } from "@/lib/site";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem somos | Sara Fernandes Imóveis" },
      {
        name: "description",
        content:
          "Conheça a Sara Fernandes Imóveis: consultoria imobiliária boutique em Timon-MA e Teresina-PI, com atendimento exclusivo e registro CRECI-PI 3291.",
      },
      { property: "og:title", content: "Quem somos | Sara Fernandes Imóveis" },
      {
        property: "og:description",
        content: "Uma consultoria boutique: portfólio curado e atendimento pessoal do início ao fim.",
      },
    ],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div>
          <p className="eyebrow">Quem somos</p>
          <h1 className="mt-2 font-serif text-3xl text-foreground md:text-5xl">
            Uma consultoria imobiliária feita de atendimento próximo
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              A Sara Fernandes Imóveis nasceu de uma convicção simples: comprar, vender ou alugar um
              imóvel é uma das decisões mais importantes de uma vida — e merece acompanhamento de
              verdade, não atendimento em série.
            </p>
            <p>
              Trabalhamos com um portfólio enxuto e criterioso em Timon-MA e Teresina-PI. Cada
              imóvel é visitado, documentado e avaliado antes de ser apresentado, para que o cliente
              use o tempo dele apenas com oportunidades reais.
            </p>
            <p>
              Da primeira conversa à assinatura do contrato, a mesma equipe segue com você:
              negociação, documentação, financiamento e entrega das chaves.
            </p>
          </div>
        </div>

        <aside className="rounded-md border border-border bg-card p-6">
          <img
            src={logo.url}
            alt="Marca Sara Fernandes Imóveis"
            width={120}
            height={120}
            loading="lazy"
            className="h-20 w-20 object-contain"
          />
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="eyebrow">Registro</dt>
              <dd className="mt-1 text-foreground">{SITE.creci}</dd>
            </div>
            <div>
              <dt className="eyebrow">CNPJ</dt>
              <dd className="mt-1 text-foreground">{SITE.cnpj}</dd>
            </div>
            <div>
              <dt className="eyebrow">Atuação</dt>
              <dd className="mt-1 text-foreground">Timon - MA e Teresina - PI</dd>
            </div>
          </dl>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-2xl text-foreground md:text-3xl">Nossa equipe</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((agent) => (
            <li key={agent.name} className="rounded-md border border-border bg-card p-5">
              <p className="font-serif text-lg text-foreground">{agent.name}</p>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground">{agent.role}</p>
              <a
                href={`tel:${agent.phone}`}
                className="mt-3 inline-block text-sm text-foreground underline decoration-gold decoration-2 underline-offset-4"
              >
                {agent.phoneLabel}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
