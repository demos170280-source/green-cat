import type { Dictionary } from "@/i18n/dictionary";

export const en = {
  localeName: "English",
  metadata: {
    title: "Green Cat — Design & Development Studio",
    description:
      "Independent design and development studio turning research and ideas into distinctive digital experiences.",
  },
  brand: {
    name: "Green Cat",
    descriptor: "Design & Development Studio",
  },
  navigation: {
    label: "Primary navigation",
    work: "Work",
    services: "Services",
    studio: "Studio",
    contact: "Contact",
    primaryCta: "Start a project",
    menu: "Menu",
    closeMenu: "Close",
  },
  hero: {
    headline: "Design and development — one",
    mobileHeadlineLines: ["Design and", "development —", "one"],
    primaryCta: "Start a project",
    designDiscipline: "UX/UI Design",
    developmentDiscipline: "Frontend Development",
    connectionLabel: "One connected practice",
  },
  work: {
    kicker: "Selected work / 01—03",
    title: "Built as one system",
    titleLines: [
      "Built into",
      "one unified system",
    ],
    introduction:
      "A future collection of cases connecting interface, process, motion and system.",
    projectLinkLabel: "View live website",
    visualLabel: "Abstract project preview",
    disciplinesLabel: "Disciplines",
  },
  services: {
    label: "Services",
    title:
      "We design digital products that connect strategy, design and development",
    items: [
      {
        number: "01",
        title: "UX/UI Design",
        details: [
          "Research.",
          "Interface architecture.",
          "Prototyping.",
          "Design system.",
        ],
      },
      {
        number: "02",
        title: "Web Design",
        details: [
          "Corporate websites.",
          "B2B platforms.",
          "Landing pages.",
          "Digital services.",
        ],
      },
      {
        number: "03",
        title: "Frontend Develop",
        details: [
          "React / Next.js.",
          "Responsive development.",
          "Interactive interfaces.",
        ],
      },
      {
        number: "04",
        title: "Design System",
        details: [
          "Components.",
          "Tokens.",
          "Scalable interface systems.",
        ],
      },
    ],
  },
  studio: {
    label: "Approach",
    titleLines: ["From idea", "to a working", "digital product"],
    description:
      "We connect research, design and development in one coherent process.",
    items: [
      {
        number: "01",
        title: "Discovery",
        details: [
          "Immersion in the challenge.",
          "Research.",
          "Product architecture.",
        ],
      },
      {
        number: "02",
        title: "Design",
        details: ["UX/UI.", "Prototyping.", "Visual system."],
      },
      {
        number: "03",
        title: "Development",
        details: [
          "Frontend development.",
          "Integrations.",
          "Responsive implementation.",
        ],
      },
      {
        number: "04",
        title: "Support",
        details: ["Product evolution.", "Optimization.", "Scaling."],
      },
    ],
  },
  studioProfile: {
    label: "Studio",
    titleLines: [
      "We create digital products,",
      "where design becomes part",
      "of the technology",
    ],
    description: [
      "Green Cat is a design and interface development studio.",
      "We work at the intersection of UX/UI, visual systems and frontend development.",
    ],
  },
  pricing: {
    label: "Pricing",
    titleLines: ["A format tailored", "to your challenge"],
    packages: [
      {
        number: "01",
        tier: "Start",
        title: "One-page website",
        price: "from ₽60,000",
        description:
          "For launching a new product, service or company presentation.",
        includesLabel: "Includes",
        includes: [
          "challenge analysis",
          "page structure",
          "UX prototype",
          "UI design",
          "responsive version",
          "development",
          "basic SEO setup",
        ],
        timelineLabel: "Timeline",
        timeline: "1–2 weeks",
      },
      {
        number: "02",
        tier: "Business",
        title: "Corporate website",
        price: "from ₽120,000",
        description:
          "For companies that need a complete digital business tool.",
        includesLabel: "Includes",
        includes: [
          "business and audience analysis",
          "website architecture",
          "UX/UI design",
          "design system",
          "multiple pages",
          "responsive development",
          "basic SEO setup",
        ],
        timelineLabel: "Timeline",
        timeline: "2–4 weeks",
      },
      {
        number: "03",
        tier: "Product",
        title: "Digital product",
        price: "from ₽250,000",
        description: "For services, platforms and complex interfaces.",
        includesLabel: "Includes",
        includes: [
          "user research",
          "UX architecture",
          "prototyping",
          "UI design",
          "design system",
          "frontend development",
          "launch support",
        ],
        timelineLabel: "Timeline",
        timeline: "from 1 month",
      },
    ],
    note: "Cost and timelines are confirmed after discussing the challenge",
    cta: "Discuss a project",
  },
  contact: {
    label: "Start a project",
    titleLines: ["Have", "an idea or", "a challenge"],
    description:
      "Let’s discuss the project, define a direction and propose a solution.",
    formLabel: "Project enquiry form",
    fields: {
      name: "Name",
      company: "Company",
      email: "Email",
      project: "Tell us about the project",
    },
    submit: "Send enquiry",
    consent: {
      prefix: "I have read and agree to the",
      consentLink: "User Agreement",
      connector: "and the",
      privacyLink: "Privacy Policy",
      suffix: ", and consent to the processing of personal data",
    },
  },
  utilityPages: {
    backHome: "Back to home",
    draftLabel: "Legal document — draft",
    missingInformation:
      "Before publication, the marked fields must be completed and the document must undergo legal review.",
    privacy: {
      title: "Privacy Policy",
      description:
        "This document outlines the general principles for processing personal data on the Green Cat website.",
      sections: [
        {
          title: "1. General provisions",
          paragraphs: [
            "[REQUIRED: full legal name or name of the data controller, address and applicable registration details].",
            "This policy applies to information submitted through the website forms and contact links.",
          ],
        },
        {
          title: "2. Data processed",
          paragraphs: [
            "The form may collect a name, company, email address and information voluntarily included in the project message.",
            "[REQUIRED: technical data, cookies, analytics services and their retention periods].",
          ],
        },
        {
          title: "3. Purposes and legal bases",
          paragraphs: [
            "Data is used to review the enquiry, contact the user and prepare a project proposal.",
            "[REQUIRED: legal bases, processing periods and deletion procedure].",
          ],
        },
        {
          title: "4. Data sharing and protection",
          paragraphs: [
            "[REQUIRED: hosting, email providers, contractors and any cross-border transfers].",
            "[REQUIRED: organisational and technical security measures].",
          ],
        },
        {
          title: "5. User rights and contact",
          paragraphs: [
            "Users may request information about processing, correction or deletion of their data where provided by applicable law.",
            "Contact: demos80@list.ru. [REQUIRED: official address for legally significant requests].",
          ],
        },
      ],
    },
    consent: {
      title: "Consent to Personal Data Processing",
      description:
        "Consent wording for enquiries submitted through the Green Cat website.",
      sections: [
        {
          title: "1. Scope of consent",
          paragraphs: [
            "By submitting the website form, the user confirms that the supplied information is provided voluntarily for processing the enquiry.",
            "[REQUIRED: full legal name or name of the data controller, address and registration details].",
          ],
        },
        {
          title: "2. Categories of data",
          paragraphs: [
            "The consent covers the name, company, email address and project information entered by the user.",
          ],
        },
        {
          title: "3. Processing operations",
          paragraphs: [
            "[REQUIRED: exact list of processing operations and automated or non-automated processing methods].",
          ],
        },
        {
          title: "4. Duration and withdrawal",
          paragraphs: [
            "[REQUIRED: duration of consent and withdrawal procedure].",
            "Contact: demos80@list.ru. Withdrawal does not affect processing lawfully performed before it is received by the controller.",
          ],
        },
      ],
    },
    notFound: {
      title: "Page not found",
    },
    thankYou: {
      eyebrow: "Thank you",
      title: "Your request has been sent",
      description: "We’ll get back to you shortly",
    },
  },
  footer: {
    subtitle: "Design & Development Studio",
    navigationLabel: "Navigation",
    contactsLabel: "Contacts",
    legalLabel: "Legal",
    navigation: {
      work: "Work",
      services: "Services",
      studio: "Studio",
      contact: "Contact",
    },
    email: "Email",
    copyright: "© 2026 Green Cat",
    privacy: "Privacy Policy",
    consent: "Consent to Personal Data Processing",
  },
} as const satisfies Dictionary;
