import SectionHeading from "./SectionHeading";
import SolutionCard from "./SolutionCard";
import { SOLUTIONS } from "@/lib/solutions";

export default function Solutions() {
  return (
    <section id="solucoes" className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-8 sm:py-16">
      <SectionHeading
        eyebrow="Soluções Inteligentes e Eficiência Jurídica"
        title={
          <>
            Como a <span className="text-judice-blue">Judice</span> pode
            auxiliar você
          </>
        }
        description="Processos jurídicos exigem velocidade e precisão. Por isso, a Judice conecta você a uma rede nacional de correspondentes qualificados, agilizando desde o cadastro da diligência até o relatório final. Tudo de forma 100% digital, transparente e integrada ao nosso sistema."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((solution) => (
          <SolutionCard
            key={solution.slug}
            title={solution.title}
            description={solution.description}
            image={solution.image}
            href={`/solucoes/${solution.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
