"use client";

import { useLayoutEffect } from "react";

type RevealGroup = {
  selector: string;
  delay: number;
  stagger?: number;
};

const revealGroups: readonly RevealGroup[] = [
  {
    selector:
      ".work-kicker, .services-kicker, .studio-process-kicker, .studio-section-kicker, .pricing-kicker, .contact-kicker",
    delay: 0,
  },
  {
    selector:
      ".work-heading h2, .services-heading h2, .studio-process-intro h2, .studio-section-copy h2, .pricing-heading h2, .contact-intro h2",
    delay: 100,
  },
  {
    selector:
      ".work-introduction, .studio-process-description, .studio-section-description, .contact-description",
    delay: 200,
  },
  { selector: ".service-card", delay: 0, stagger: 120 },
  { selector: ".pricing-package", delay: 0, stagger: 120 },
];

export function ScrollReveal() {
  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const revealElements = new Set<HTMLElement>();

    revealGroups.forEach(({ selector, delay, stagger = 0 }) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.dataset.reveal = "";
        element.style.setProperty(
          "--reveal-delay",
          `${delay + index * stagger}ms`,
        );
        revealElements.add(element);
      });
    });

    document.querySelectorAll<HTMLElement>(".project-teaser").forEach((project) => {
      const projectSequence = [
        project.querySelector<HTMLElement>(".project-copy h3"),
        project.querySelector<HTMLElement>(".project-copy p"),
        project.querySelector<HTMLElement>(".project-visual"),
        project.querySelector<HTMLElement>(".project-status"),
      ];

      projectSequence.forEach((element, index) => {
        if (!element) {
          return;
        }

        element.dataset.reveal = "";
        element.style.setProperty("--reveal-delay", `${index * 120}ms`);
        revealElements.add(element);
      });
    });

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          (entry.target as HTMLElement).dataset.revealVisible = "";
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8%",
        threshold: 0.08,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
      revealElements.forEach((element) => {
        delete element.dataset.reveal;
        delete element.dataset.revealVisible;
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
