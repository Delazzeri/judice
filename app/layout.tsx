import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import JsonLd from "@/components/JsonLd";
import { COMPANY, SITE_URL } from "@/lib/company";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "A Judice oferece correspondência jurídica terceirizada, com foco em representação em audiências, presenciais e virtuais.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Judice, Correspondência Jurídica",
    template: "%s | Judice",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Judice",
    title: "Judice, Correspondência Jurídica",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Judice, Correspondência Jurídica",
    description: SITE_DESCRIPTION,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  url: SITE_URL,
  email: COMPANY.email,
  foundingDate: COMPANY.foundingDate,
  founder: { "@type": "Person", name: COMPANY.founder },
  sameAs: COMPANY.sameAs,
  description:
    "Empresa de correspondência jurídica e logística jurídica com atuação em todo o Brasil.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Judice",
  url: SITE_URL,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <AccessibilityProvider>
          {children}
          <WhatsappButton />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
