import { QueryProvider } from "@/app/providers/query-provider";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { AppRoutes } from "@/app/router/routes";
import { AppLayout } from "@/components/common/app-layout";
import { LanguageProvider } from "@/lib/i18n/useLanguage";

export function App() {
  return (
    <LanguageProvider>
      <QueryProvider>
        <ThemeProvider>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </ThemeProvider>
      </QueryProvider>
    </LanguageProvider>
  );
}
