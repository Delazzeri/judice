import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import NumberedTimeline from "@/components/NumberedTimeline";
import StatBanner from "@/components/StatBanner";
import ServiceList from "@/components/ServiceList";
import BrazilMap from "@/components/BrazilMap";
import Footer from "@/components/Footer";
import { SOLUTIONS } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Sobre Nós, Judice",
  description:
    "Conheça a história da Judice: mais de 20 anos simplificando a correspondência jurídica em todo o Brasil.",
};

export default function Sobre() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image="/images/hero.jpg"
          title={
            <>
              Há mais de 20 anos{" "}
              simplificando a
              correspondência jurídica no Brasil
            </>
          }
          description="Tudo começou com uma ideia ousada. Em 2003, Rodrigo Wichmann, um dos sócios fundadores, projetou e estudou o modelo de negócio por três anos até dar vida à Judice, em Porto Alegre/RS."
        />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-zinc-600">
            <p>
              Nascida como Judice Online, a empresa foi pioneira no Brasil no
              fornecimento de cópias processuais digitalizadas pela internet,
              um movimento que deu origem ao que chamamos hoje de{" "}
              <span className="font-medium text-zinc-900">
                &ldquo;logística jurídica virtual&rdquo;
              </span>
              .
            </p>
            <p>
              O objetivo sempre foi claro: simplificar a rotina do advogado,
              devolver agilidade ao dia a dia e permitir que cada profissional
              dedique mais energia ao que realmente importa, a prática do
              Direito. Com muito mais economia.
            </p>
          </div>
        </section>

        <NumberedTimeline
          eyebrow="Nossos serviços"
          title="Especialistas em audiências e diligências"
          description="Com a vocação de estar ao lado do advogado em todas as esferas de sua atuação, a Judice foi expandindo o portfólio para oferecer mais praticidade e qualidade aos serviços jurídicos. Hoje somos referência em audiências e diligências judiciais e extrajudiciais em todo o Brasil."
          items={[
            {
              title: "Correspondentes em qualquer comarca",
              description:
                "Pelo nosso sistema informatizado, o advogado pode solicitar correspondentes para audiências, advogados ou prepostos em qualquer comarca do país, com a segurança de saber que alguém de confiança estará presente para representar seus interesses e proteger seus prazos.",
            },
            {
              title: "Visita in Loco",
              description:
                "Vamos além das diligências tradicionais. Um de nossos parceiros pode, por exemplo, agendar e realizar uma audiência com um Juiz ou outra autoridade para esclarecer pontos específicos do seu interesse.",
            },
            {
              title: "Judicial e extrajudicial",
              description:
                "Atendemos tanto o âmbito judicial quanto o extrajudicial, cobrindo as mais diversas situações que o exercício da advocacia exige.",
            },
          ]}
        />

        <section className="bg-zinc-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-8">
                <SectionHeading
                  eyebrow="Cobertura nacional"
                  title={
                    <>
                      A Judice atua em{" "}
                      <span className="text-judice-blue">todo o Brasil</span>
                    </>
                  }
                />
                <div className="max-w-xl space-y-4 text-base leading-relaxed text-zinc-600">
                  <p>
                    Com uma rede de correspondentes presente nas 27 unidades
                    federativas, a Judice garante que qualquer diligência,
                    de uma audiência a uma perícia, seja atendida com a
                    mesma agilidade e qualidade, em qualquer comarca do país.
                  </p>
                  <p>
                    Nosso serviço garante economia real de tempo e
                    deslocamento. Em vez de viajar para outra cidade ou
                    acompanhar uma pauta presencialmente, você conta com
                    profissionais locais qualificados, prontos para executar
                    cada diligência com precisão e retorno rápido.
                  </p>
                  <p>
                    Criamos também nosso serviço de protocolo eletrônico.
                    Pelo mesmo sistema online usado para audiências e cópias,
                    nossos clientes protocolam com simplicidade, e a Judice
                    ajusta os arquivos para atender aos requisitos dos 46
                    sistemas eletrônicos vigentes no Brasil, sem que o
                    advogado precise de OAB em cada estado.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-sm sm:max-w-md">
                <BrazilMap className="h-auto w-full" />
              </div>
            </div>
          </div>
        </section>

        <StatBanner
          description={
            <>
              O sucesso da Judice se sustenta no profundo conhecimento dos
              trâmites documentais e da rotina diária do advogado, fruto da
              larga experiência de nossos sócios fundadores, originários dos
              ambientes forense, cartorário e de tecnologia. Sabemos que
              entregar no tempo certo, ou antes, é imprescindível para a
              advocacia.
            </>
          }
          stats={[
            { value: "+1000", label: "Escritórios atendidos em todo o Brasil" },
            { value: "+23", label: "Anos de experiência no mercado" },
            { value: "+112mil", label: "Audiências realizadas" },
          ]}
        />

        <ServiceList
          eyebrow="Nosso portfólio"
          title="Soluções pensadas para todas as etapas da sua rotina jurídica"
          items={SOLUTIONS.map((solution) => ({
            title: solution.title,
            slug: solution.slug,
          }))}
        />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
          <SectionHeading
            eyebrow="Nossa identidade"
            title={
              <>
                Um novo nome, o mesmo{" "}
                <span className="text-judice-blue">DNA humano</span>
              </>
            }
          />
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-600">
            <p>
              Em 2018, a Judice Online passou a se chamar simplesmente Judice,
              atendendo à forma carinhosa com que clientes e colaboradores
              já se referiam à empresa há 15 anos. Essa mudança é um reflexo
              do nosso compromisso com um atendimento humano e personalizado,
              que vai muito além das ferramentas online.
            </p>
            <p>
              Há mais de 20 anos entendemos que ser &ldquo;online&rdquo; é
              obrigação de qualquer prestador de serviços jurídicos, e essa é
              apenas uma das faces do que oferecemos. Mas ser humano é o fator
              indispensável para manter um serviço de qualidade, à altura do
              importante trabalho que nossos clientes prestam à sociedade.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
