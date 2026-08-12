export type Dictionary = {
  localeName: string;
  metadata: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    descriptor: string;
  };
  navigation: {
    label: string;
    work: string;
    services: string;
    studio: string;
    contact: string;
    primaryCta: string;
    menu: string;
    closeMenu: string;
  };
  hero: {
    headline: string;
    mobileHeadlineLines: readonly string[];
    primaryCta: string;
    designDiscipline: string;
    developmentDiscipline: string;
    connectionLabel: string;
  };
  work: {
    kicker: string;
    title: string;
    titleLines: readonly string[];
    introduction: string;
    projectLinkLabel: string;
    visualLabel: string;
    disciplinesLabel: string;
  };
  services: {
    label: string;
    title: string;
    items: readonly {
      number: string;
      title: string;
      details: readonly string[];
    }[];
  };
  studio: {
    label: string;
    titleLines: readonly string[];
    description: string;
    items: readonly {
      number: string;
      title: string;
      details: readonly string[];
    }[];
  };
  studioProfile: {
    label: string;
    titleLines: readonly string[];
    description: readonly string[];
  };
  pricing: {
    label: string;
    titleLines: readonly string[];
    packages: readonly {
      number: string;
      tier: string;
      title: string;
      price: string;
      description: string;
      includesLabel: string;
      includes: readonly string[];
      timelineLabel: string;
      timeline: string;
    }[];
    note: string;
    cta: string;
  };
  contact: {
    label: string;
    titleLines: readonly string[];
    description: string;
    formLabel: string;
    fields: {
      name: string;
      company: string;
      email: string;
      project: string;
    };
    submit: string;
    consent: {
      prefix: string;
      consentLink: string;
      connector: string;
      privacyLink: string;
      suffix: string;
    };
  };
  utilityPages: {
    backHome: string;
    draftLabel: string;
    missingInformation: string;
    privacy: {
      title: string;
      description: string;
      sections: readonly {
        title: string;
        paragraphs: readonly string[];
      }[];
    };
    consent: {
      title: string;
      description: string;
      sections: readonly {
        title: string;
        paragraphs: readonly string[];
      }[];
    };
    notFound: {
      title: string;
    };
    thankYou: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
  footer: {
    subtitle: string;
    navigationLabel: string;
    contactsLabel: string;
    legalLabel: string;
    navigation: {
      work: string;
      services: string;
      studio: string;
      contact: string;
    };
    email: string;
    copyright: string;
    privacy: string;
    consent: string;
  };
};
