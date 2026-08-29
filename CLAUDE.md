# Judice — Site institucional

Projeto: Judice (site institucional para empresa de correspondência jurídica).

A Home está implementada e é a referência de estilo para as demais páginas.

## Fonte de verdade do design

Figma: https://www.figma.com/site/BEeSjD0Lhe9p4fojbzhrZ6/Judice?node-id=0-1&t=Tl4Noz4WSiTQDbzM-1

Se houver MCP do Figma disponível, usar para inspecionar o frame (node-id=0-1)
e extrair specs exatas: espaçamentos, cores, tipografia, tamanhos, breakpoints.

Antes de alterar qualquer coisa na Home, comparar o código atual com o design
do Figma e listar as discrepâncias para revisão.

## Convenções de espaçamento

Seguir uma escala consistente de espaçamento: 4 / 8 / 16 / 24 / 32 / 48 / 64.
Preferir essa escala no código ao invés de valores soltos/arbitrários.

## Comportamento intencional — não alterar

O desfoque (blur) que aparece em algumas soluções/cards ocorre no hover e é
proposital. Não "corrigir" ou remover esse efeito.

## Roadmap (próximas rodadas, não fazer sem pedir)

1. Padronizar espaçamentos (rodada atual)
2. Substituir textos por conteúdo fiel ao feedback do cliente (ainda a definir)
3. Inserir logos das empresas parceiras/clientes
4. Deixar a Home responsiva
5. Revisar e melhorar tamanhos (textos, imagens, componentes) de forma geral

## Restrição para o futuro

Este código será adaptado para JSP dentro de um sistema já existente. Evitar
soluções de espaçamento (ou outras) muito específicas do framework atual que
dificultem a portabilidade — preferir CSS convencional / Tailwind padrão.

## Terminologia

- Usar "correspondência jurídica", não "serviços jurídicos".
- Evitar referências a "Comarcas" (não há mais escritório físico).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
