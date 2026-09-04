import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import CorrespondentForm from "@/components/CorrespondentForm";

export const metadata: Metadata = {
  title: "Seja Correspondente, Judice",
  description:
    "Cadastre-se na rede de correspondentes Judice e receba solicitações de audiências, perícias e diligências em todo o Brasil.",
};

export default function SejaCorrespondente() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            className="object-cover blur-xs scale-105"
          />
          <div className="absolute inset-0 bg-white/60" />

          <div className="relative mx-auto max-w-3xl rounded-2xl bg-white px-4 py-10 shadow-xl sm:px-10">
            <div className="mb-10 space-y-3">
              <span className="text-sm font-medium text-zinc-500">
                Cadastro de correspondente
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Faça parte da maior rede de correspondentes jurídicos do
                Brasil
              </h1>
              <p className="text-base leading-relaxed text-zinc-600">
                Cadastre-se e passe a receber solicitações de audiências,
                perícias e diligências em sua região, com pagamento garantido
                e suporte da nossa equipe. Leva poucos minutos.
              </p>
            </div>
            <CorrespondentForm />
          </div>
        </section>
      </main>
    </div>
  );
}
