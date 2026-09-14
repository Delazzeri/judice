export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin?: string;
  bio: string;
  highlights: string[];
};

export const TEAM: TeamMember[] = [
  {
    slug: "rodrigo",
    name: "Rodrigo Wichmann Cruz",
    role: "Fundador da Judice",
    image: "/images/team/rodrigo.png",
    email: "rodrigo@judice.com.br",
    linkedin: "https://www.linkedin.com/in/rodrigo-wichmann/",
    bio: "Formado em Ciências Contábeis, Rodrigo Wichmann Cruz iniciou sua trajetória profissional no Judiciário gaúcho, onde conheceu de perto os desafios do universo jurídico e a rotina de escritórios de advocacia. Foi a partir dessa vivência que, em 2003, projetou e estudou por três anos o modelo de negócio que daria origem à Judice, em Porto Alegre/RS.",
    highlights: [
      "Fundou a Judice Online em 2003, pioneira no Brasil no fornecimento de cópias processuais digitalizadas pela internet.",
      "Conduziu a transformação da empresa de correspondência jurídica local para uma operação de atuação nacional.",
      "Liderou o reposicionamento da marca em 2018, de Judice Online para simplesmente Judice.",
      "Mais de 20 anos de experiência acompanhando a evolução da correspondência e da logística jurídica no Brasil.",
    ],
  },
  {
    slug: "fabio",
    name: "Fábio Joel",
    role: "Diretor de Operações",
    image: "/images/team/fabio.png",
    email: "fabiojoel@judice.com.br",
    linkedin: "https://www.linkedin.com/in/f%C3%A1bio-bueno-farias-b1975287",
    bio: "Administrador de Empresas, com pós-graduação em Desenvolvimento Humano nas Organizações e em Marketing Digital, Fábio Joel integra a Judice desde 2006, tendo passado por diferentes frentes da operação até assumir a diretoria de operações da empresa.",
    highlights: [
      "Na Judice desde 2006, com passagem por diferentes áreas operacionais da empresa.",
      "Liderou a expansão da operação da Judice para Santa Catarina.",
      "Conduziu a reestruturação da unidade de São Paulo.",
      "Responsável pela implantação do serviço de audiências da Judice.",
    ],
  },
];

export function getTeamMemberBySlug(slug: string) {
  return TEAM.find((member) => member.slug === slug);
}
