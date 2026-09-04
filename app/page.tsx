import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import NumberedTimeline from "@/components/NumberedTimeline";
import TeamBanner from "@/components/TeamBanner";
import StatsSection from "@/components/StatsSection";
import FeatureGrid from "@/components/FeatureGrid";
import Statement from "@/components/Statement";
import PartnerLogos from "@/components/PartnerLogos";
import Testimonials from "@/components/Testimonials";
import ArticlesHighlight from "@/components/ArticlesHighlight";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { SOLUTIONS } from "@/lib/solutions";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        <IntroStatement
          title="Você cuida do jurídico. A Judice cuida da operação local."
          description={
            <>
              Seu escritório não precisa manter uma estrutura própria em cada
              comarca onde possui processos. A Judice oferece uma rede
              nacional de advogados e prepostos, coordenada por uma equipe
              especializada e apoiada por tecnologia, para que sua equipe
              tenha um único parceiro para suas demandas em todo o Brasil.
            </>
          }
        />

        <SolutionsShowcase
          eyebrow="Como podemos ajudar"
          title={
            <>
              Como a <span className="text-judice-blue">Judice</span> pode
              auxiliar você
            </>
          }
          description="Uma operação nacional de profissionais qualificados para executar audiências, diligências e serviços jurídicos locais com segurança, agilidade e controle."
          ctaLabel="Conheça nossas soluções"
          ctaHref="/solucoes"
          items={SOLUTIONS.map((solution) => ({
            slug: solution.slug,
            title: solution.title,
            description: solution.description,
            href: `/solucoes/${solution.slug}`,
          }))}
        />

        <NumberedTimeline
          eyebrow="Como funciona"
          title="Do pedido ao relatório, nós cuidamos de tudo."
          description="Uma solicitação. Uma equipe. Um controle."
          items={[
            {
              title: "01 — Você solicita",
              description: "Informe o que precisa, onde e quando.",
            },
            {
              title: "02 — Nós encontramos o profissional",
              description:
                "Nossa equipe seleciona e coordena o profissional adequado para a demanda.",
            },
            {
              title: "03 — Acompanhamos a execução",
              description:
                "Monitoramos a demanda e mantemos você informado sobre cada etapa.",
            },
            {
              title: "04 — Você recebe o resultado",
              description:
                "Após a realização, disponibilizamos o relatório e os documentos correspondentes.",
            },
          ]}
        />

        <TeamBanner />

        <StatsSection />

        <FeatureGrid
          eyebrow="Segurança"
          title={
            <>
              Quando você terceiriza uma diligência, você também terceiriza
              um risco.
            </>
          }
          items={[
            {
              title: "Rede nacional",
              body: "Profissionais disponíveis em todo o Brasil.",
            },
            {
              title: "Gestão centralizada",
              body: "Sua equipe não precisa administrar dezenas de correspondentes diferentes.",
            },
            {
              title: "Tecnologia",
              body: "Solicitações, informações e acompanhamento organizados em um único ambiente.",
            },
            {
              title: "Responsabilidade",
              body: "Serviços realizados com processos internos e cobertura de responsabilidade.",
            },
            {
              title: "Experiência",
              body: "Mais de duas décadas aprendendo o que pode dar errado — e trabalhando para que não aconteça.",
            },
          ]}
        />

        <Statement>
          Não somos apenas uma rede de correspondentes. Somos a estrutura
          operacional que permite ao seu escritório atuar em todo o Brasil
          sem precisar estar em todo o Brasil.
        </Statement>

        <PartnerLogos />
        <Testimonials />
        <ArticlesHighlight />

        <CtaBanner
          title="Tem uma operação jurídica nacional?"
          description="Conte para nós o que sua equipe precisa executar. Nossa equipe pode desenhar uma solução adequada ao seu volume, perfil e distribuição geográfica."
          primaryLabel="Falar com a Judice →"
          primaryHref="https://www.judiceonline.com.br/judice/judiceSite/login.jsp"
          secondaryLabel="Já sabe o que precisa? Acesse a plataforma"
          secondaryHref="https://www.judiceonline.com.br/judice/judiceSite/login.jsp"
        />
      </main>
      <Footer />
    </div>
  );
}
