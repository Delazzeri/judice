import Image from "next/image";
import SectionHeading from "./SectionHeading";

const PARTNER_LOGOS = [
  "6ea4d8_c560da94849847f3bfc27eb5d90abddc~mv2.png",
  "Eletrobras-Nova-LogoDivulgacao.png",
  "baedssia_logo.png",
  "caixa_economica_federal.png",
  "d4df2d05f04d6a169943b5ba36fab08f.png",
  "images.png",
  "logo_preto.png",
  "maxresdefault.png",
  "positivo-637843430836520719.png",
];

function LogoTrack() {
  return (
    <div className="flex shrink-0 items-center gap-20 pr-20">
      {PARTNER_LOGOS.map((file, index) => (
        <div
          key={`${file}-${index}`}
          className="relative h-10 w-24 shrink-0 grayscale transition-all duration-200 hover:grayscale-0 sm:h-12 sm:w-28"
        >
          <Image
            src={`/images/clients_novos/${encodeURIComponent(file)}`}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function PartnerLogos() {
  return (
    <section className="bg-zinc-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-8">
        <SectionHeading
          eyebrow="Confiança de quem já é cliente"
          title={
            <>
              Empresas <span className="text-judice-blue">parceiras</span> da
              Judice
            </>
          }
          description="Escritórios e empresas de diversos setores confiam na Judice para agilizar sua correspondência jurídica em todo o Brasil."
          align="center"
        />
        <div
          className="group relative flex overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            <LogoTrack />
            <LogoTrack />
          </div>
        </div>
      </div>
    </section>
  );
}
