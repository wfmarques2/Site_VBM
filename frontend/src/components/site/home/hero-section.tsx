import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/useLanguage";

// Typing Effect Component
function TypingEffect({ texts }: { texts: string[] }) {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  // Calculate minimum width based on longest word
  const maxLength = Math.max(...texts.map(t => t.length));
  const minWidth = `${maxLength}ch`;

  useEffect(() => {
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(currentText.substring(0, text.length + 1));
        setSpeed(100);
      }

      if (!isDeleting && text === currentText) {
        setSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setSpeed(500);
      }
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, textIndex, texts]);

  return (
    <span style={{ 
      color: "#d4af37", 
      paddingRight: "20px", 
      display: "inline-block", 
      minWidth: minWidth,
      textAlign: 'center'
    }}>
      {text}
      <span style={{ 
        display: 'inline-block', 
        width: '3px', 
        height: '1em', 
        backgroundColor: '#d4af37', 
        marginLeft: '4px',
        animation: 'blink 1s infinite'
      }}></span>
    </span>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const fleetRef = useRef<HTMLAnchorElement>(null);
  const { t } = useLanguage();

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && imageRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        imageRef.current.style.transform = `translateY(${rate}px) scale(${1 + scrolled * 0.0002})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic effect for buttons
  const addMagneticEffect = (element: HTMLElement, power = 15) => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * power / 100}px, ${y * power / 100}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  useEffect(() => {
    if (ctaRef.current) addMagneticEffect(ctaRef.current, 20);
    if (fleetRef.current) addMagneticEffect(fleetRef.current, 15);
  }, []);

  return (
    <header className="section" id="inicio" style={{ paddingTop: "8rem" }} ref={heroRef}>
      <div className="hero_container">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="text-align-center">
                <div className="max-width-xlarge align-center">
                  <div className="reveal" style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "0.5rem", 
                    padding: "0.5rem 1rem", 
                    borderRadius: "9999px", 
                    background: "rgba(212, 175, 55, 0.1)", 
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    marginBottom: "1.5rem"
                  }}>
                    <span style={{ 
                      width: "6px", 
                      height: "6px", 
                      borderRadius: "50%", 
                      background: "#d4af37",
                      animation: 'pulse 2s infinite'
                    }}></span>
                    <span style={{ 
                      fontSize: "0.75rem", 
                      textTransform: "uppercase", 
                      letterSpacing: "0.15em", 
                      color: "#d4af37",
                      fontWeight: "600"
                    }}>
                      {t.hero.badge}
                    </span>
                  </div>
                  
                  <h1 className="heading-style-h1 reveal delay-100" style={{ padding: "0 20px" }}>
                    {t.hero.title} <TypingEffect texts={t.hero.typingTexts} />
                  </h1>
                  
                  <div className="spacer-medium"></div>
                  
                  <div className="max-width-large align-center reveal delay-200">
                    <p className="text-size-medium text-opacity-50">
                      {t.hero.description}
                    </p>
                  </div>
                  
                  <div className="spacer-large"></div>
                  
                  <div style={{ 
                    display: "flex", 
                    gap: "1rem", 
                    justifyContent: "center", 
                    flexWrap: "wrap" 
                  }} className="reveal delay-300">
                    <a href="/#reservas" className="button" ref={ctaRef} style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "0.5rem" 
                    }}>
                      {t.hero.cta1}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a href="/#frota" ref={fleetRef} style={{ 
                      padding: "0.875rem 2.5rem", 
                      borderRadius: "9999px", 
                      textDecoration: "none", 
                      fontWeight: "700", 
                      fontSize: "0.85rem", 
                      letterSpacing: "0.1em", 
                      textTransform: "uppercase", 
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", 
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      color: "#d4af37",
                      background: "transparent"
                    }} onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
                    }} onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}>
                      {t.hero.cta2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero_image-wrapper reveal-scale delay-400">
          <img
            ref={imageRef}
            src="/assets/corolla_bg.png"
            alt="Toyota Corolla executivo preto VBM Transfer"
            className="hero_image"
          />
        </div>
      </div>
    </header>
  );
}
