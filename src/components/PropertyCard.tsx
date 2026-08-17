import { Link } from "@tanstack/react-router";
import { BedDouble, Bath, Car, MapPin, Ruler } from "lucide-react";

import { formatPrice, type Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      to="/imovel/$id"
      params={{ id: property.id }}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card transition-shadow hover:shadow-[var(--shadow-luxe)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={`${property.title} — ${property.neighborhood}, ${property.city}`}
          width={1280}
          height={960}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-background/90 px-2 py-1 text-[0.65rem] tracking-[0.18em] uppercase text-foreground">
          {property.purpose === "alugar" ? "Locação" : "Venda"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{property.type}</p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-foreground">{property.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-gold" />
          {property.neighborhood}, {property.city}
        </p>

        <p className="mt-4 font-serif text-2xl text-foreground">
          {formatPrice(property.price, property.purpose)}
        </p>

        <ul className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
          {property.bedrooms > 0 ? (
            <li className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-gold" />
              {property.bedrooms} quartos
            </li>
          ) : null}
          {property.bathrooms > 0 ? (
            <li className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-gold" />
              {property.bathrooms} banheiros
            </li>
          ) : null}
          {property.parking > 0 ? (
            <li className="flex items-center gap-1.5">
              <Car className="h-4 w-4 text-gold" />
              {property.parking} vagas
            </li>
          ) : null}
          <li className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-gold" />
            {property.area} m²
          </li>
        </ul>
      </div>
    </Link>
  );
}
