import { useLanguage } from "@/lib/i18n/useLanguage";
import { SectionShell } from "@/components/common/section-shell";
import { Button } from "@/components/ui/button";

export function PricesSection() {
  const { t } = useLanguage();
  const prices = t.prices;

  const handleReserve = (destination: string) => {
    // Pre-fill reservation form with the selected destination and default origin
    const encodedDestino = encodeURIComponent(destination);
    const encodedOrigem = encodeURIComponent("Aeroporto de Florianópolis");
    window.location.href = `/reserva?destino=${encodedDestino}&origem=${encodedOrigem}`;
  };

  return (
    <SectionShell noReveal={true}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="section-header-label">{prices.title}</span>
        <h2 className="section-header-title">{prices.subtitle}</h2>
      </div>

      <div style={{ overflowX: 'auto', width: '100%' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          background: 'rgba(255,255,255,0.02)', 
          borderRadius: '20px', 
          overflow: 'hidden',
          border: '1px solid rgba(212,175,55,0.1)'
        }}>
          <thead style={{ 
            background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)', 
            color: '#0a0a0a',
            fontWeight: 'bold'
          }}>
            <tr>
              <th style={{ 
                padding: '1.5rem', 
                textAlign: 'left', 
                fontSize: '1rem', 
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>{prices.table.destination}</th>
              <th style={{ 
                padding: '1.5rem', 
                textAlign: 'center', 
                fontSize: '1rem', 
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>{prices.table.km}</th>
              <th style={{ 
                padding: '1.5rem', 
                textAlign: 'center', 
                fontSize: '1rem', 
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {prices.table.virtus}
                <br />
                <span style={{ fontSize: '0.8rem', opacity: '0.9' }}>{prices.table.virtusSub}</span>
              </th>
              <th style={{ 
                padding: '1.5rem', 
                textAlign: 'center', 
                fontSize: '1rem', 
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {prices.table.corolla}
                <br />
                <span style={{ fontSize: '0.85rem', opacity: '0.9' }}>{prices.table.corollaSub}</span>
              </th>
              <th style={{ 
                padding: '1.5rem', 
                textAlign: 'center', 
                fontSize: '1rem', 
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {prices.table.spin}
                <br />
                <span style={{ fontSize: '0.85rem', opacity: '0.9' }}>{prices.table.spinSub}</span>
              </th>
              <th style={{ 
                padding: '1.5rem', 
                textAlign: 'center', 
                fontSize: '1rem', 
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}></th>
            </tr>
          </thead>
          <tbody>
            {prices.items.map((item, index) => (
              <tr key={index} style={{ 
                borderBottom: '1px solid rgba(212,175,55,0.1)',
                transition: 'background 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(212,175,55,0.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <td style={{ 
                  padding: '1.5rem', 
                  textAlign: 'left', 
                  fontWeight: '500',
                  color: '#f5f0e1'
                }}>{item.destination}</td>
                <td style={{ 
                  padding: '1.5rem', 
                  textAlign: 'center', 
                  color: 'rgba(245,240,225,0.7)'
                }}>{item.km} km</td>
                <td style={{ 
                  padding: '1.5rem', 
                  textAlign: 'center', 
                  fontWeight: '600',
                  color: '#d4af37'
                }}>{item.virtus}</td>
                <td style={{ 
                  padding: '1.5rem', 
                  textAlign: 'center', 
                  fontWeight: '600',
                  color: '#d4af37'
                }}>{item.corolla}</td>
                <td style={{ 
                  padding: '1.5rem', 
                  textAlign: 'center', 
                  fontWeight: '600',
                  color: '#d4af37'
                }}>{item.spin}</td>
                <td style={{ 
                  padding: '1.5rem', 
                  textAlign: 'center' 
                }}>
                  <Button
                    onClick={() => handleReserve(item.destination)}
                    style={{ 
                      background: 'transparent',
                      border: '1px solid #d4af37',
                      color: '#d4af37',
                      padding: '0.5rem 1.25rem',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderRadius: '9999px'
                    }}
                  >
                    {prices.table.reserve}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
