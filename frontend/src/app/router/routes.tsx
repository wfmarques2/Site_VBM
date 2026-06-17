import { Route, Switch } from "wouter";
import { HomePage } from "@/pages/site/home-page";
import { PricesPage } from "@/pages/site/prices-page";
import { ReservaPage } from "@/pages/site/reserva-page";
import { ContatoPage } from "@/pages/site/contato-page";
import { PasseiosPage } from "@/pages/site/passeios-page";
import { FrotaPage } from "@/pages/site/frota-page";
import { OrcamentoPage } from "@/pages/site/orcamento-page";
import { DashboardPage } from "@/pages/admin/dashboard-page";
import { PasseiosAdminPage } from "@/pages/admin/passeios-admin-page";
import { GaleriaAdminPage } from "@/pages/admin/galeria-admin-page";
import { AvaliacoesAdminPage } from "@/pages/admin/avaliacoes-admin-page";
import { FrotaAdminPage } from "@/pages/admin/frota-admin-page";
import { ConfiguracoesAdminPage } from "@/pages/admin/configuracoes-admin-page";
import { LoginPage } from "@/pages/admin/login-page";
import { NotFoundPage } from "@/pages/not-found-page";

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/tarifas" component={PricesPage} />
      <Route path="/passeios" component={PasseiosPage} />
      <Route path="/frota" component={FrotaPage} />
      <Route path="/contato" component={ContatoPage} />
      <Route path="/reserva" component={ReservaPage} />
      <Route path="/orcamento" component={OrcamentoPage} />
      <Route path="/admin/login" component={LoginPage} />
      <Route path="/admin" component={DashboardPage} />
      <Route path="/admin/passeios" component={PasseiosAdminPage} />
      <Route path="/admin/galeria" component={GaleriaAdminPage} />
      <Route path="/admin/avaliacoes" component={AvaliacoesAdminPage} />
      <Route path="/admin/frota" component={FrotaAdminPage} />
      <Route path="/admin/configuracoes" component={ConfiguracoesAdminPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
