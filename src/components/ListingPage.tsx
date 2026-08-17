import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/SearchBar";
import { filterProperties, type Purpose } from "@/data/properties";

export function ListingPage({
  purpose,
  eyebrow,
  title,
  description,
  tipo,
  local,
}: {
  purpose: Purpose;
  eyebrow: string;
  title: string;
  description: string;
  tipo: string;
  local: string;
}) {
  const results = filterProperties({ purpose, tipo, local });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-2 font-serif text-3xl text-foreground md:text-5xl">{title}</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-8">
        <SearchBar
          variant="inline"
          initialPurpose={purpose}
          initialTipo={tipo}
          initialLocal={local}
        />
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-md border border-dashed border-border bg-card p-10 text-center">
          <p className="font-serif text-xl text-foreground">
            Nenhum imóvel com esses filtros no momento
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Fale com a nossa equipe pelo WhatsApp: temos oportunidades ainda não publicadas.
          </p>
        </div>
      )}
    </div>
  );
}
