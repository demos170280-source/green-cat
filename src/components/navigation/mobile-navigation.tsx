"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { ButtonLink } from "@/components/ui";
import { primaryContactUrl } from "@/content/social-links";

type MobileNavigationProps = {
  locale: Locale;
  navigation: Dictionary["navigation"];
};

const mobileSectionLinks = [
  { href: "#work", key: "work" },
  { href: "#services", key: "services" },
  { href: "#studio", key: "studio" },
  { href: "#contact", key: "contact" },
] as const;

export function MobileNavigation({
  locale,
  navigation,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const alternateLocale = locale === "en" ? "ru" : "en";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-navigation">
      <Link
        className="locale-switch mobile-locale-switch"
        href={`/${alternateLocale}`}
        hrefLang={alternateLocale}
        lang={alternateLocale}
        aria-label={alternateLocale === "ru" ? "Русская версия" : "English version"}
      >
        <span className={locale === "ru" ? "is-active" : undefined}>RU</span>
        <span aria-hidden="true">/</span>
        <span className={locale === "en" ? "is-active" : undefined}>EN</span>
      </Link>

      <button
        ref={triggerRef}
        className="mobile-menu-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{isOpen ? navigation.closeMenu : navigation.menu}</span>
        <span className="mobile-menu-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <nav
        className="mobile-menu-panel"
        id="mobile-menu-panel"
        aria-label={navigation.label}
        hidden={!isOpen}
      >
        <div className="mobile-menu-links">
          {mobileSectionLinks.map(({ href, key }, index) => (
            <a key={key} href={`/${locale}${href}`} onClick={closeMenu}>
              <span aria-hidden="true">0{index + 1}</span>
              {navigation[key]}
            </a>
          ))}
        </div>

        <ButtonLink
          arrow
          className="mobile-menu-cta"
          href={primaryContactUrl}
          onClick={closeMenu}
          rel="noopener noreferrer"
          target="_blank"
        >
          {navigation.primaryCta}
        </ButtonLink>
      </nav>
    </div>
  );
}
