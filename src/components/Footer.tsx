import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo-sara-fernandes.png.asset.json";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <img
            src={logo.url}
            alt="Sara Fernandes Imóveis"
            width={96}
            height={96}
            loading="lazy"
            className="h-16 w-16 object-contain"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Consultoria imobiliária boutique em Timon e Teresina. Atendimento exclusivo, do primeiro
            atendimento à entrega das chaves.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            CNPJ {SITE.cnpj} · {SITE.creci}
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Navegação</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Início
              </Link>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {SITE.phoneLabel}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 break-all hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 px-4 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
