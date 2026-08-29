import SectionHeading from "./SectionHeading";

type FeatureItem = { title: string; body: string };

type FeatureGridProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  items: FeatureItem[];
};

const ICONS = [
  // check-circle
  <path
    key="check"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12.5l2 2 4-4.5M12 21a9 9 0 100-18 9 9 0 000 18z"
  />,
  // shield
  <path
    key="shield"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
  />,
  // clock
  <>
    <circle key="clock-c" cx="12" cy="12" r="9" />
    <path key="clock-p" strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
  </>,
  // document
  <path
    key="doc"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z M14 3v5h5 M9 13h6 M9 17h6"
  />,
];

export default function FeatureGrid({ eyebrow, title, items }: FeatureGridProps) {
  return (
    <section className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-8 sm:py-16">
      {(eyebrow || title) && (
        <SectionHeading eyebrow={eyebrow ?? ""} title={title ?? ""} />
      )}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {items.map((item, index) => (
          <div key={item.title} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-judice-navy/5 text-judice-navy">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75}>
                {ICONS[index % ICONS.length]}
              </svg>
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
