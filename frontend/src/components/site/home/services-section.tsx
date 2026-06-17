import React from "react";
import { Plane, Briefcase, Calendar, MapPin, User, Car, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/useLanguage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.FC<any>> = {
  plane: Plane,
  briefcase: Briefcase,
  calendar: Calendar,
  "map-pin": MapPin,
  user: User,
  car: Car,
};

export function ServicesSection() {
  const { t } = useLanguage();
  const services = t.services?.items || [];

  return (
    <section id="services" className="section">
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
                    {t.services?.label}
                  </span>
                </div>
                <h2 className="heading-style-h2">
                  {t.services?.title} <span style={{ color: "#d4af37" }}></span>
                </h2>
              </div>
              <div className="header1-2-content-right reveal-right delay-100">
                <p className="text-size-medium text-opacity-50">
                  {t.services?.subtitle}
                </p>
              </div>
            </div>
            
            <div className="spacer-xlarge"></div>
            
            <div className="services-container">
              {services.map((item, index) => {
                const Icon = iconMap[item.icon] || Car;
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
  );
}
