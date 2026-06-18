import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useLocation } from "wouter";
import { env } from "@/lib/env";
import { useLanguage } from "@/lib/i18n/useLanguage";

// Splash Screen Component
function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <img src="/assets/logo.png" alt="VBM Transfer" className="splash-logo" style={{ maxWidth: "300px", maxHeight: "300px" }} />
    </div>
  );
}

// Scroll Progress Bar
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = (window.scrollY / totalHeight) * 100;
      setProgress(progressPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress" style={{ width: `${progress}%` }}></div>
  );
}

// Custom Cursor Component
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX - 10}px, ${clientY - 10}px)`;
      }
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${clientX - 3}px, ${clientY - 3}px)`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service_card, .nav_link, .magnetic');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`cursor ${isHovering ? 'hover' : ''}`}
      />
      <div ref={cursorDotRef} className="cursor-dot" />
    </>
  );
}

// Floating Orbs Component
function FloatingOrbs() {
  return (
    <>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </>
  );
}

// Premium Grid Pattern
function PremiumGrid() {
  return <div className="premium-grid" />;
}

// Magnetic Effect Hook
function useMagnetic(ref: React.RefObject<HTMLElement>, power = 20) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
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
  }, [ref, power]);
}

// Premium Footer Component
function PremiumFooter() {
  const footerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  return (
    <footer className="footer-container" ref={footerRef}>
      <div className="padding-global">
        <div className="container-large">
          <div className="footer-grid">
            <div className="footer-brand-section">
              <div className="footer-brand">VBM TRANSFER</div>
              <p className="text-opacity-50" style={{ marginBottom: '1.5rem' }}>
                {t.footer.description}
              </p>
            </div>
            
            <div className="footer-section">
              <h4>{t.footer.menu}</h4>
              <a href="/#inicio" className="footer-link">{t.nav.home}</a>
              <a href="/#quem-somos" className="footer-link">{t.nav.about}</a>
              <a href="/#frota" className="footer-link">{t.nav.fleet}</a>
              <a href="/#avaliacoes" className="footer-link">{t.nav.reviews}</a>
            </div>
            
            <div className="footer-section">
              <h4>{t.footer.services}</h4>
              <a href="/#reservas" className="footer-link">{t.nav.bookings}</a>
              <a href="/#passeios" className="footer-link">{t.nav.tours}</a>
              <a href="/#orcamento" className="footer-link">{t.nav.quote}</a>
              <a href="/#galeria" className="footer-link">{t.nav.gallery}</a>
            </div>
            
            <div className="footer-section">
              <h4>{t.footer.contact}</h4>
              <a href={`https://wa.me/${env.whatsappNumber}`} target="_blank" rel="noreferrer" className="footer-link">
                {t.footer.whatsapp}
              </a>
              <a href="mailto:vbm.transfer@gmail.com" className="footer-link">
                {t.footer.email}
              </a>
              <a href="https://www.instagram.com/vbm.executivo/" target="_blank" rel="noreferrer" className="footer-link">
                {t.footer.instagram}
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Stats Counter Component
export function StatsCounter() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    const numbers = document.querySelectorAll('.stat-number');
    numbers.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target') || '0');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target + '+';
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current) + '+';
        }
      }, 16);
    });
  };

  const stats = [
    { number: 1500, label: t.stats.satisfiedClients },
    { number: 10, label: t.stats.yearsExperience },
    { number: 100, label: t.stats.companiesServed },
    { number: 98, label: t.stats.recommendationRate }
  ];

  return (
    <div className="stats-container" ref={statsRef}>
      {stats.map((stat, index) => (
        <div key={stat.label} className="stat-card reveal-scale" style={{ transitionDelay: `${index * 100}ms` }}>
          <div className="stat-number" data-target={stat.number}>0+</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// Language Switcher Button
function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center">
      <div 
        className="flex items-center gap-0.5 p-1 rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(10,10,10,0.8)] backdrop-blur-md"
        style={{ position: 'relative' }}
      >
        {/* Animated Background */}
        <div 
          style={{
            position: 'absolute',
            top: '4px',
            bottom: '4px',
            width: 'calc(50% - 4px)',
            left: language === 'pt-BR' ? '4px' : 'calc(50% - 2px)',
            background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 50%, #d4af37 100%)',
            borderRadius: '9999px',
            transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)'
          }}
        />
        
        <button
          onClick={() => setLanguage('pt-BR')}
          className="relative z-10 flex items-center gap-1 px-3 py-1.5 text-sm font-bold uppercase tracking-wider transition-all"
          style={{
            color: language === 'pt-BR' ? '#000' : '#d4af37',
            borderRadius: '9999px'
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>🇧🇷</span>
        </button>
        
        <button
          onClick={() => setLanguage('es')}
          className="relative z-10 flex items-center gap-1 px-3 py-1.5 text-sm font-bold uppercase tracking-wider transition-all"
          style={{
            color: language === 'es' ? '#000' : '#d4af37',
            borderRadius: '9999px'
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>🇪🇸</span>
        </button>
      </div>
    </div>
  );
}

export function AppLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage(); // Add language as a dep

  useMagnetic(logoRef, 15);
  useMagnetic(buttonRef, 20);

  if (isAdmin) {
    return <>{children}</>;
  }

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal effect - re-run when language or location changes
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));

    return () => revealElements.forEach(el => observer.unobserve(el));
  }, [language, location]);

  const navItems = [
    { label: t.nav.home, href: "/#inicio", external: false },
    { label: t.nav.services, href: "/#services", external: false },
    { label: t.nav.differentials, href: "/#diferenciais", external: false },
    { label: t.nav.about, href: "/#quem-somos", external: false },
    { label: t.nav.prices, href: "/tarifas", external: false },
    { label: t.nav.tours, href: "/#passeios", external: false },
    { label: t.nav.gallery, href: "/#galeria", external: false },
    { label: t.nav.quote, href: "/#orcamento", external: false }
  ];

  return (
    <div className="page-wrapper">
      <SplashScreen />
      <ScrollProgressBar />
      <CustomCursor />
      <FloatingOrbs />
      <PremiumGrid />
      
      <nav className={`navbar_component ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav_container">
          <Link href="/" className="nav_logo-link" ref={logoRef}>
            <img src="/assets/logo.png" alt="VBM Transfer" className="nav_logo-text" style={{ maxHeight: "60px", width: "auto" }} />
          </Link>
          <div className="nav_wrapper">
            <div className="nav_links-wrapper">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} external={item.external} />
              ))}
            </div>
            <LanguageSwitcher />
            <a href="/#reservas" className="button" ref={buttonRef}>
              {t.hero.cta1}
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="nav_menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <>
                  <path d="M18 6L6 18M6 6l12 12" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
              ) : (
                <>
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="nav_mobile-menu">
            <div className="nav_mobile-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  external={item.external}
                  onMobileClick={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>
            <div className="nav_mobile-footer">
              <LanguageSwitcher />
              <a href="/#reservas" className="button" onClick={() => setMobileMenuOpen(false)}>
                {t.hero.cta1}
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {children}
      </main>

      <PremiumFooter />

      <a
        href={`https://wa.me/${env.whatsappNumber}?text=${encodeURIComponent(t.footer.whatsappInitialMessage)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-8 right-8 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full whatsapp-button text-white shadow-lg transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="36" height="36">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .162 5.333.162 11.885c0 2.102.552 4.13 1.588 5.913L0 24l6.35-1.655a11.828 11.828 0 005.683 1.448h.004c6.552 0 11.884-5.333 11.884-11.883a11.821 11.821 0 00-3.468-8.415"/>
        </svg>
      </a>
    </div>
  );
}

// NavLink with Magnetic Effect
function NavLink({ href, label, external = false, onMobileClick }: { href: string; label: string; external?: boolean; onMobileClick?: () => void }) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref, 10);
  const [location, navigate] = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (external) return;
    if (onMobileClick) onMobileClick();
    e.preventDefault();

    // Check if it's a hash link
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // If path is different from current location
      if (path !== '' && path !== location) {
        // Navigate to the path first
        navigate(path);
        // Then after navigation, scroll to the hash
        setTimeout(() => {
          window.scrollTo(0, 0);
          setTimeout(() => {
            const element = document.querySelector(`#${hash}`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }, 50);
      } else {
        // Same page, just scroll
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Regular link, navigate and scroll to top
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <a
      href={href}
      className="nav_link"
      ref={ref}
      onClick={handleClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {label}
    </a>
  );
}
