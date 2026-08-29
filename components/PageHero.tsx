import Image from "next/image";

type PageHeroProps = {
  title: React.ReactNode;
  description?: string;
  image: string;
};

export default function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[360px] items-center overflow-hidden bg-judice-dark sm:min-h-[420px]">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-judice-dark/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl space-y-4 px-4 py-24 sm:px-8">
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-xl text-base leading-relaxed text-white/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
