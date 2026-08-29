const SOLUTION_ICON_PATHS: Record<string, string> = {
  audiencias: "M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
  "copias-de-processos": "M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zM14 3v5h5M9 13h6M9 17h6",
  "digitalizacoes-internas": "M4 7h16v13H4zM4 7l3-4h10l3 4M9 12h6M9 16h6",
  "processo-eletronico": "M4 5h16v11H4zM8 21h8M12 16v5M7 9l3 2-3 2M13 13h4",
  "retiradas-e-distribuicao": "M20 12V8a2 2 0 00-2-2h-4l-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2h5M16 19l2 2 4-4",
  "visitas-in-loco": "M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  pericias: "M9 3h6l1 4h-8l1-4zM7 7h10l2 13a1 1 0 01-1 1H6a1 1 0 01-1-1L7 7zM10 11v6M14 11v6",
  "diligencias-extrajudiciais": "M14 3v5h5M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zM9 13h1M9 17h6",
};

export default function SolutionIcon({ slug, className = "" }: { slug: string; className?: string }) {
  const d = SOLUTION_ICON_PATHS[slug];
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}
