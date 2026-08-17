import imovel1 from "@/assets/imovel-1.jpg";
import imovel2 from "@/assets/imovel-2.jpg";
import imovel3 from "@/assets/imovel-3.jpg";
import imovel4 from "@/assets/imovel-4.jpg";
import imovel5 from "@/assets/imovel-5.jpg";
import imovel6 from "@/assets/imovel-6.jpg";

export const PROPERTY_TYPES = [
  "Apartamento",
  "Casa",
  "Casa em condomínio",
  "Loja, Sala Comercial e/ou Galpão",
  "Lote e terreno",
  "Sítio, chácara e/ou fazenda",
] as const;

export type PropertyType = (typeof PROPERTY_TYPES)[number];
export type Purpose = "comprar" | "alugar";

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  purpose: Purpose;
  price: number;
  neighborhood: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: number;
  image: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const PROPERTIES: Property[] = [
  {
    id: "apartamento-vista-parque-piaui",
    title: "Apartamento com vista panorâmica",
    type: "Apartamento",
    purpose: "comprar",
    price: 690000,
    neighborhood: "Parque Piauí",
    city: "Timon - MA",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: 128,
    image: imovel1,
    description:
      "Apartamento alto padrão com living amplo, iluminação natural em todos os ambientes e varanda integrada com vista aberta para a cidade.",
    features: ["Varanda gourmet", "Suíte master", "Portaria 24h", "Lazer completo"],
    featured: true,
  },
  {
    id: "casa-condominio-timon",
    title: "Casa em condomínio fechado",
    type: "Casa em condomínio",
    purpose: "comprar",
    price: 1150000,
    neighborhood: "Bairro Formosa",
    city: "Timon - MA",
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    area: 260,
    image: imovel2,
    description:
      "Residência de dois pavimentos em condomínio com segurança 24h, acabamento refinado e área externa integrada ao jardim.",
    features: ["Segurança 24h", "Closet", "Área gourmet", "Automação"],
    featured: true,
  },
  {
    id: "casa-piscina-teresina",
    title: "Casa com piscina e área de lazer",
    type: "Casa",
    purpose: "comprar",
    price: 1490000,
    neighborhood: "Jóquei",
    city: "Teresina - PI",
    bedrooms: 5,
    bathrooms: 5,
    parking: 4,
    area: 420,
    image: imovel3,
    description:
      "Casa térrea com piscina, deck e jardim tropical. Projeto assinado, pé-direito alto e integração total entre interior e exterior.",
    features: ["Piscina aquecida", "Deck", "Jardim projetado", "Espaço cinema"],
    featured: true,
  },
  {
    id: "loja-avenida-teresina",
    title: "Loja de esquina em avenida principal",
    type: "Loja, Sala Comercial e/ou Galpão",
    purpose: "alugar",
    price: 7800,
    neighborhood: "Centro",
    city: "Timon - MA",
    bedrooms: 0,
    bathrooms: 2,
    parking: 3,
    area: 180,
    image: imovel4,
    description:
      "Ponto comercial com fachada em vidro, grande fluxo de pedestres e ampla vitrine para exposição de marca.",
    features: ["Fachada em vidro", "Ar-condicionado", "Mezanino", "Alto fluxo"],
    featured: true,
  },
  {
    id: "lote-residencial-parque-alvorada",
    title: "Lote residencial pronto para construir",
    type: "Lote e terreno",
    purpose: "comprar",
    price: 240000,
    neighborhood: "Parque Alvorada",
    city: "Timon - MA",
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    area: 450,
    image: imovel5,
    description:
      "Terreno plano em loteamento consolidado, com infraestrutura completa e excelente valorização.",
    features: ["Terreno plano", "Documentação em ordem", "Infra completa"],
  },
  {
    id: "sitio-timon-zona-rural",
    title: "Sítio com sede e pomar",
    type: "Sítio, chácara e/ou fazenda",
    purpose: "alugar",
    price: 4500,
    neighborhood: "Zona Rural",
    city: "Timon - MA",
    bedrooms: 3,
    bathrooms: 2,
    parking: 5,
    area: 12000,
    image: imovel6,
    description:
      "Sítio com sede rústica, varanda ampla, pomar formado e área verde generosa para lazer da família.",
    features: ["Sede mobiliada", "Pomar", "Poço artesiano", "Varanda ampla"],
    featured: true,
  },
];

export function formatPrice(value: number, purpose: Purpose) {
  const formatted = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
  return purpose === "alugar" ? `${formatted}/mês` : formatted;
}

export function filterProperties(options: {
  purpose?: Purpose;
  tipo?: string;
  local?: string;
}) {
  const local = options.local?.trim().toLowerCase() ?? "";
  return PROPERTIES.filter((property) => {
    if (options.purpose && property.purpose !== options.purpose) return false;
    if (options.tipo && options.tipo !== "Todos" && property.type !== options.tipo) return false;
    if (local) {
      const haystack = `${property.neighborhood} ${property.city}`.toLowerCase();
      if (!haystack.includes(local)) return false;
    }
    return true;
  });
}
