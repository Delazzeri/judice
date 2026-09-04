import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Área do Cliente, Judice",
  description:
    "Acesse sua conta Judice ou cadastre-se para solicitar audiências, perícias e diligências em todo o Brasil.",
};

export default function Entrar() {
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
            <div className="mb-10">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Área do cliente
              </h1>
            </div>
            <LoginForm />
          </div>
        </section>
      </main>
    </div>
  );
}
