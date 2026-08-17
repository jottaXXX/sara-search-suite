import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { AGENTS, SITE, whatsappLink } from "@/lib/site";

export function WhatsAppFloating() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-luxe)]">
          <div className="border-b border-border bg-secondary px-4 py-3">
            <p className="eyebrow">Fale com a equipe</p>
            <p className="mt-1 font-serif text-lg text-foreground">{SITE.name}</p>
          </div>
          <ul className="max-h-[60vh] overflow-y-auto">
            {AGENTS.map((agent) => (
              <li key={agent.name} className="border-b border-border/60 last:border-b-0">
                <a
                  href={whatsappLink(
                    agent.phone,
                    `Olá! Vim pelo site da Sara Fernandes Imóveis e gostaria de atendimento com ${agent.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-accent ${
                    agent.admin ? "bg-gold-soft/60" : ""
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {agent.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {agent.role} · {agent.phoneLabel}
                    </span>
                  </span>
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Fechar atendimento no WhatsApp" : "Abrir atendimento no WhatsApp"}
        className="grid h-14 w-14 place-items-center rounded-full bg-gold text-gold-foreground shadow-[var(--shadow-luxe)] transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
