import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, KeyRound, ShieldCheck } from "lucide-react";

import heroImage from "@/assets/hero-varanda.jpg";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/SearchBar";
import { ValuationForm } from "@/components/ValuationForm";
import { PROPERTIES } from "@/data/properties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sara Fernandes Imóveis | Imóveis em Timon e Teresina" },
      {
        name: "description",
        content:
          "Consultoria imobiliária boutique em Timon-MA e Teresina-PI. Compra, locação e avaliação de imóveis com atendimento exclusivo. CRECI-PI 3291.",
      },
      { property: "og:title", content: "Sara Fernandes Imóveis | Imóveis em Timon e Teresina" },
      {
        property: "og:description",
        content: "Sua próxima conquista começa aqui. Imóveis selecionados com atendimento exclusivo.",
      },
    ],
  }),
  component: Home,
});

const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: "Credibilidade comprovada",
    text: "Registro ativo CRECI-PI 3291 e documentação verificada em cada negociação.",
  },
  {
    icon: Award,
    title: "Curadoria de portfólio",
    text: "Cada imóvel é visitado e avaliado antes de entrar na nossa vitrine.",
  },
  {
    icon: KeyRound,
    title: "Acompanhamento completo",
    text: "Da primeira visita à entrega das chaves, com assessoria em toda a burocracia.",
  },
];

function Home() {
  const featured = PROPERTIES.filter((property) => property.featured);

  return (
    <div>
      <section>
        <div className="relative">
          <img
            src={heroImage}
            alt="Varanda sofisticada de apartamento de alto padrão ao pôr do sol"
            width={1920}
            height={1280}
            className="h-[78vh] min-h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/25 to-foreground/15" />

          <div className="absolute inset-x-0 top-14 mx-auto max-w-6xl px-4 md:top-24 md:px-6">
            <p className="text-[0.7rem] tracking-[0.32em] uppercase text-gold-soft">
              Consultoria imobiliária · Timon · Teresina
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] text-background md:text-6xl">
              Sua Próxima Conquista Começa Aqui.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-background/85 md:text-base">
              Um portfólio enxuto e criterioso, com acompanhamento pessoal em cada etapa da compra,
              da locação e da avaliação do seu imóvel.
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-24 max-w-6xl px-4 md:px-6">
          <SearchBar />
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Catálogo destaque</p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              Imóveis selecionados
            </h2>
          </div>
          <Link
            to="/comprar"
            search={{}}
            className="text-sm text-muted-foreground underline decoration-gold decoration-2 underline-offset-4 hover:text-foreground"
          >
            Ver todos os imóveis
          </Link>
        </div>

        <div className="mt-8 swipe-row -mx-4 px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {featured.map((property) => (
            <div key={property.id} className="w-[80vw] shrink-0 md:w-auto">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-3 md:px-6">
          {DIFFERENTIALS.map((item) => (
            <div key={item.title}>
              <item.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="eyebrow">Avaliação de imóveis</p>
        <h2 className="mt-2 max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
          Descubra quanto seu imóvel vale no mercado atual
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Preencha os dados abaixo e receba uma avaliação criteriosa, com base em imóveis
          comparáveis da região e no potencial real de negociação.
        </p>
        <div className="mt-8">
          <ValuationForm />
        </div>
      </section>
    </div>
  );
}
