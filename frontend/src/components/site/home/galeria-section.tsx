import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionShell } from "@/components/common/section-shell";
import { useLanguage } from "@/lib/i18n/useLanguage";

const galleryImages = [
  "/assets/galeria/5.jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.15.jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.18 (1).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.33 (1).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.33 (3).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.34 (4).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.34.jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.40 (2).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.41 (1).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.41.jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.45 (1).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.45 (4).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.45.jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.48 (2).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.48 (3).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.48.jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.49 (1).jpeg",
  "/assets/galeria/WhatsApp Image 2026-05-08 at 12.35.50 (1).jpeg",
  "/assets/galeria/aeroporto_chuva.jpeg",
  "/assets/galeria/post22.jpeg",
  "/assets/galeria/post22_1.jpeg",
  "/assets/galeria/esssssssa.jpeg",
  "/assets/galeria/post22_2.jpeg",
  "/assets/galeria/dadadadad.jpeg"
];

const ITEMS_PER_PAGE = 8;

export function GaleriaSection() {
  const { t } = useLanguage();
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const visibleImages = galleryImages.slice(0, displayCount);
  const hasMore = displayCount < galleryImages.length;

  const prevImage = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? galleryImages.length - 1 : prev - 1;
    });
  };

  const nextImage = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <SectionShell id="galeria" title={t.gallery.title} subtitle={t.gallery.subtitle}>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="group relative flex h-36 items-end rounded-xl border border-zinc-800 overflow-hidden md:h-44 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img 
                src={src} 
                alt={`Galeria ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 gap-4">
          {hasMore && (
            <button
              onClick={() => setDisplayCount(prev => prev + ITEMS_PER_PAGE)}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
            >
              Ver mais
            </button>
          )}
          {displayCount > ITEMS_PER_PAGE && (
            <button
              onClick={() => setDisplayCount(ITEMS_PER_PAGE)}
              className="px-6 py-3 bg-zinc-800 text-white font-bold rounded-full hover:bg-zinc-700 transition-all duration-300"
            >
              Ver menos
            </button>
          )}
        </div>
      </SectionShell>

      {/* Lightbox Portal */}
      {selectedIndex !== null && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[100000] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors z-[100001]"
          >
            <X size={48} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-8 text-white hover:text-amber-500 transition-colors z-[100001]"
          >
            <ChevronLeft size={64} />
          </button>

          <img 
            src={galleryImages[selectedIndex]} 
            alt={`Visualização ${selectedIndex + 1}`} 
            className="max-w-[95vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-8 text-white hover:text-amber-500 transition-colors z-[100001]"
          >
            <ChevronRight size={64} />
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
