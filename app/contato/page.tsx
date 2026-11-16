import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { ArrowIcon, EmailIcon, PhoneIcon, WhatsappIcon } from "@/components/ContactIcons";
import { COMPANY, SITE_URL } from "@/lib/company";

const PAGE_DESCRIPTION =
  "Fale com a Judice pelo WhatsApp, e-mail ou telefone. Nossa equipe está pronta para atender sua demanda de correspondência jurídica em todo o Brasil.";

export const metadata: Metadata = {
  title: "Contato, Judice",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato, Judice",
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/contato`,
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630 }],
  },
};

const WHATSAPP_GREETING = `${COMPANY.whatsappHref}?text=${encodeURIComponent(
  "Olá! Vim pelo site da Judice e gostaria de falar sobre correspondência jurídica."
)}`;

const SECONDARY_CHANNELS = [
  {
    label: "E-mail",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    hint: "Ideal para enviar documentos e detalhes da demanda.",
    Icon: EmailIcon,
  },
  {
    label: "Telefone",
    value: COMPANY.phoneDisplay,
    href: COMPANY.phoneHref,
    hint: "Fale diretamente com nossa equipe de atendimento.",
    Icon: PhoneIcon,
  },
];

const SHORTCUTS = [
  {
    title: "Já é cliente?",
    description: "Acesse o sistema para solicitar e acompanhar suas diligências.",
    label: "Entrar no sistema",
    href: COMPANY.loginUrl,
  },
  {
    title: "Quer ser correspondente?",
    description: "Cadastre-se e faça parte da nossa rede nacional de profissionais.",
    label: "Seja correspondente",
    href: "https://www.judiceonline.com.br/judice/judiceSite/correspondente.jsp",
  },
];

export default function Contato() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image="/images/hero.jpg"
          title="Fale com a Judice"
          description="Estamos prontos para ajudar seu escritório com audiências, diligências e toda a correspondência jurídica em qualquer lugar do Brasil."
        />

        {/* Destaque: WhatsApp */}
        <section className="relative z-10 mx-auto -mt-16 w-full max-w-7xl px-4 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-judice-navy p-8 shadow-2xl shadow-judice-navy/20 sm:p-12">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#25D366]/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(125,166,224,0.12),_transparent_60%)]" />

            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white/80">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
                  </span>
                  Canal mais rápido
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Fale agora pelo WhatsApp
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-white/70">
                  Tire dúvidas, solicite um orçamento ou acompanhe uma
                  demanda diretamente com nossa equipe, sem formulários e
                  sem espera.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <a
                  href={WHATSAPP_GREETING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-4 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-judice-navy transition-all hover:bg-[#2ee072] hover:shadow-lg hover:shadow-[#25D366]/30"
                >
                  <WhatsappIcon className="h-6 w-6" />
                  Iniciar conversa
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-center text-sm text-white/60 lg:text-right">
                  ou adicione{" "}
                  <span className="font-semibold text-white">{COMPANY.whatsappDisplay}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outros canais + formulário */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-8 lg:col-span-5">
              <div className="space-y-4">
                <span className="text-sm font-medium text-zinc-500">Outros canais</span>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                  Prefere outro meio?{" "}
                  <span className="text-judice-blue">Estamos por aqui.</span>
                </h2>
              </div>

              <div className="space-y-4">
                {SECONDARY_CHANNELS.map(({ label, value, href, hint, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-start gap-4 rounded-2xl border border-zinc-200 p-6 transition-all hover:border-judice-navy/20 hover:shadow-lg hover:shadow-zinc-200/60"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-judice-navy/5 text-judice-navy transition-colors group-hover:bg-judice-navy group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1 space-y-1">
                      <span className="block text-sm font-medium text-zinc-500">{label}</span>
                      <span className="block break-words text-base font-semibold text-zinc-900">{value}</span>
                      <span className="block text-sm leading-relaxed text-zinc-500">{hint}</span>
                    </span>
                    <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-zinc-300 transition-all group-hover:translate-x-1 group-hover:text-judice-navy" />
                  </a>
                ))}
              </div>

              <div className="space-y-4 border-t border-zinc-200 pt-8">
                {SHORTCUTS.map((shortcut) => (
                  <div key={shortcut.title} className="space-y-1">
                    <p className="text-sm font-semibold text-zinc-900">{shortcut.title}</p>
                    <p className="text-sm leading-relaxed text-zinc-500">{shortcut.description}</p>
                    <a
                      href={shortcut.href}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-judice-blue transition-colors hover:text-judice-navy"
                    >
                      {shortcut.label}
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 lg:p-12">
                <div className="mb-8 space-y-2">
                  <h2 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                    Envie uma mensagem
                  </h2>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    Preencha os campos abaixo e escolha como prefere enviar.
                    Retornamos o quanto antes.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
