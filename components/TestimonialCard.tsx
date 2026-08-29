import Image from "next/image";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  logo?: string;
  tone?: "light" | "dark";
};

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  logo,
  tone = "light",
}: TestimonialCardProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex h-full flex-col justify-between space-y-6 rounded-lg border p-6 ${
        isDark ? "border-white/10 bg-white/5" : "border-zinc-200"
      }`}
    >
      <div className="space-y-4">
        {company && (
          <p
            className={`text-lg font-bold tracking-tight ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            {company}
          </p>
        )}
        <p
          className={`text-sm leading-relaxed ${
            isDark ? "text-white/70" : "text-zinc-700"
          }`}
        >
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-3">
        {logo ? (
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <Image src={logo} alt="" fill className="object-cover" />
          </div>
        ) : (
          <div
            aria-hidden
            className={`h-8 w-8 shrink-0 rounded-full ${
              isDark ? "bg-judice-blue-light/30" : "bg-emerald-100"
            }`}
          />
        )}
        <div>
          <p
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            {name}
          </p>
          <p className={`text-xs ${isDark ? "text-white/50" : "text-zinc-500"}`}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
