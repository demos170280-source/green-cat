import { AccentSquare } from "@/components/ui";
import { footerContactLinks } from "@/content/social-links";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

type FooterProps = {
  dictionary: Dictionary;
  locale: Locale;
};

const footerLinks = [
  { href: "#work", key: "work" },
  { href: "#services", key: "services" },
  { href: "#studio", key: "studio" },
  { href: "#contact", key: "contact" },
] as const;

export function Footer({ dictionary, locale }: FooterProps) {
  const { footer } = dictionary;

  return (
    <footer className="site-footer spacing-section">
      <div className="footer-inner spacing-inline-page">
        <div className="footer-brand">
          <p className="footer-brand-name">{dictionary.brand.name}</p>
          <AccentSquare className="footer-accent-square" />
          <p className="footer-brand-subtitle">{footer.subtitle}</p>
        </div>

        <div className="footer-bottom">
          <nav className="footer-column" aria-label={footer.navigationLabel}>
            <p className="footer-column-label">{footer.navigationLabel}</p>
            <ul className="footer-list">
              {footerLinks.map(({ href, key }) => (
                <li key={key}>
                  <a className="footer-link" href={`/${locale}${href}`}>
                    {footer.navigation[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column">
            <p className="footer-column-label">{footer.contactsLabel}</p>
            <ul className="footer-list">
              {footerContactLinks.map((social) => (
                <li key={social.label}>
                  <a
                    className="footer-link"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} — Green Cat`}
                  >
                    {social.label}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-legal">
            <p className="footer-column-label">{footer.legalLabel}</p>
            <ul className="footer-list">
              <li>{footer.copyright}</li>
              <li>
                <a className="footer-link" href={`/${locale}/privacy`}>
                  {footer.privacy}
                </a>
              </li>
              <li>
                <a className="footer-link" href={`/${locale}/consent`}>
                  {footer.consent}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
