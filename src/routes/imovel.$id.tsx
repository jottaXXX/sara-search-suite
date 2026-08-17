import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bath, BedDouble, Car, Check, MapPin, Ruler } from "lucide-react";

import { formatPrice, PROPERTIES } from "@/data/properties";
import { SITE, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/imovel/$id")({
  loader: ({ params }) => {
    const property = PROPERTIES.find((item) => item.id === params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Imóvel não encontrado | Sara Fernandes Imóveis" }, { name: "robots", content: "noindex" }],
      };
    }
    const { property } = loaderData;
    const title = `${property.title} — ${property.neighborhood}, ${property.city}`;
    return {
      meta: [
        { title: `${title} | Sara Fernandes Imóveis` },
        { name: "description", content: property.description },
        { property: "og:title", content: title },
        { property: "og:description", content: property.description },
      ],
    };
  },
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property } = Route.useLoaderData();

  const specs = [
    property.bedrooms > 0 ? { icon: BedDouble, label: `${property.bedrooms} quartos` } : null,
    property.bathrooms > 0 ? { icon: Bath, label: `${property.bathrooms} banheiros` } : null,
    property.parking > 0 ? { icon: Car, label: `${property.parking} vagas` } : null,
    { icon: Ruler, label: `${property.area} m²` },
  ].filter(Boolean) as { icon: typeof Ruler; label: string }[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <Link
        to={property.purpose === "alugar" ? "/alugar" : "/comprar"}
        search={{ tipo: "Todos", local: "" }}
        className="text-sm text-muted-foreground underline decoration-gold decoration-2 underline-offset-4 hover:text-foreground"
      >
        ← Voltar para {property.purpose === "alugar" ? "locação" : "venda"}
      </Link>

      <div className="mt-6 overflow-hidden rounded-md border border-border">
        <img
          src={property.image}
          alt={`${property.title} em ${property.neighborhood}, ${property.city}`}
          width={1280}
          height={960}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-start">
        <div>
          <p className="eyebrow">{property.type}</p>
          <h1 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">{property.title}</h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" />
            {property.neighborhood}, {property.city}
          </p>

          <ul className="mt-6 flex flex-wrap gap-5 border-y border-border py-5 text-sm text-muted-foreground">
            {specs.map((spec) => (
              <li key={spec.label} className="flex items-center gap-2">
                <spec.icon className="h-4 w-4 text-gold" />
                {spec.label}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-serif text-2xl text-foreground">Sobre o imóvel</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {property.description}
          </p>

          <h2 className="mt-8 font-serif text-2xl text-foreground">Diferenciais</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {property.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-md border border-border bg-card p-6 md:sticky md:top-28">
          <p className="eyebrow">{property.purpose === "alugar" ? "Locação" : "Venda"}</p>
          <p className="mt-2 font-serif text-3xl text-foreground">
            {formatPrice(property.price, property.purpose)}
          </p>
          <a
            href={whatsappLink(
              SITE.phoneTel,
              `Olá! Tenho interesse no imóvel "${property.title}" (${property.neighborhood}, ${property.city}) publicado no site.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-sm bg-gold text-sm font-semibold tracking-wide text-gold-foreground transition-opacity hover:opacity-90"
          >
            Falar com um consultor
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-sm border border-border text-sm text-foreground hover:bg-accent"
          >
            {SITE.phoneLabel}
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Atendimento com registro {SITE.creci}.
          </p>
        </aside>
      </div>
    </div>
  );
}
