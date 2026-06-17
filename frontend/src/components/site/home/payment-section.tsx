import React from "react";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { CreditCard, Globe, ShieldCheck } from "lucide-react";

export function PaymentSection() {
  const { t } = useLanguage();

  return (
    <section id="payment" className="section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="heading-2-col">
              <div className="header-content-left reveal-left">
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem", 
                  marginBottom: "1rem" 
                }}>
                  <CreditCard className="h-4 w-4" style={{ color: "#d4af37" }} />
                  <span style={{ 
                    fontSize: "0.75rem", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.15em", 
                    color: "#d4af37",
                    fontWeight: "600"
                  }}>
                    {t.payment?.label || "Formas de Pagamento"}
                  </span>
                </div>
                <h2 className="heading-style-h2">
                  {t.payment?.title || "Pagamento em Moedas Locais"}
                </h2>
                <p className="text-size-medium text-opacity-50">
                  {t.payment?.subtitle || "Aceitamos pagamentos em diversas moedas para sua comodidade."}
                </p>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {t.payment?.items?.map((currency, index) => (
                <div 
                  key={currency.code} 
                  className="reveal"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(18, 18, 18, 0.5) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.6)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(212, 175, 55, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #d4af37 0%, #b8941f 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem"
                  }}>
                    <span style={{ 
                      fontSize: "1.25rem", 
                      fontWeight: "800", 
                      color: "#0a0a0a"
                    }}>
                      {currency.code}
                    </span>
                  </div>
                  <h3 style={{ 
                    fontSize: "1.125rem", 
                    fontWeight: "700", 
                    marginBottom: "0.5rem",
                    color: "#ffffff"
                  }}>
                    {currency.name}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.5rem",
                color: "rgba(255,255,255,0.5)"
              }}>
                <ShieldCheck className="h-5 w-5" style={{ color: "#d4af37" }} />
                <span style={{ fontSize: "0.875rem" }}>
                  Pagamento seguro e confiável
                </span>
              </div>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.5rem",
                color: "rgba(255,255,255,0.5)"
              }}>
                <Globe className="h-5 w-5" style={{ color: "#d4af37" }} />
                <span style={{ fontSize: "0.875rem" }}>
                  Atendimento internacional
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
