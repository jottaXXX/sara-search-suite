# Ajustes: filtro de localização + painel de WhatsApp

## 1. Campo "Localização" vira lista de opções

No motor de busca (`SearchBar`, usado no hero da home e nas páginas Comprar/Alugar), o campo de texto "Bairro ou cidade" passa a ser um seletor com:

- Todas as localizações
- Teresina
- Timon
- Litoral (Parnaíba e Luís Correia)

O filtro continua funcionando por correspondência com bairro/cidade do imóvel. Para o "Litoral", a busca considera tanto Parnaíba quanto Luís Correia. Os imóveis de demonstração ganham exemplos nessas praças para que cada opção retorne resultados.

## 2. Botão flutuante com ícone real do WhatsApp, animado

- Troca o ícone genérico de balão pelo ícone oficial do WhatsApp (SVG próprio, em traço/preenchimento com os tokens da marca do site).
- Animação contínua discreta: pulso suave do halo dourado ao redor do botão + leve balanço no hover; quando aberto, o ícone vira um "X".
- Respeita `prefers-reduced-motion` (sem animação para quem desativa efeitos).

## 3. Contatos do painel com foto em círculo e borda com blur

Cada corretor (e a Sara, na administração) ganha um avatar circular à esquerda do nome:

- Círculo com anel dourado translúcido e um leve efeito de blur/glow atrás, dando profundidade.
- Fotos: como não há fotos reais dos corretores, serão geradas imagens de retrato profissional (estilo consistente, fundo neutro) para os 4 consultores e para a administração — trocáveis depois pelas fotos reais.
- Item da administração segue destacado no topo.

## Detalhes técnicos

- `src/components/SearchBar.tsx`: `input` de localização → `select`; opção "Litoral" mapeada para uma lista de termos; ajuste em `filterProperties` (`src/data/properties.ts`) para aceitar múltiplos termos.
- `src/data/properties.ts`: novos imóveis de demonstração em Parnaíba/Luís Correia e Teresina.
- `src/lib/site.ts`: cada agente ganha campo `photo`.
- `src/components/WhatsAppFloating.tsx`: ícone WhatsApp em SVG inline, keyframes de pulso em `src/styles.css`, avatares com `ring` dourado + camada `blur`.
- Sem mudanças de backend; tudo em dados estáticos e apresentação.
