type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`max-w-2xl space-y-4 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className={`text-sm font-medium ${isDark ? "text-white/60" : "text-zinc-500"}`}>
        {eyebrow}
      </span>
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
          isDark ? "text-white" : "text-zinc-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${isDark ? "text-white/70" : "text-zinc-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
