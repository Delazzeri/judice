import SectionHeading from "./SectionHeading";

const DEFAULT_STATS = [
  { value: "+45mil", label: "Usuários cadastrados" },
  { value: "+4.6mi", label: "Diligências atendidas" },
  { value: "+112mil", label: "Audiências realizadas" },
  { value: "+15mil", label: "Empresas que já utilizaram as soluções da Judice" },
  { value: "+23", label: "Anos de experiência no mercado" },
  { value: "+1000", label: "Parceiros envolvidos nos processos" },
];

type Stat = { value: string; label: string };

type StatsSectionProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  stats?: Stat[];
};

export default function StatsSection({
  eyebrow = "Nossa trajetória em números",
  title = (
    <>
      <span className="text-judice-blue">Judice</span> em números
    </>
  ),
  description = "Números que refletem a nossa entrega diária de agilidade, segurança e suporte especializado em todo o Brasil.",
  stats = DEFAULT_STATS,
}: StatsSectionProps) {
  return (
    <section id="numeros" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid grid-cols-1 border-t border-zinc-200 sm:grid-cols-3 sm:border-t-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-2 border-zinc-200 px-6 py-8 text-center border-b sm:border-b-0 last:border-b-0 ${index % 3 !== 2 ? "sm:border-r" : ""
                } ${index < 3 ? "sm:border-t-0" : "sm:border-t"}`}
            >
              <p className="text-4xl font-bold text-zinc-900 sm:text-5xl">
                {stat.value}
              </p>
              <p className="max-w-[16rem] text-sm text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
