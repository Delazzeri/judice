import Image from "next/image";
import SectionHeading from "./SectionHeading";

type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
};

const MEMBERS: Member[] = [
  {
    name: "Rodrigo Wichmann Cruz",
    role: "Fundador da Judice",
    bio: "Formado em Ciências Contábeis, iniciou sua trajetória no Judiciário gaúcho, onde conheceu de perto os desafios do universo jurídico. Em 2003, fundou a Judice para transformar a forma como escritórios realizam diligências fora de suas localidades, hoje uma empresa com atuação em todo o Brasil.",
    image: "/images/team/rodrigo.png",
    email: "rodrigo@judice.com.br",
  },
  {
    name: "Fábio Joel",
    role: "Diretor de Operações",
    bio: "Administrador de Empresas, com pós-graduação em Desenvolvimento Humano nas Organizações e em Marketing Digital. Na Judice desde 2006, liderou a expansão para Santa Catarina, a reestruturação da unidade de São Paulo e a implantação do serviço de audiências.",
    image: "/images/team/fabio.png",
    email: "fabiojoel@judice.com.br",
  },
];

function EmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM3.5 6l8.5 6.5L20.5 6" />
    </svg>
  );
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.5 20h-3.37v-5.9c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.54-2.27 3.12V20H9.53V8.5h3.24v1.57h.05c.45-.86 1.56-1.76 3.21-1.76 3.43 0 4.47 2.26 4.47 5.2V20z" />
    </svg>
  );
}

export default function TeamMembers() {
  return (
    <section className="relative overflow-hidden bg-judice-navy py-16 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-32 hidden h-[520px] w-[520px] opacity-[0.04] md:block"
      >
        <Image
          src="/images/logos/logo_simbolo_nova.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-12 px-4 sm:px-8">
        <SectionHeading
          eyebrow="Time Judice"
          title="Quem está à frente"
          description="Especialistas que conectam conhecimento do Judiciário, tecnologia e gestão de pessoas para sustentar a evolução da Judice."
          tone="dark"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
          {MEMBERS.map((member) => (
            <div
              key={member.name}
              className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-judice-blue-light">{member.role}</p>
                  <p className="text-xl font-bold tracking-tight text-white">
                    {member.name}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  {member.bio}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${member.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-judice-navy"
                    >
                      <LinkedinIcon className="h-4.5 w-4.5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Enviar e-mail para ${member.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-judice-navy"
                    >
                      <EmailIcon className="h-4.5 w-4.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
