import { X, Check, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/useLanguage';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string[];
}

export function ServiceModal({ isOpen, onClose, title, content }: ServiceModalProps) {
  const { t } = useLanguage();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)'
      }}
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'rgba(15, 15, 15, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '1.75rem',
          animation: 'modalIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          style={{ zIndex: 10 }}
        >
          <X className="w-6 h-6" style={{ color: '#d4af37' }} />
        </button>

        {/* Modal content */}
        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="mb-8">
            <h2 
              className="text-2xl md:text-3xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Playfair Display', serif"
              }}
            >
              {title}
            </h2>
            <div className="mt-3" style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #d4af37, transparent)'
            }}></div>
          </div>

          {/* Features list */}
          <div className="space-y-4 mb-10">
            {content.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4"
                style={{
                  animation: `fadeInUp 0.4s ease forwards ${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div 
                  className="flex-shrink-0 mt-0.5"
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Check className="w-4 h-4" style={{ color: '#000' }} />
                </div>
                <p className="text-sm md:text-base" style={{ color: '#f5f0e1' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a 
            href="/#orcamento"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              const element = document.getElementById('orcamento');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 50%, #d4af37 100%)',
              backgroundSize: '200% 200%',
              color: '#000',
              boxShadow: '0 4px 30px rgba(212, 175, 55, 0.3)'
            }}
          >
            {t.modal.requestQuote}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Add animations to CSS */}
      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
