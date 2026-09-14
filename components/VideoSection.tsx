import type { ReactNode } from "react";

type VideoSectionProps = {
  youtubeId: string;
  title: ReactNode;
  description: ReactNode;
};

export default function VideoSection({
  youtubeId,
  title,
  description,
}: VideoSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&color=white`}
            title="Vídeo institucional Judice"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
