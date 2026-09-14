import Image from "next/image";
import type { TeamMember } from "@/lib/team";

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

export default function PersonProfile({ member }: { member: TeamMember }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-8 sm:py-24">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[280px_1fr] sm:gap-12">
        <div className="space-y-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100">
            <Image src={member.image} alt={member.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-judice-navy/5 px-4 py-2 text-sm font-medium text-judice-navy transition-colors hover:bg-judice-navy hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
                Ver no LinkedIn
              </a>
            )}
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center gap-2 rounded-full bg-judice-navy/5 px-4 py-2 text-sm font-medium text-judice-navy transition-colors hover:bg-judice-navy hover:text-white"
            >
              <EmailIcon className="h-4 w-4" />
              Enviar e-mail
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-medium text-judice-blue">{member.role}</p>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {member.name}
            </h1>
          </div>

          <p className="text-base leading-relaxed text-zinc-600">{member.bio}</p>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Trajetória
            </h2>
            <ul className="space-y-3 border-t border-zinc-200 pt-4">
              {member.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-zinc-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-judice-blue" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
