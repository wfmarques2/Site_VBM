import { ShieldCheck, Clock3, Crown, ConciergeBell, MapPinned, Car, Star, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { ServiceModal } from "./ServiceModal";
import { useState } from "react";
import { diferenciais as mockDiferenciais } from "./mock-data";

const icons = [Crown, Clock3, ShieldCheck, Car, ConciergeBell, MapPinned];

export function DiferenciaisSection() {
  const { t } = useLanguage();
  const [openModal, setOpenModal] = useState<{ title: string; content: string[] } | null>(null);
  const diferenciais = t.differentials?.items || mockDiferenciais;

  return (
    <>
      <section id="diferenciais" className="section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="divider-horizontal reveal"></div>
              
              <div className="heading-2-col">
                <div className="header-content-left reveal-left">
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem", 
                    marginBottom: "1rem" 
                  }}>
                    <Star className="h-4 w-4" style={{ color: "#d4af37", fill: "#d4af37" }} />
                    <span style={{ 
                      fontSize: "0.75rem", 
                      textTransform: "uppercase", 
                      letterSpacing: "0.15em", 
                      color: "#d4af37",
                      fontWeight: "600"
                    }}>
                      {t.differentials.label}
                    </span>
                  </div>
                  <h2 className="heading-style-h2">
                    {t.differentials.title} <span style={{ color: "#d4af37" }}>{t.differentials.highlight}</span>
                  </h2>
                </div>
                <div className="header1-2-content-right reveal-right delay-100">
          <p className="text-size-medium text-opacity-50">
            {t.differentials.headerRight}
          </p>
        </div>
              </div>
              
              <div className="spacer-xlarge"></div>
              
              <div className="services-container">
                {diferenciais.map((item, index) => {
                  const Icon = icons[index % icons.length];
                  const delayClasses = ['delay-100', 'delay-200', 'delay-300'];
                  return (
                    <div key={item.title} className={`service_card magnetic reveal-scale ${delayClasses[index % 3]}`}>
                      <div className="service_card-image-wrapper">
                        <div style={{ 
                          height: "80px", 
                          width: "80px",
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          borderRadius: "1rem" 
                        }}>
                          <Icon className="h-10 w-10" style={{ color: "#d4af37" }} />
                        </div>
                      </div>
                      <div className="service_card-content">
                        <div className="service_card-content-top">
                          <h4 className="heading-style-h5">{item.title}</h4>
                          <div className="spacer-small"></div>
                          <p className="text-opacity-50">
                            {item.description}
                          </p>
                          <div className="spacer-medium"></div>
                          <a 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setOpenModal({ title: item.title, content: item.modalContent || [] });
                            }}
                            style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "0.5rem", 
                              color: "#d4af37", 
                              fontSize: "0.875rem", 
                              fontWeight: "600",
                              cursor: "pointer",
                              textDecoration: "none",
                              transition: "transform 0.3s ease, gap 0.3s ease",
                              position: "relative",
                              zIndex: 10,
                              pointerEvents: "auto"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateX(5px)";
                              e.currentTarget.style.gap = "0.75rem";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateX(0)";
                              e.currentTarget.style.gap = "0.5rem";
                            }}
                          >
                            {item.ctaText}
                            <ChevronRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {openModal && (
        <ServiceModal
          isOpen={!!openModal}
          onClose={() => setOpenModal(null)}
          title={openModal.title}
          content={openModal.content}
        />
      )}
    </>
  );
}
