import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

type ServicePageShellProps = {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
};

export function ServicePageShell({
  children,
  dictionary,
  locale,
}: ServicePageShellProps) {
  return (
    <div className="site-shell utility-shell">
      <SiteNavigation dictionary={dictionary} locale={locale} />
      <main id="main-content">{children}</main>
      <Footer dictionary={dictionary} locale={locale} />
    </div>
  );
}
