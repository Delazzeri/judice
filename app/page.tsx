import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import TeamBanner from "@/components/TeamBanner";
import StatsSection from "@/components/StatsSection";
import PartnerLogos from "@/components/PartnerLogos";
import Testimonials from "@/components/Testimonials";
import ArticlesHighlight from "@/components/ArticlesHighlight";
import Footer from "@/components/Footer";
import { SOLUTIONS } from "@/lib/solutions";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SolutionsShowcase
          eyebrow="Soluções Inteligentes e Eficiência Jurídica"
          title={
            <>
              Como a <span className="text-judice-blue">Judice</span> pode
              auxiliar você
            </>
          }
          description="Processos jurídicos exigem velocidade e precisão. Por isso, a Judice conecta você a uma rede nacional de correspondentes qualificados, agilizando desde o cadastro da diligência até o relatório final."
          ctaLabel="Cadastre-se grátis"
          ctaHref="/entrar"
          items={SOLUTIONS.map((solution) => ({
            slug: solution.slug,
            title: solution.title,
            description: solution.description,
            href: `/solucoes/${solution.slug}`,
          }))}
        />
        <TeamBanner />
        <StatsSection />
        <PartnerLogos />
        <Testimonials />
        <ArticlesHighlight />
      </main>
      <Footer />
    </div>
  );
}
