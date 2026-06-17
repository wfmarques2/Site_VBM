import { SectionShell } from "@/components/common/section-shell";
import { useLanguage } from "@/lib/i18n/useLanguage";

export function QuemSomosSection() {
  const { t } = useLanguage();

  return (
    <SectionShell
      id="quem-somos"
      title={t.about.title}
      subtitle={t.about.subtitle}
    >
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
        {t.about.paragraphs?.map((paragraph, index) => (
          <p 
            key={index}
            className="text-base leading-8 text-zinc-300 mb-6"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
        
        <div className="mt-10 pt-8 border-t border-zinc-800 text-center">
          <h3 className="text-xl font-bold text-amber-400 mb-2">
            {t.about.closing?.name}
          </h3>
          <p className="text-sm italic text-zinc-400">
            {t.about.closing?.tagline}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
