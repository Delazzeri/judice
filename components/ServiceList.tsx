type ServiceListItem = {
  title: string;
  slug: string;
};

type ServiceListProps = {
  eyebrow: string;
  title: React.ReactNode;
  items: ServiceListItem[];
};

export default function ServiceList({ eyebrow, title, items }: ServiceListProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <span className="text-sm font-medium text-zinc-500">{eyebrow}</span>
          <h2 className="max-w-md text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        </div>
        <ul className="divide-y divide-zinc-200 border-t border-zinc-200">
          {items.map((item) => (
            <li key={item.slug}>
              <a
                href={`/solucoes/${item.slug}`}
                className="group flex items-center justify-between py-4 text-base font-semibold tracking-wide text-zinc-900 uppercase transition-colors hover:text-judice-blue"
              >
                {item.title}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-judice-blue"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
