"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { AccentSquare, Button } from "@/components/ui";
import { primaryContactUrl, socialLinks } from "@/content/social-links";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

type ContactProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function Contact({ dictionary, locale }: ContactProps) {
  const { contact } = dictionary;
  const [hasConsent, setHasConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasConsent) return;

    window.open(primaryContactUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      className="contact-section spacing-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-inner spacing-inline-page">
        <header className="contact-intro">
          <p className="contact-kicker">
            <AccentSquare className="contact-accent-square" />
            {contact.label}
          </p>
          <h2 id="contact-title">
            {contact.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="contact-description">{contact.description}</p>
          <nav
            className="contact-social-links"
            aria-label={dictionary.footer.contactsLabel}
          >
            {socialLinks.map((social) => (
              <a
                className="contact-social-link"
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
        </header>

        <form
          className="contact-form"
          aria-label={contact.formLabel}
          onSubmit={handleSubmit}
        >
          <label className="contact-field">
            <span>{contact.fields.name}</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>

          <label className="contact-field">
            <span>{contact.fields.company}</span>
            <input name="company" type="text" autoComplete="organization" />
          </label>

          <label className="contact-field">
            <span>{contact.fields.email}</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>

          <label className="contact-field contact-field-project">
            <span>{contact.fields.project}</span>
            <textarea name="project" rows={5} required />
          </label>

          <div className="contact-submit-row">
            <Button
              arrow
              className="contact-submit primary-cta"
              disabled={!hasConsent}
              type="submit"
            >
              {contact.submit}
            </Button>
            <label className="contact-consent">
              <input
                checked={hasConsent}
                name="consent"
                onChange={(event) => setHasConsent(event.target.checked)}
                required
                type="checkbox"
              />
              <span>
                {contact.consent.prefix}{" "}
                <a href={`/${locale}/consent`}>
                  {contact.consent.consentLink}
                </a>{" "}
                {contact.consent.connector}{" "}
                <a href={`/${locale}/privacy`}>
                  {contact.consent.privacyLink}
                </a>
                {contact.consent.suffix}
              </span>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
