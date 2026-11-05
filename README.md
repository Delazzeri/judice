<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,50:6366f1,100:06b6d4&height=190&section=header&text=Judice&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Site%20institucional%20para%20correspond%C3%AAncia%20jur%C3%ADdica&descSize=17&descAlignY=60" alt="Judice" />

<img src="https://skillicons.dev/icons?i=nextjs,ts,tailwind,vercel&theme=dark" height="42" alt="Stack" />

<br/><br/>

<a href="https://judice.vercel.app"><img src="https://raw.githubusercontent.com/Delazzeri/Delazzeri/main/assets/btn-demo.svg" height="36" alt="Ver site" /></a>

</div>

<br/>

## Sobre

Site institucional da **Judice**, empresa de correspondência jurídica com mais de 20 anos de atuação. A empresa presta apoio a escritórios de advocacia em todo o Brasil, principalmente com audiências, diligências e serviços locais.

> Projeto freelance, realizado sob demanda para a Judice.

O site segue o design definido no Figma, a partir da Home como referência de estilo, e apresenta as soluções da empresa de forma clara para quem busca um correspondente.

## O que o site tem

- **Home** com hero, vídeo institucional, vitrine das soluções, passo a passo numerado, números com contador animado, depoimentos, logos de clientes e parceiros e artigos em destaque.
- **8 páginas de solução**, geradas a partir de dados tipados em `lib/solutions.ts`:
  Audiências, Cópias de Processos, Digitalizações Internas, Processo Eletrônico, Retiradas e Distribuição, Visitas In Loco, Perícias e Diligências Extrajudiciais.
  Cada página traz benefícios, passo a passo do serviço e um caso de uso.
- **Páginas institucionais** (Sobre e páginas da equipe).
- **Botão de WhatsApp** e **recursos de acessibilidade**.
- **SEO técnico:** `sitemap.xml`, `robots.txt` e dados estruturados JSON-LD.

O acesso à plataforma operacional continua no sistema da empresa (Judice OnLine). Este site **não substitui esse sistema**: ele só direciona o usuário para o login existente.

## Decisões de projeto

- **Design como fonte de verdade.** As telas seguem o Figma, e os espaçamentos usam uma escala fixa (4, 8, 16, 24, 32, 48 e 64).
- **Portabilidade.** O código será adaptado para JSP dentro do sistema existente da empresa. Por isso o projeto prefere CSS convencional e Tailwind padrão, em vez de soluções muito presas ao framework.
- **Terminologia.** O posicionamento é "correspondência jurídica", e não "serviços jurídicos".
- **Efeito de hover preservado.** O desfoque que aparece em alguns cards ao passar o mouse é intencional.

## Stack

| Camada | Escolha |
| --- | --- |
| Framework | Next.js 16 (App Router) e React 19 |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS v4 |
| Deploy | Vercel |

## Estrutura

```
app/
  page.tsx                  # home
  sobre/                    # institucional e equipe
  solucoes/[slug]/          # páginas de solução (geradas estaticamente)
  sitemap.ts · robots.ts
components/                 # seções e componentes de UI
lib/                        # dados tipados: soluções, FAQ, equipe, empresa
public/images/              # imagens, logos e fotos das soluções
```

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Ação |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` / `npm run start` | build de produção e servidor |
| `npm run lint` | ESLint |

Decisões de escopo e o roadmap das próximas rodadas estão em [CLAUDE.md](./CLAUDE.md).
