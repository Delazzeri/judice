import Image from "next/image";

type SolutionCardProps = {
  title: string;
  description?: string;
  image: string;
  href: string;
};

export default function SolutionCard({ title, description, image, href }: SolutionCardProps) {
  return (
    <a
      href={href}
      className="group relative flex h-56 flex-col justify-end overflow-hidden rounded-lg bg-zinc-800 p-4 sm:h-64 sm:p-6"
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:backdrop-blur-sm" />
      <div className="relative space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description && (
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
            <p className="max-w-sm overflow-hidden text-sm leading-relaxed text-white/80">
              {description}
            </p>
          </div>
        )}
        <span className="inline-block text-sm font-medium text-white">
          Saiba mais →
        </span>
      </div>
    </a>
  );
}
