"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/company";
import { EmailIcon, WhatsappIcon } from "./ContactIcons";

const SUBJECTS = [
  "Contratar correspondência jurídica",
  "Solicitar orçamento",
  "Acompanhar uma solicitação",
  "Parcerias",
  "Outro assunto",
];

const INPUT_CLASS =
  "w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-judice-navy";

type Channel = "whatsapp" | "email";

/**
 * Formulário sem backend: monta a mensagem a partir dos campos e abre o
 * WhatsApp (ou o cliente de e-mail) já com o texto preenchido. Assim
 * funciona igual em qualquer stack — inclusive após a migração para JSP.
 */
export default function ContactForm() {
  const [channel, setChannel] = useState<Channel>("whatsapp");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const nome = get("nome");
    const escritorio = get("escritorio");
    const email = get("email");
    const telefone = get("telefone");
    const assunto = get("assunto");
    const mensagem = get("mensagem");

    const lines = [
      `Olá! Meu nome é ${nome}${escritorio ? `, do escritório ${escritorio}` : ""}.`,
      "",
      mensagem,
      "",
      `E-mail: ${email}`,
      telefone ? `Telefone: ${telefone}` : "",
    ].filter((line, i, arr) => line !== "" || arr[i - 1] !== "");

    const body = lines.join("\n").trim();

    const url =
      channel === "whatsapp"
        ? `${COMPANY.whatsappHref}?text=${encodeURIComponent(`*${assunto}*\n\n${body}`)}`
        : `mailto:${COMPANY.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;

    if (channel === "whatsapp") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="space-y-2">
          <label htmlFor="nome" className="text-sm font-medium text-zinc-700">
            Nome
          </label>
          <input id="nome" name="nome" type="text" required autoComplete="name" className={INPUT_CLASS} placeholder="Seu nome completo" />
        </div>

        <div className="space-y-2">
          <label htmlFor="escritorio" className="text-sm font-medium text-zinc-700">
            Escritório <span className="font-normal text-zinc-400">(opcional)</span>
          </label>
          <input id="escritorio" name="escritorio" type="text" autoComplete="organization" className={INPUT_CLASS} placeholder="Nome do escritório ou empresa" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            E-mail
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={INPUT_CLASS} placeholder="voce@escritorio.com.br" />
        </div>

        <div className="space-y-2">
          <label htmlFor="telefone" className="text-sm font-medium text-zinc-700">
            Telefone <span className="font-normal text-zinc-400">(opcional)</span>
          </label>
          <input id="telefone" name="telefone" type="tel" autoComplete="tel" className={INPUT_CLASS} placeholder="(00) 00000-0000" />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="assunto" className="text-sm font-medium text-zinc-700">
            Assunto
          </label>
          <select id="assunto" name="assunto" required defaultValue={SUBJECTS[0]} className={INPUT_CLASS}>
            {SUBJECTS.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="mensagem" className="text-sm font-medium text-zinc-700">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            required
            className={`${INPUT_CLASS} resize-y`}
            placeholder="Conte como podemos ajudar: tipo de serviço, cidade, data…"
          />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-zinc-700">Enviar por</legend>
        <div className="grid grid-cols-2 gap-2 rounded-lg bg-zinc-100 p-1">
          {(
            [
              { value: "whatsapp", label: "WhatsApp", Icon: WhatsappIcon },
              { value: "email", label: "E-mail", Icon: EmailIcon },
            ] as const
          ).map(({ value, label, Icon }) => (
            <label
              key={value}
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                channel === value ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <input
                type="radio"
                name="canal"
                value={value}
                checked={channel === value}
                onChange={() => setChannel(value)}
                className="sr-only"
              />
              <Icon className={`h-4 w-4 ${value === "whatsapp" && channel === value ? "text-[#25D366]" : ""}`} />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-zinc-500">
          {channel === "whatsapp"
            ? "Abriremos o WhatsApp com sua mensagem pronta para enviar."
            : "Abriremos seu aplicativo de e-mail com a mensagem pronta para enviar."}
        </p>
        <button
          type="submit"
          className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-colors ${
            channel === "whatsapp" ? "bg-[#1faa53] hover:bg-[#1a9147]" : "bg-judice-navy hover:bg-judice-navy/90"
          }`}
        >
          {channel === "whatsapp" ? <WhatsappIcon className="h-4 w-4" /> : <EmailIcon className="h-4 w-4" />}
          Enviar mensagem
        </button>
      </div>
    </form>
  );
}
