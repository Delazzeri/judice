"use client";

import { useState } from "react";

type Status = "idle" | "loading-cep" | "submitted";

export default function CorrespondentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  async function handleCepBlur(value: string) {
    const digits = value.replace(/\D/g, "");
    if (digits.length !== 8) return;

    setStatus("loading-cep");
    try {
      const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
      const data = await res.json();
      if (!data.erro) {
        setEndereco(`${data.logradouro ?? ""}${data.bairro ? `, ${data.bairro}` : ""}`);
        setCidade(data.localidade ?? "");
        setEstado(data.uf ?? "");
      }
    } catch {
      // Falha silenciosa: o usuário preenche manualmente.
    } finally {
      setStatus("idle");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Cadastro apenas visual por enquanto — sem envio real de dados.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-10 text-center">
        <h2 className="text-xl font-bold text-zinc-900">
          Cadastro recebido!
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          Obrigado pelo interesse em fazer parte da rede de correspondentes
          Judice. Nossa equipe vai analisar suas informações e entrar em
          contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="nome" className="text-sm font-medium text-zinc-700">
            Nome completo
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
            placeholder="Seu nome completo"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
            placeholder="voce@email.com"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="telefone" className="text-sm font-medium text-zinc-700">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cep" className="text-sm font-medium text-zinc-700">
            CEP
          </label>
          <div className="relative">
            <input
              id="cep"
              name="cep"
              type="text"
              required
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={(e) => handleCepBlur(e.target.value)}
              className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
              placeholder="00000-000"
            />
            {status === "loading-cep" && (
              <span className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 animate-spin rounded-full border-2 border-zinc-300 border-t-judice-navy" />
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cidade" className="text-sm font-medium text-zinc-700">
            Cidade
          </label>
          <input
            id="cidade"
            name="cidade"
            type="text"
            required
            value={estado ? `${cidade} - ${estado}` : cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
            placeholder="Sua cidade"
          />
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="endereco" className="text-sm font-medium text-zinc-700">
            Endereço
          </label>
          <input
            id="endereco"
            name="endereco"
            type="text"
            required
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
            placeholder="Rua, número, bairro"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="cidades-atuacao" className="text-sm font-medium text-zinc-700">
          Cidades onde pode ou pretende ser correspondente
        </label>
        <textarea
          id="cidades-atuacao"
          name="cidades-atuacao"
          rows={4}
          required
          className="w-full resize-y rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
          placeholder="Ex: Porto Alegre/RS, Canoas/RS, São Leopoldo/RS"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="observacoes" className="text-sm font-medium text-zinc-700">
          Observações adicionais
        </label>
        <textarea
          id="observacoes"
          name="observacoes"
          rows={4}
          className="w-full resize-y rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
          placeholder="Conte um pouco mais sobre sua experiência ou disponibilidade"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-judice-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-judice-navy/90 sm:w-auto"
      >
        Enviar cadastro
      </button>
    </form>
  );
}
