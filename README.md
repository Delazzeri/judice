# Judice

Site institucional da Judice, empresa de correspondência jurídica com mais de 20 anos de atuação, especializada em audiências, diligências e serviços de apoio local para escritórios de advocacia em todo o Brasil.

**Live:** [judice.vercel.app](https://judice.vercel.app)
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Vercel

> Projeto realizado sob demanda para a Judice (trabalho de cliente).

## Sobre o projeto

Construção das páginas internas do site institucional, seguindo a identidade visual e os padrões de interação já definidos na home. O site apresenta as soluções oferecidas pela empresa — audiências, cópias de processos, digitalizações, processo eletrônico, retiradas e distribuição, visitas in loco, perícias e diligências extrajudiciais — além de uma página institucional (Sobre).

O acesso à plataforma operacional continua no sistema legado da empresa (Judice OnLine, em JSP/Tomcat); este site não substitui esse backend, apenas linka para o login existente.

Decisões de escopo e reposicionamento de conteúdo (de "serviços jurídicos" para "correspondência jurídica") documentadas em [CLAUDE.md](./CLAUDE.md).

## Stack

| Camada     | Escolha               |
| ---------- | ---------------------- |
| Framework  | Next.js (App Router)   |
| Linguagem  | TypeScript              |
| Estilo     | Tailwind CSS             |
| Deploy     | Vercel                   |

## Estrutura

```
app/          # rotas (App Router) — home, /sobre, /solucoes/[slug]
components/   # componentes de UI
lib/          # utilitários e lógica compartilhada
public/       # assets estáticos
```

## Getting started

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).
