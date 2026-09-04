type StatementProps = {
  children: React.ReactNode;
};

export default function Statement({ children }: StatementProps) {
  return (
    <section className="bg-judice-navy py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-8">
        <p className="text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
          {children}
        </p>
      </div>
    </section>
  );
}
