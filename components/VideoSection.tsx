import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

type VideoSectionProps = {
  youtubeId: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
};

export default function VideoSection({
  youtubeId,
  eyebrow,
  title,
  description,
}: VideoSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
      <SectionHeading
        eyebrow={eyebrow ?? "Conheça a Judice"}
        title={title}
        description={description}
        align="center"
      />
      <div className="relative mx-auto mt-8 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-zinc-100">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title="Vídeo institucional Judice"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </section>
  );
}
