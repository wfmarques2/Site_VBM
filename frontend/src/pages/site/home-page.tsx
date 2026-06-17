import { HeroSection } from "@/components/site/home/hero-section";
import { DiferenciaisSection } from "@/components/site/home/diferenciais-section";
import { ServicesSection } from "@/components/site/home/services-section";
import { PaymentSection } from "@/components/site/home/payment-section";
import { QuemSomosSection } from "@/components/site/home/quem-somos-section";
import { ReservasSection } from "@/components/site/home/reservas-section";
import { PasseiosSection } from "@/components/site/home/passeios-section";
import { FrotaSection } from "@/components/site/home/frota-section";
import { GaleriaSection } from "@/components/site/home/galeria-section";
import { StatsCounter } from "@/components/common/app-layout";
import { AvaliacoesSection } from "@/components/site/home/avaliacoes-section";
import { OrcamentoSection } from "@/components/site/home/orcamento-section";
import { FaqSection } from "@/components/site/home/faq-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DiferenciaisSection />
      <PaymentSection />
      <QuemSomosSection />
      <ReservasSection />
      <PasseiosSection />
      <FrotaSection />
      <GaleriaSection />
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="padding-global">
          <div className="container-large">
            <div className="text-align-center">
              <StatsCounter />
            </div>
          </div>
        </div>
      </section>
      <AvaliacoesSection />
      <OrcamentoSection />
      <FaqSection />
    </>
  );
}
