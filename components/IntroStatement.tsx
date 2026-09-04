type IntroStatementProps = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export default function IntroStatement({ title, description }: IntroStatementProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
