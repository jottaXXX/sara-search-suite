import { createFileRoute } from "@tanstack/react-router";

import { ListingPage } from "@/components/ListingPage";

export const Route = createFileRoute("/comprar")({
  validateSearch: (search: Record<string, unknown>): { tipo?: string | undefined; local?: string | undefined } => ({
    tipo: typeof search["tipo"] === "string" ? (search["tipo"] as string) : undefined,
    local: typeof search["local"] === "string" ? (search["local"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Imóveis para comprar em Timon e Teresina | Sara Fernandes Imóveis" },
      {
        name: "description",
        content:
          "Apartamentos, casas, condomínios, terrenos e imóveis rurais à venda em Timon-MA e Teresina-PI com curadoria da Sara Fernandes Imóveis.",
      },
      { property: "og:title", content: "Imóveis para comprar | Sara Fernandes Imóveis" },
      {
        property: "og:description",
        content: "Portfólio de imóveis à venda com atendimento exclusivo. CRECI-PI 3291.",
      },
    ],
  }),
  component: Comprar,
});

function Comprar() {
  const { tipo, local } = Route.useSearch();

  return (
    <ListingPage
      purpose="comprar"
      eyebrow="Comprar"
      title="Imóveis à venda"
      description="Seleção de imóveis prontos para morar ou investir, com documentação verificada e assessoria completa na negociação."
      tipo={tipo ?? "Todos"}
      local={local ?? ""}
    />
  );
}
