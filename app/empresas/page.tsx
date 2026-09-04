import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StatBanner from "@/components/StatBanner";
import Statement from "@/components/Statement";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Grandes Operações, Judice",
  description:
    "Para escritórios e departamentos jurídicos que administram grandes volumes de processos, a Judice funciona como uma extensão da operação.",
};

export default function Empresas() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image="/images/hero.jpg"
          title="Uma solução para quem tem escala."
          description="Para escritórios e departamentos jurídicos que administram grandes volumes de processos, a Judice funciona como uma extensão da operação."
        />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
          <SectionHeading
            eyebrow="Grandes operações"
            title={
              <>
                Uma operação nacional sob{" "}
                <span className="text-judice-blue">um único comando</span>
              </>
            }
            description="Em vez de sua equipe administrar dezenas ou centenas de profissionais espalhados pelo país, um único parceiro coordena as demandas locais."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Menos fornecedores.",
              "Menos controles.",
              "Menos risco.",
              "Mais previsibilidade.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 p-6 text-lg font-semibold text-zinc-900"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <StatBanner
          description="A Judice combina uma rede nacional de profissionais, tecnologia e uma equipe especializada para cuidar da execução local das demandas jurídicas de nossos clientes."
          stats={[
            { value: "+23", label: "Anos de experiência no mercado" },
            { value: "+1000", label: "Profissionais na rede" },
            { value: "+15mil", label: "Empresas atendidas" },
          ]}
        />

        <Statement>
          Não somos apenas uma rede de correspondentes. Somos a estrutura
          operacional que permite ao seu escritório atuar em todo o Brasil
          sem precisar estar em todo o Brasil.
        </Statement>

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
