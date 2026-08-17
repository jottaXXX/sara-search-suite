import { createFileRoute } from "@tanstack/react-router";

import { ListingPage } from "@/components/ListingPage";

export const Route = createFileRoute("/alugar")({
  validateSearch: (search: Record<string, unknown>): { tipo?: string | undefined; local?: string | undefined } => ({
    tipo: typeof search["tipo"] === "string" ? (search["tipo"] as string) : undefined,
    local: typeof search["local"] === "string" ? (search["local"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Imóveis para alugar em Timon e Teresina | Sara Fernandes Imóveis" },
      {
        name: "description",
        content:
          "Casas, apartamentos, lojas e salas comerciais para locação em Timon-MA e Teresina-PI com acompanhamento da Sara Fernandes Imóveis.",
      },
      { property: "og:title", content: "Imóveis para alugar | Sara Fernandes Imóveis" },
      {
        property: "og:description",
        content: "Locação residencial e comercial com contrato seguro e atendimento próximo.",
      },
    ],
  }),
  component: Alugar,
});

function Alugar() {
  const { tipo, local } = Route.useSearch();

  return (
    <ListingPage
      purpose="alugar"
      eyebrow="Alugar"
      title="Imóveis para locação"
      description="Opções residenciais e comerciais avaliadas de perto, com contrato seguro e suporte durante toda a locação."
      tipo={tipo ?? "Todos"}
      local={local ?? ""}
    />
  );
}
