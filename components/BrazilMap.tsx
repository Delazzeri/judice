import Image from "next/image";

type BrazilMapProps = {
  className?: string;
};

export default function BrazilMap({ className = "" }: BrazilMapProps) {
  return (
    <Image
      src="/images/mapa_br_logos.png"
      alt="Mapa do Brasil com presença da Judice em todos os estados"
      width={3448}
      height={3140}
      className={`h-auto w-full ${className}`}
    />
  );
}
