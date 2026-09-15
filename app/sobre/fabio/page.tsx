import type { Metadata } from "next";
import Header from "@/components/Header";
import PersonProfile from "@/components/PersonProfile";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, COMPANY } from "@/lib/company";
import { getTeamMemberBySlug } from "@/lib/team";
import { notFound } from "next/navigation";

const member = getTeamMemberBySlug("fabio");

export const metadata: Metadata = {
  title: "Fábio Joel Bueno Farias, Diretor de Operações da Judice",
  description: member?.bio,
  alternates: {
    canonical: "/sobre/fabio",
  },
  openGraph: {
    title: "Fábio Joel Bueno Farias, Diretor de Operações da Judice",
    description: member?.bio,
    url: `${SITE_URL}/sobre/fabio`,
    images: member ? [{ url: member.image, width: 1200, height: 1500 }] : undefined,
  },
};

export default function FabioPage() {
  if (!member) notFound();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: { "@type": "Organization", name: COMPANY.legalName, url: SITE_URL },
    email: member.email,
    sameAs: member.linkedin ? [member.linkedin] : undefined,
    description: member.bio,
  };

  return (
    <div className="flex flex-1 flex-col">
      <JsonLd data={personJsonLd} />
      <Header />
      <main className="flex-1">
        <PersonProfile member={member} />
      </main>
      <Footer />
    </div>
  );
}
