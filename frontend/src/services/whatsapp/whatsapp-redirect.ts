import { env } from "@/lib/env";

export function redirectToWhatsApp(message: string) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${env.whatsappNumber}?text=${encoded}`, "_blank");
}