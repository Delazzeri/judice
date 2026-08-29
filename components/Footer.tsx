import Image from "next/image";

const FOOTER_COLUMNS = [
  {
    title: "Páginas",
    links: [
      { label: "Home", href: "/#hero" },
      { label: "Sobre nós", href: "/sobre" },
      { label: "Soluções", href: "/#solucoes" },
      { label: "Correspondente", href: "/seja-correspondente" },
    ],
  },
  {
    title: "Saiba mais",
    links: [
      { label: "Histórico", href: "/#numeros" },
      { label: "Feedbacks", href: "/#feedbacks" },
      { label: "Destaques", href: "/#destaques" },
    ],
  },
  {
    title: "Suporte",
    links: [{ label: "Contato", href: "mailto:judice@judice.com.br" }],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61590731609237",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.5 1.53-1.5H16.5V4.35C16.24 4.32 15.36 4.25 14.33 4.25c-2.15 0-3.63 1.31-3.63 3.72V10.5H8v3h2.7V21h2.8z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/judice-solu%C3%A7%C3%B5es-eletr%C3%B4nicas-b3671842/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.5 20h-3.37v-5.9c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.54-2.27 3.12V20H9.53V8.5h3.24v1.57h.05c.45-.86 1.56-1.76 3.21-1.76 3.43 0 4.47 2.26 4.47 5.2V20z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-judice-navy py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:gap-12 sm:px-8 md:grid-cols-4">
        <Image
          src="/images/logos/logo_extenso.png"
          alt="Judice"
          width={220}
          height={64}
          className="col-span-2 h-16 w-auto object-contain md:col-span-1"
        />
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title} className="space-y-4">
            <p className="text-sm font-semibold text-white">{column.title}</p>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {column.title === "Suporte" && (
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
