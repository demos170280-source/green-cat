"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui";
import { primaryContactUrl, socialLinks } from "@/content/social-links";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

import { MobileNavigation } from "./mobile-navigation";

type SiteNavigationProps = {
  dictionary: Dictionary;
  locale: Locale;
};

const sectionLinks = [
  { href: "#work", key: "work" },
  { href: "#services", key: "services" },
  { href: "#studio", key: "studio" },
] as const;

export function SiteNavigation({
  dictionary,
  locale,
}: SiteNavigationProps) {
  const alternateLocale = locale === "en" ? "ru" : "en";
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "visible">(
    "top",
  );
  const previousScrollY = useRef(0);

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    function updateHeader() {
      const currentScrollY = Math.max(window.scrollY, 0);
      const previous = previousScrollY.current;

      if (currentScrollY <= 1) {
        setHeaderState("top");
      } else if (currentScrollY > previous + 4) {
        setHeaderState("hidden");
      } else if (currentScrollY < previous - 4) {
        setHeaderState("visible");
      }

      previousScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header site-header-${headerState}`}>
      <div className="site-header-inner spacing-inline-page">
        <div className="header-left-group">
          <Link className="wordmark" href={`/${locale}`} aria-label={dictionary.brand.name}>
            <span className="wordmark-signal" aria-hidden="true" />
            {dictionary.brand.name}
          </Link>

          <nav className="primary-nav" aria-label={dictionary.navigation.label}>
            {sectionLinks.map(({ href, key }) => (
              <a key={key} className="nav-link" href={`/${locale}${href}`}>
                {dictionary.navigation[key]}
              </a>
            ))}
          </nav>
        </div>

        <div className="header-actions">
          <nav className="header-social-links" aria-label={dictionary.footer.contactsLabel}>
          {socialLinks.map((social) => (
            <a
              className="header-social-link"
              href={social.href}
              key={social.label}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} — Green Cat`}
            >
              {social.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          </nav>

          <Link
            className="locale-switch header-locale-switch"
            href={`/${alternateLocale}`}
            hrefLang={alternateLocale}
            lang={alternateLocale}
            aria-label={alternateLocale === "ru" ? "Русская версия" : "English version"}
          >
            <span className={locale === "ru" ? "is-active" : undefined}>RU</span>
            <span aria-hidden="true">/</span>
            <span className={locale === "en" ? "is-active" : undefined}>EN</span>
          </Link>

          <ButtonLink
            arrow
            className="header-cta"
            href={primaryContactUrl}
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
          >
            {dictionary.navigation.primaryCta}
          </ButtonLink>
        </div>

        <MobileNavigation locale={locale} navigation={dictionary.navigation} />
      </div>
    </header>
  );
}
