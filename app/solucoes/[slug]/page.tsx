import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import NumberedTimeline from "@/components/NumberedTimeline";
import StatBanner from "@/components/StatBanner";
import CaseStudy from "@/components/CaseStudy";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { SOLUTIONS, getSolutionBySlug } from "@/lib/solutions";

type Params = { slug: string };

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) return {};

  return {
    title: `${solution.title}, Judice`,
    description: solution.description,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image={solution.image}
          title={solution.title}
          description={solution.intro}
        />

        <FeatureGrid
          eyebrow="O que você recebe"
          title={
            <>
              Tudo o que você precisa para{" "}
              <span className="text-judice-blue">{solution.title.toLowerCase()}</span>
            </>
          }
          items={solution.highlights}
        />

        <NumberedTimeline
          eyebrow="Como funciona"
          title={
            <>
              Do pedido ao{" "}
              <span className="text-judice-blue">resultado final</span>
            </>
          }
          description={`Veja o passo a passo de como funciona a solução de ${solution.title} na Judice, do momento em que você faz a solicitação até o recebimento do resultado.`}
          items={solution.steps.map((step) => ({
            title: step.title,
            description: step.body,
          }))}
        />

        <StatBanner
          description={
            <>
              A solução de {solution.title} é sustentada pela mesma estrutura
              que faz da Judice referência em correspondência jurídica no
              Brasil: uma rede nacional consolidada, segurança na guarda de
              documentos e compromisso total com prazos.
            </>
          }
          stats={[
            { value: "+23", label: "Anos de experiência no mercado" },
            { value: "+1000", label: "Correspondentes em todo o Brasil" },
            { value: "+112mil", label: "Audiências realizadas" },
          ]}
        />

        <CaseStudy {...solution.caseStudy} />

        <Faq items={solution.faq} />
      </main>
      <Footer />
    </div>
  );
}
