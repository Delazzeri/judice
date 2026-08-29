"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SOLUTIONS } from "@/lib/solutions";
import SolutionIcon from "./SolutionIcon";
import { useAccessibility } from "./AccessibilityProvider";

const NAV_LINKS_BEFORE = [{ label: "Home", href: "/" }, { label: "Sobre Nós", href: "/sobre" }];
const NAV_LINKS_AFTER = [
  { label: "Seja Correspondente", href: "/seja-correspondente" },
];

const LOGIN_URL = "/entrar";
const CONTACT_EMAIL = "judice@judice.com.br";
const CONTACT_WHATSAPP_DISPLAY = "51 98345-8538";
const CONTACT_WHATSAPP_HREF = "https://wa.me/5551983458538";

function EmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM3.5 6l8.5 6.5L20.5 6" />
    </svg>
  );
}

function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2.01 6.477 2.01 11.995c0 1.994.585 3.848 1.588 5.408L2 22l4.72-1.556a9.94 9.94 0 005.284 1.5h.004c5.518 0 9.994-4.477 9.994-9.994C22.002 6.477 17.522 2 12.004 2zm0 18.13a8.12 8.12 0 01-4.14-1.132l-.297-.176-3.075 1.014.99-3.083-.194-.31a8.116 8.116 0 01-1.28-4.448c0-4.489 3.652-8.14 8.15-8.14 4.487 0 8.135 3.651 8.135 8.14 0 4.489-3.65 8.135-8.29 8.135z" />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 ${className}`} fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { highContrast, grayscale, toggleHighContrast, toggleGrayscale } = useAccessibility();

  useEffect(() => {
    // Throttle via requestAnimationFrame: evita disparar setState (e, com
    // ele, a transição CSS) mais de uma vez por frame durante um scroll
    // rápido, o que fazia o header "tremer" ao alternar de estado antes da
    // animação anterior terminar.
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-100/80 bg-white/80 backdrop-blur-md">
      {/* Barra utilitária */}
      <div
        className={`hidden grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-200 ease-out lg:grid ${
          isScrolled ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        }`}
      >
        <div
          className={`overflow-hidden border-b border-zinc-100/80 transition-[border-color] duration-200 ${
            isScrolled ? "border-b-transparent" : ""
          }`}
        >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs text-zinc-500">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={toggleHighContrast}
              aria-pressed={highContrast}
              className={`flex items-center gap-1 transition-colors hover:text-zinc-900 ${
                highContrast ? "font-semibold text-zinc-900" : ""
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <rect x="3" y="7" width="18" height="10" rx="5" />
                <circle cx="9" cy="12" r="3.5" fill="currentColor" stroke="none" />
              </svg>
              Alto contraste
            </button>
            <button
              type="button"
              onClick={toggleGrayscale}
              aria-pressed={grayscale}
              className={`flex items-center gap-1 transition-colors hover:text-zinc-900 ${
                grayscale ? "font-semibold text-zinc-900" : ""
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" d="M12 3a9 9 0 010 18z" fill="currentColor" stroke="none" />
              </svg>
              Escala de cinza
            </button>
            <a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-zinc-900"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H9l-4 3.5V16H6a2 2 0 01-2-2V6z" />
              </svg>
              Suporte ao cliente
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href={LOGIN_URL} className="transition-colors hover:text-zinc-900">
              Entrar
            </a>
            <a href="/sobre" className="transition-colors hover:text-zinc-900">
              Sobre
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* Barra principal */}
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-[padding] duration-200 ease-out sm:px-8 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="flex items-center gap-10">
          <a href="/" className="relative block h-8 w-32 shrink-0">
            <Image
              src="/images/logos/logo_nome_azul.png"
              alt="Judice"
              fill
              className={`object-contain object-left transition-opacity duration-200 ease-out ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
            <Image
              src="/images/logos/logo_simbolo_azul.png"
              alt="Judice"
              fill
              className={`object-contain object-left transition-opacity duration-200 ease-out ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV_LINKS_BEFORE.map((link) => (
              <a
                key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}

          <div className="group relative">
            <a
              href="/solucoes"
              className="flex items-center gap-1 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
            >
              Soluções
              <ChevronIcon className="transition-transform duration-150 group-hover:rotate-180" />
            </a>
            <div className="invisible absolute top-full left-0 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid w-[720px] grid-cols-2 gap-1 rounded-lg border border-zinc-100 bg-white p-3 shadow-xl">
                {SOLUTIONS.map((solution) => (
                  <a
                    key={solution.slug}
                    href={`/solucoes/${solution.slug}`}
                    className="flex items-start gap-3 rounded-md px-3 py-2 transition-colors hover:bg-zinc-50"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-judice-navy/5 text-judice-navy">
                      <SolutionIcon slug={solution.slug} className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <p className="text-sm font-semibold text-zinc-900">
                        {solution.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        {solution.description}
                      </p>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

            {NAV_LINKS_AFTER.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
              >
                Contato
                <ChevronIcon className="transition-transform duration-150 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute top-full left-0 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="w-64 space-y-1 rounded-lg border border-zinc-100 bg-white p-2 shadow-xl">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-zinc-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-judice-navy/5 text-judice-navy">
                      <EmailIcon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <p className="text-sm font-semibold text-zinc-900">E-mail</p>
                      <p className="text-xs text-zinc-500">{CONTACT_EMAIL}</p>
                    </span>
                  </a>
                  <a
                    href={CONTACT_WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-zinc-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-judice-navy/5 text-judice-navy">
                      <WhatsappIcon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <p className="text-sm font-semibold text-zinc-900">WhatsApp</p>
                      <p className="text-xs text-zinc-500">{CONTACT_WHATSAPP_DISPLAY}</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/entrar"
            className="rounded-md bg-judice-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-judice-navy/90"
          >
            Cadastre-se
          </a>
          <a
            href={LOGIN_URL}
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            Entrar
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center text-zinc-900 lg:hidden"
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mx-4 mb-4 flex flex-col gap-1 rounded-lg border border-zinc-100 bg-white p-4 shadow-lg sm:mx-8 lg:hidden">
          {NAV_LINKS_BEFORE.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            aria-expanded={isSolutionsOpen}
            onClick={() => setIsSolutionsOpen((open) => !open)}
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
          >
            Soluções
            <ChevronIcon className={`transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`} />
          </button>
          {isSolutionsOpen && (
            <div className="ml-3 flex flex-col gap-1 border-l border-zinc-200 pl-3">
              {SOLUTIONS.map((solution) => (
                <a
                  key={solution.slug}
                  href={`/solucoes/${solution.slug}`}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                >
                  <SolutionIcon slug={solution.slug} className="h-4 w-4 shrink-0 text-judice-navy" />
                  {solution.title}
                </a>
              ))}
            </div>
          )}

          {NAV_LINKS_AFTER.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            aria-expanded={isContactOpen}
            onClick={() => setIsContactOpen((open) => !open)}
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
          >
            Contato
            <ChevronIcon className={`transition-transform duration-200 ${isContactOpen ? "rotate-180" : ""}`} />
          </button>
          {isContactOpen && (
            <div className="ml-3 flex flex-col gap-1 border-l border-zinc-200 pl-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
              >
                <EmailIcon className="h-4 w-4 shrink-0 text-judice-navy" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={CONTACT_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
              >
                <WhatsappIcon className="h-4 w-4 shrink-0 text-judice-navy" />
                {CONTACT_WHATSAPP_DISPLAY}
              </a>
            </div>
          )}

          <div className="mt-2 flex flex-col gap-2 border-t border-zinc-100 pt-4">
            <a
              href="/entrar"
              className="rounded-md bg-judice-navy px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Cadastre-se
            </a>
            <a
              href={LOGIN_URL}
              className="rounded-md border border-zinc-300 px-4 py-2 text-center text-sm font-semibold text-zinc-900"
            >
              Entrar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
