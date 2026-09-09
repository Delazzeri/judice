import Image from "next/image";
import SectionHeading from "./SectionHeading";

type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const MEMBERS: Member[] = [
  {
    name: "Rodrigo Wichmann Cruz",
    role: "Fundador da Judice",
    bio: "Formado em Ciências Contábeis, iniciou sua trajetória no Judiciário gaúcho, onde conheceu de perto os desafios do universo jurídico. Em 2003, fundou a Judice para transformar a forma como escritórios realizam diligências fora de suas localidades — hoje uma empresa com atuação em todo o Brasil.",
    image: "/images/team/rodrigo.png",
  },
  {
    name: "Fábio Joel",
    role: "Diretor de Operações",
    bio: "Administrador de Empresas, com pós-graduação em Desenvolvimento Humano nas Organizações e em Marketing Digital. Na Judice desde 2006, liderou a expansão para Santa Catarina, a reestruturação da unidade de São Paulo e a implantação do serviço de audiências.",
    image: "/images/team/fabio.png",
  },
];

export default function TeamMembers() {
  return (
    <section className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-8 sm:py-16">
      <SectionHeading
        eyebrow="Quem está por trás"
        title="As pessoas que constroem a Judice"
        description="Mais de duas décadas de experiência à frente da operação, unindo conhecimento do Judiciário, tecnologia e gestão de pessoas."
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {MEMBERS.map((member) => (
          <div
            key={member.name}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-200 p-6 sm:flex-row sm:gap-6"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-zinc-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-base font-semibold text-zinc-900">
                  {member.name}
                </p>
                <p className="text-sm text-judice-blue">{member.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
