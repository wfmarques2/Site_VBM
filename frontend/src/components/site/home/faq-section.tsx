import { ChevronDown } from "lucide-react";
import { SectionShell } from "@/components/common/section-shell";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { faqs as mockFaqs } from "./mock-data";

export function FaqSection() {
  const { t } = useLanguage();
  const faqs = t.faq?.items || mockFaqs;

  return (
    <SectionShell id="faq" title={t.faq.title} subtitle={t.faq.subtitle}>
      <div className="space-y-3">
        {faqs.map((item) => (
          <details key={item.question} className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-zinc-100">
              {item.question}
              <ChevronDown className="h-4 w-4 text-zinc-400 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
