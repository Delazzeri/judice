import SectionHeading from "./SectionHeading";
import ArticleCard from "./ArticleCard";

const ARTICLES = [
  {
    title: "Grupo Judice vende empresa e retoma foco na correspondência jurídica",
    excerpt:
      "No ano em que completará duas décadas o Grupo Judice, pioneiro na logística jurídica no Brasil, retoma foco total na correspondência jurídica...",
    publishedAt: "02/12/2022",
    image: "/images/articles/artigo01.jpg",
    href: "https://www.espacovital.com.br/noticias/grupo-judice-vende-empresa-e-retoma-foco-na-correspondencia-juridica-02-12-2022",
  },
  {
    title: "O reaquecimento do mercado de correspondentes da advocacia",
    excerpt:
      "A Judice realizou uma pesquisa, de forma simples, através de um formulário Google. Estatisticamente, o engajamento...",
    publishedAt: "24/06/2022",
    image: "/images/articles/artigo02.jpg",
    href: "https://www.espacovital.com.br/noticias/o-reaquecimento-do-mercado-de-correspondentes-da-advocacia-24-06-2022",
  },
  {
    title: "Empresa gaúcha lança nova ferramenta para gerenciar escritórios de Advocacia",
    excerpt:
      "Realiza-se na próxima semana, no Rio de Janeiro, nos dias 19 a 21, a terceira edição da OABEXPO 2014, com palestras e dezenas de estandes...",
    publishedAt: "16/05/2014",
    image: "/images/articles/artigo03.jpg",
    href: "https://www.espacovital.com.br/noticias/empresa-gaucha-lanca-nova-ferramenta-para-gerenciar-escritorios-de-advocacia-16-05-2014",
  },
];

export default function ArticlesHighlight() {
  return (
    <section id="destaques" className="bg-zinc-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-8">
        <SectionHeading
          eyebrow="Judice nas redes"
          title={
            <>
              Destaques da <span className="text-judice-blue">Judice</span>
            </>
          }
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
