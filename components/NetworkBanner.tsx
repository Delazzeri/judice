import Image from "next/image";

type NetworkBannerProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function NetworkBanner({
  title,
  description,
  ctaLabel,
  ctaHref,
}: NetworkBannerProps) {
  return (
    <section className="relative bg-judice-navy md:min-h-[420px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center md:grid-cols-2 md:gap-12 md:min-h-[420px]">
        <div aria-hidden className="relative hidden md:block">
          <Image
            src="/images/logos/logo_simbolo_nova.png"
            alt=""
            width={4300}
            height={4300}
            className="pointer-events-none absolute top-1/2 left-1/2 h-auto w-[85%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-90"
          />
        </div>
        <div className="space-y-6 px-4 py-12 sm:px-8 sm:py-16 md:px-0">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="max-w-md leading-relaxed text-white/70">
            {description}
          </p>
          <a
            href={ctaHref}
            className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
