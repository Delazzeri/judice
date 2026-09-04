import SectionHeading from "./SectionHeading";

const DEFAULT_STATS = [
  { value: "+23", label: "anos de atuação" },
  { value: "+4,6mi", label: "diligências atendidas" },
  { value: "+112mil", label: "audiências realizadas" },
  { value: "+15mil", label: "empresas atendidas" },
  { value: "+45mil", label: "usuários cadastrados" },
  { value: "+1000", label: "profissionais na rede" },
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
  title = "Experiência que se transforma em segurança",
  description,
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
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-zinc-600">
          Números importantes. Mas, para nós, cada número representa uma
          demanda que precisava ser executada corretamente.
        </p>
      </div>
    </section>
  );
}
