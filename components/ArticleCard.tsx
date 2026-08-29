import Image from "next/image";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  publishedAt: string;
  image: string;
  href: string;
};

export default function ArticleCard({
  title,
  excerpt,
  publishedAt,
  image,
  href,
}: ArticleCardProps) {
  return (
    <article className="space-y-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-200">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-600">{excerpt}</p>
        <p className="text-xs text-zinc-400">Publicado em: {publishedAt}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm font-medium text-judice-blue"
      >
        Leia mais →
      </a>
    </article>
  );
}
