import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { SITE, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Sara Fernandes Imóveis em Timon - MA" },
      {
        name: "description",
        content:
          "Fale com a Sara Fernandes Imóveis: (86) 9 8824-5274, sarafernandesimoveis@gmail.com. Avenida Teresina, 1171, Parque Piauí, Timon - MA.",
      },
      { property: "og:title", content: "Contato | Sara Fernandes Imóveis" },
      {
        property: "og:description",
        content: "Telefone, e-mail, endereço e mapa do nosso escritório em Timon - MA.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="eyebrow">Contato</p>
      <h1 className="mt-2 font-serif text-3xl text-foreground md:text-5xl">
        Vamos conversar sobre o seu imóvel
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Atendimento de segunda a sábado. Escolha o canal que preferir — respondemos rápido.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="rounded-md border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-luxe)]"
        >
          <Phone className="h-5 w-5 text-gold" />
          <h2 className="mt-4 font-serif text-xl text-foreground">Telefone</h2>
          <p className="mt-1 text-sm text-muted-foreground">{SITE.phoneLabel}</p>
        </a>

        <a
          href={whatsappLink(
            SITE.phoneTel,
            "Olá! Vim pelo site da Sara Fernandes Imóveis e gostaria de mais informações.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-luxe)]"
        >
          <MessageCircle className="h-5 w-5 text-gold" />
          <h2 className="mt-4 font-serif text-xl text-foreground">WhatsApp</h2>
          <p className="mt-1 text-sm text-muted-foreground">Administração (Sara)</p>
        </a>

        <a
          href={`mailto:${SITE.email}`}
          className="rounded-md border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-luxe)]"
        >
          <Mail className="h-5 w-5 text-gold" />
          <h2 className="mt-4 font-serif text-xl text-foreground">E-mail</h2>
          <p className="mt-1 break-all text-sm text-muted-foreground">{SITE.email}</p>
        </a>
      </div>

      <section className="mt-14 grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground">
            <MapPin className="h-5 w-5 text-gold" />
            Nosso escritório
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{SITE.address}</p>
          <p className="mt-4 text-xs text-muted-foreground">
            {SITE.creci} · CNPJ {SITE.cnpj}
          </p>
        </div>

        <div className="overflow-hidden rounded-md border border-border">
          <iframe
            title="Mapa do escritório Sara Fernandes Imóveis"
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full border-0"
          />
        </div>
      </section>
    </div>
  );
}
