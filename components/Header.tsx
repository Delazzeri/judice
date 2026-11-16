"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SOLUTIONS } from "@/lib/solutions";
import { COMPANY } from "@/lib/company";
import SolutionIcon from "./SolutionIcon";
import { useAccessibility } from "./AccessibilityProvider";

const NAV_LINKS_BEFORE = [{ label: "Home", href: "/" }, { label: "Sobre Nós", href: "/sobre" }];
const NAV_LINKS_AFTER = [
  { label: "Seja Correspondente", href: "https://www.judiceonline.com.br/judice/judiceSite/correspondente.jsp" },
  { label: "Contato", href: "/contato" },
];

const LOGIN_URL = COMPANY.loginUrl;
const CONTACT_WHATSAPP_HREF = COMPANY.whatsappHref;

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
              href="/#solucoes"
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

          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={LOGIN_URL}
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

          <div className="mt-2 flex flex-col gap-2 border-t border-zinc-100 pt-4">
            <a
              href={LOGIN_URL}
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
