import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";

import { PROPERTY_TYPES, type Purpose } from "@/data/properties";

export function SearchBar({
  initialPurpose = "comprar",
  initialTipo = "Todos",
  initialLocal = "",
  variant = "hero",
}: {
  initialPurpose?: Purpose;
  initialTipo?: string;
  initialLocal?: string;
  variant?: "hero" | "inline";
}) {
  const navigate = useNavigate();
  const [purpose, setPurpose] = useState<Purpose>(initialPurpose);
  const [tipo, setTipo] = useState(initialTipo);
  const [local, setLocal] = useState(initialLocal);

  const fieldClass =
    "h-12 w-full rounded-sm border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-gold";

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate({
          to: purpose === "alugar" ? "/alugar" : "/comprar",
          search: { tipo, local },
        });
      }}
      className={
        variant === "hero"
          ? "rounded-md border border-border/60 bg-card/95 p-4 shadow-[var(--shadow-luxe)] backdrop-blur md:p-6"
          : "rounded-md border border-border bg-card p-4 md:p-5"
      }
    >
      <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr_1fr_auto]">
        <label className="block">
          <span className="eyebrow">Finalidade</span>
          <select
            value={purpose}
            onChange={(event) => setPurpose(event.target.value as Purpose)}
            className={`mt-1.5 ${fieldClass}`}
          >
            <option value="comprar">Comprar</option>
            <option value="alugar">Alugar</option>
          </select>
        </label>

        <label className="block">
          <span className="eyebrow">Tipo de imóvel</span>
          <select
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
            className={`mt-1.5 ${fieldClass}`}
          >
            <option value="Todos">Todos os tipos</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="eyebrow">Localização</span>
          <input
            value={local}
            onChange={(event) => setLocal(event.target.value)}
            placeholder="Bairro ou cidade"
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>

        <button
          type="submit"
          className="mt-1.5 inline-flex h-12 items-center justify-center gap-2 self-end rounded-sm bg-gold px-6 text-sm font-semibold tracking-wide text-gold-foreground transition-opacity hover:opacity-90 md:mt-0"
        >
          <Search className="h-4 w-4" />
          Buscar Imóvel
        </button>
      </div>
    </form>
  );
}
