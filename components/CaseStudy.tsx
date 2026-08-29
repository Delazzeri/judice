type CaseStudyProps = {
  title: string;
  body: string;
};

export default function CaseStudy({ title, body }: CaseStudyProps) {
  return (
    <section className="bg-zinc-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="rounded-lg border border-zinc-200 bg-white p-8 sm:p-12">
          <span className="text-sm font-medium text-zinc-500">Case real</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
