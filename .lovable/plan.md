# Site Sara Fernandes Imóveis

Site institucional premium, mobile-first, com catálogo de imóveis de demonstração (dados estáticos no código) e captação de leads via WhatsApp.

## Identidade visual

- Paleta: dourado (ações/destaques), cinza-prata (textos/detalhes), fundo off-white.
- Tipografia: serifada clássica nos títulos (Cormorant Garamond) + sans moderna no corpo (Karla).
- Estilo boutique: muito espaço em branco, bordas discretas, sombras suaves, fotos grandes.
- Logo enviada é usada no cabeçalho e no rodapé (versão dourada/cinza).

## Estrutura de páginas

- `/` Home
- `/comprar` — catálogo de venda com filtros
- `/alugar` — catálogo de locação com filtros
- `/avaliacao` — página de avaliação de imóveis
- `/quem-somos` — história, credibilidade, equipe
- `/contato` — contatos, endereço e mapa
- `/imovel/:id` — detalhe do imóvel (fotos, características, contato direto)

Cabeçalho fixo com logo + "CRECI-PI 3291" + navegação (menu hambúrguer no mobile).

## Home

1. Hero com imagem de varanda/sala sofisticada, título "Sua Próxima Conquista Começa Aqui." e caixa de busca flutuante: Finalidade (Comprar/Alugar), Tipo de Imóvel (Apartamento; Casa; Casa em condomínio; Loja, Sala Comercial e/ou Galpão; Lote e terreno; Sítio, chácara e/ou fazenda), Localização (texto) e botão dourado "Buscar Imóvel" → leva a `/comprar` ou `/alugar` com os filtros aplicados.
2. Catálogo destaque: 6 cards (foto grande, preço destacado, localização, ícones de quartos/banheiros/vagas). No mobile rolagem lateral com swipe; no desktop grade.
3. Seção de avaliação de imóveis: formulário com Nome do Cliente, Endereço e Telefone + botão dourado "Solicitar Avaliação via WhatsApp" que abre o WhatsApp da administração com a mensagem já preenchida.
4. Faixa de diferenciais (atendimento exclusivo, CRECI ativo, assessoria completa).

## Botão flutuante WhatsApp (multi-agentes)

Botão fixo no canto inferior direito. Ao clicar, abre um painel elegante com a equipe; cada item abre o WhatsApp do agente:

- ADMINISTRAÇÃO (SARA) — (86) 9 8824-5274 (fixado no topo, destacado)
- Lucas Silva — CRECI-PI 4055
- Amanda Costa — CRECI-PI 5122
- Felipe Santos — CRECI-PI 6188
- Carolina Oliveira — CRECI-PI 7244

Os números dos consultores usam o número da administração como fallback até você informar os reais.

## Contato e rodapé

- Telefone (86) 9 8824-5274 clicável (`tel:` + WhatsApp), e-mail sarafernandesimoveis@gmail.com clicável.
- Endereço: Avenida Teresina, nº 1171, Parque Piauí, Timon - MA.
- Mapa Google Maps incorporado (iframe de embed simples, sem chave de API) apontando para o endereço.
- Rodapé: logo, CNPJ 61.642.995/0001-89, CRECI-PI 3291, links rápidos para todas as abas e contatos.

## Detalhes técnicos

- Logo enviada publicada como asset CDN (`lovable-assets`) e importada nos componentes.
- Imagens de hero e dos imóveis geradas (interiores/fachadas premium), salvas em `src/assets`.
- Tokens de cor/tipografia definidos em `src/styles.css` (`@theme`), fontes carregadas via `<link>` no `__root.tsx`. Sem cores hardcoded nos componentes.
- Dados dos imóveis em `src/data/properties.ts` (tipagem TS), filtrados por finalidade/tipo/localização via search params das rotas de listagem — fácil de trocar por um painel com banco depois.
- Componentes compartilhados: `Header`, `Footer`, `PropertyCard`, `SearchBar`, `WhatsAppFloating`, `ValuationForm`.
- Cada rota com `head()` próprio (title, description, og) em português; H1 único por página; alt em todas as imagens.
- Layout mobile-first, com carrossel por scroll-snap no catálogo.
