import type { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { LayoutDashboard, Map, Image, Star, Car, Settings } from "lucide-react";

type AdminShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/passeios", label: "Passeios", icon: Map },
  { href: "/admin/galeria", label: "Galeria", icon: Image },
  { href: "/admin/avaliacoes", label: "Avaliacoes", icon: Star },
  { href: "/admin/frota", label: "Frota", icon: Car },
  { href: "/admin/configuracoes", label: "Configuracoes", icon: Settings }
];

export function AdminShell({ title, subtitle, children }: AdminShellProps) {
  const [location] = useLocation();

  return (
    <div className="grid min-h-screen grid-cols-1 bg-zinc-100 md:grid-cols-[260px_1fr]">
      <aside className="border-r border-zinc-200 bg-white p-5">
        <Link href="/admin" className="text-lg font-semibold tracking-wide text-zinc-900">
          VBM Admin
        </Link>
        <nav className="mt-8 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0">
        <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6">
          <div>
            <h1 className="text-lg font-semibold text-zinc-900">{title}</h1>
            {subtitle ? <p className="text-xs text-zinc-500">{subtitle}</p> : null}
          </div>
          <div className="text-xs text-zinc-500">Modo mock</div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
