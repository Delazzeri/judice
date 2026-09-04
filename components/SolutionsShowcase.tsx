import SolutionIcon from "./SolutionIcon";

type ShowcaseItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

type SolutionsShowcaseProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: ShowcaseItem[];
};

export default function SolutionsShowcase({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  items,
}: SolutionsShowcaseProps) {
  return (
    <section id="solucoes" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-20">
        <div className="space-y-8">
          <div className="space-y-5">
            <span className="text-sm font-medium text-zinc-500">{eyebrow}</span>
            <h2 className="max-w-lg text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="max-w-md text-base leading-relaxed text-zinc-600 sm:text-lg">
                {description}
              </p>
            )}
          </div>
          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="inline-block rounded-md bg-judice-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-judice-navy/90"
            >
              {ctaLabel}
            </a>
          )}
        </div>

        <div className="h-[453px] overflow-y-auto pr-1 md:pr-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {items.map((item) => (
              <a
                key={item.slug}
                href={item.href}
                className="flex min-h-[289px] flex-col gap-4 rounded-2xl border border-zinc-200 p-7 transition-colors hover:border-judice-navy/30 hover:bg-zinc-50"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-judice-navy/5 text-judice-navy">
                  <SolutionIcon slug={item.slug} className="h-6 w-6" />
                </span>
                <span className="space-y-2">
                  <p className="text-base font-semibold text-zinc-900">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </span>
                <span className="mt-auto pt-2 text-sm font-semibold text-judice-blue">
                  Saiba mais →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
