"use client";

import { useState } from "react";

const SYSTEM_LOGIN_URL = "https://judice.com.br/judice/judiceSite/login.jsp";

export default function LoginForm() {
  const [documento, setDocumento] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // O login em si acontece no sistema legado — este formulário só
    // encaminha as credenciais para lá.
    window.location.href = SYSTEM_LOGIN_URL;
  }

  function handleAdvance(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = SYSTEM_LOGIN_URL;
  }

  return (
    <div className="grid grid-cols-1 divide-y divide-zinc-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
      <form onSubmit={handleSubmit} className="space-y-5 pb-8 sm:pb-0 sm:pr-8">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-zinc-900 uppercase">
            Já sou cliente
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Acesse o sistema com seu login e senha.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="login" className="text-sm font-medium text-zinc-700">
              Login
            </label>
            <input
              id="login"
              name="login"
              type="text"
              required
              className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
              placeholder="Seu usuário"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="senha" className="text-sm font-medium text-zinc-700">
                Senha
              </label>
              <a href={SYSTEM_LOGIN_URL} className="text-xs font-medium text-judice-blue hover:underline">
                Esqueceu sua senha?
              </a>
            </div>
            <input
              id="senha"
              name="senha"
              type="password"
              required
              className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
              placeholder="Sua senha"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-judice-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-judice-navy/90 sm:w-auto"
        >
          Entrar
        </button>
      </form>

      <form onSubmit={handleAdvance} className="space-y-5 pt-8 sm:pt-0 sm:pl-8">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-zinc-900 uppercase">
            Não sou cliente
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500">
            Para fazer um pedido, ou mesmo para visualizar e experimentar o
            sistema, é indispensável o seu cadastramento. O cadastro é
            gratuito.
          </p>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="documento" className="text-sm font-medium text-zinc-700">
            CPF ou CNPJ
          </label>
          <input
            id="documento"
            name="documento"
            type="text"
            required
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-judice-navy"
            placeholder="000.000.000-00"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md border border-judice-navy px-6 py-3 text-sm font-semibold text-judice-navy transition-colors hover:bg-judice-navy hover:text-white sm:w-auto"
        >
          Avançar
        </button>
      </form>
    </div>
  );
}
