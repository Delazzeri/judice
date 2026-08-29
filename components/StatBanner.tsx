type Stat = { value: string; label: string };

type StatBannerProps = {
  description: React.ReactNode;
  stats: Stat[];
};

export default function StatBanner({ description, stats }: StatBannerProps) {
  return (
    <section className="bg-judice-navy py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-8 md:grid-cols-2 md:gap-16">
        <p className="text-xl leading-relaxed font-medium text-white sm:text-2xl">
          {description}
        </p>
        <div className="space-y-8 border-t border-white/20 pt-8 md:space-y-10 md:border-t-0 md:border-l md:pt-0 md:pl-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
