type TimelineItem = {
  title: string;
  description: string;
};

type NumberedTimelineProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  items: TimelineItem[];
};

export default function NumberedTimeline({
  eyebrow,
  title,
  description,
  items,
}: NumberedTimelineProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <span className="text-sm font-medium text-zinc-500">{eyebrow}</span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="text-base leading-relaxed text-zinc-600">
              {description}
            </p>
          )}
        </div>

        <ol className="relative space-y-10 border-l border-zinc-200 pl-10">
          {items.map((item, index) => (
            <li key={item.title} className="relative">
              <span className="absolute top-0 -left-[3.25rem] flex h-9 w-9 items-center justify-center rounded-full bg-judice-navy text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
