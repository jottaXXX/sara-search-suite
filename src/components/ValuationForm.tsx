import { useState } from "react";

import { SITE, whatsappLink } from "@/lib/site";

export function ValuationForm() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  const fieldClass =
    "mt-1.5 h-12 w-full rounded-sm border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-gold";

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const message = [
          "Olá! Gostaria de solicitar uma avaliação de imóvel.",
          `Nome: ${nome}`,
          `Endereço do imóvel: ${endereco}`,
          `Telefone: ${telefone}`,
        ].join("\n");
        window.open(whatsappLink(SITE.phoneTel, message), "_blank", "noopener,noreferrer");
      }}
      className="rounded-md border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <label className="block">
          <span className="eyebrow">Nome do cliente</span>
          <input
            required
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Seu nome completo"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="eyebrow">Endereço</span>
          <input
            required
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
            placeholder="Rua, número, bairro, cidade"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="eyebrow">Telefone</span>
          <input
            required
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            placeholder="(86) 9 0000-0000"
            className={fieldClass}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-sm bg-gold px-6 text-sm font-semibold tracking-wide text-gold-foreground transition-opacity hover:opacity-90 md:w-auto"
      >
        Solicitar Avaliação via WhatsApp
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Ao enviar, seus dados são levados diretamente para uma conversa no WhatsApp com nossa
        administração.
      </p>
    </form>
  );
}
