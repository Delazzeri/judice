import SectionHeading from "./SectionHeading";

type FaqItem = { question: string; answer: string };

type FaqProps = {
  items: FaqItem[];
};

export default function Faq({ items }: FaqProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas e respostas" />
        <div className="divide-y divide-zinc-200 border-t border-zinc-200">
          {items.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-zinc-900">
                {item.question}
                <span className="shrink-0 text-xl text-zinc-400 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
