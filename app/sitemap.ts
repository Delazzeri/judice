import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company";
import { SOLUTIONS } from "@/lib/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
      videos: [
        {
          title: "Conheça a operação da Judice",
          thumbnail_loc: "https://i.ytimg.com/vi/TbT1ANQuQn0/maxresdefault.jpg",
          description:
            "Veja como a Judice coordena uma rede nacional de advogados e prepostos para atender escritórios em qualquer comarca do Brasil.",
          player_loc: "https://www.youtube-nocookie.com/embed/TbT1ANQuQn0",
        },
      ],
    },
    { url: `${SITE_URL}/sobre`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const solutionRoutes: MetadataRoute.Sitemap = SOLUTIONS.map((solution) => ({
    url: `${SITE_URL}/solucoes/${solution.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...solutionRoutes];
}
