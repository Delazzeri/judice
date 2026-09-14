import type { Metadata } from "next";
import Header from "@/components/Header";
import PersonProfile from "@/components/PersonProfile";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, COMPANY } from "@/lib/company";
import { getTeamMemberBySlug } from "@/lib/team";
import { notFound } from "next/navigation";

const member = getTeamMemberBySlug("rodrigo");

export const metadata: Metadata = {
  title: "Rodrigo Wichmann Cruz, Fundador da Judice",
  description: member?.bio,
  alternates: {
    canonical: "/sobre/rodrigo",
  },
  openGraph: {
    title: "Rodrigo Wichmann Cruz, Fundador da Judice",
    description: member?.bio,
    url: `${SITE_URL}/sobre/rodrigo`,
    images: member ? [{ url: member.image, width: 1200, height: 1500 }] : undefined,
  },
};

export default function RodrigoPage() {
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
