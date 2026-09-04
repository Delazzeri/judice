import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[560px] items-center overflow-hidden bg-judice-dark sm:min-h-[680px] lg:min-h-[780px]"
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-judice-dark/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl space-y-8 px-4 py-24 sm:px-8 sm:py-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Sua operação jurídica em todo o Brasil.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70">
            Há mais de 23 anos, a Judice ajuda escritórios e departamentos jurídicos a
            executar audiências, diligências e serviços locais com segurança, agilidade e controle.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="/entrar"
            className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Solicite uma diligência
          </a>
          <a
            href="#solucoes"
            className="rounded-md border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Conheça nossas soluções
          </a>
        </div>
      </div>
    </section>
  );
}
