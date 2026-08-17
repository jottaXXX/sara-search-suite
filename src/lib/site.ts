export const SITE = {
  name: "Sara Fernandes Imóveis",
  creci: "CRECI-PI 3291",
  cnpj: "61.642.995/0001-89",
  phoneLabel: "(86) 9 8824-5274",
  phoneTel: "+5586988245274",
  email: "sarafernandesimoveis@gmail.com",
  address: "Avenida Teresina, nº 1171, Parque Piauí, Timon - MA",
  mapQuery: "Avenida Teresina, 1171, Parque Piauí, Timon - MA",
} as const;

export type Agent = {
  name: string;
  role: string;
  phone: string;
  phoneLabel: string;
  admin?: boolean;
};

export const AGENTS: Agent[] = [
  {
    name: "ADMINISTRAÇÃO (SARA)",
    role: "Consultora Imobiliária · CRECI-PI 3291",
    phone: SITE.phoneTel,
    phoneLabel: SITE.phoneLabel,
    admin: true,
  },
  {
    name: "Lucas Silva",
    role: "CRECI-PI 4055",
    phone: SITE.phoneTel,
    phoneLabel: SITE.phoneLabel,
  },
  {
    name: "Amanda Costa",
    role: "CRECI-PI 5122",
    phone: SITE.phoneTel,
    phoneLabel: SITE.phoneLabel,
  },
  {
    name: "Felipe Santos",
    role: "CRECI-PI 6188",
    phone: SITE.phoneTel,
    phoneLabel: SITE.phoneLabel,
  },
  {
    name: "Carolina Oliveira",
    role: "CRECI-PI 7244",
    phone: SITE.phoneTel,
    phoneLabel: SITE.phoneLabel,
  },
];

export const NAV_LINKS = [
  { to: "/comprar", label: "Comprar" },
  { to: "/alugar", label: "Alugar" },
  { to: "/avaliacao", label: "Avaliação de Imóveis" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/contato", label: "Contato" },
] as const;

export function whatsappLink(phone: string, message: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
