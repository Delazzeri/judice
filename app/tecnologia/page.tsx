import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tecnologia, Judice",
  description:
    "Tecnologia para você ter controle, não para complicar sua rotina. Solicitações, documentos, instruções e resultados em um único ambiente.",
};

export default function Tecnologia() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image="/images/hero.jpg"
          title="Tecnologia para você ter controle, não para complicar sua rotina."
          description="Nossa plataforma organiza as solicitações, documentos, instruções e resultados das diligências em um único ambiente."
        />

        <FeatureGrid
          eyebrow="Como funciona"
          title="Você solicita. A Judice coordena. Você acompanha."
          items={[
            {
              title: "Você solicita",
              body: "Informe o que precisa, onde e quando, direto pela plataforma.",
            },
            {
              title: "A Judice coordena",
              body: "Nossa equipe seleciona e coordena o profissional adequado para a demanda.",
            },
            {
              title: "Você acompanha",
              body: "Acompanhe cada etapa da diligência em tempo real, em um único ambiente.",
            },
            {
              title: "Você recebe o resultado",
              body: "Relatórios e documentos organizados e disponíveis para consulta e download.",
            },
          ]}
        />

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
