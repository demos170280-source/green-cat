import type { Locale } from "@/i18n/config";

import { workProjectMedia } from "./media";
import type {
  WorkProjectCopy,
  WorkProjectDefinition,
  WorkProjectId,
  WorkProjectTeaser,
} from "./types";

const projectDefinitions = [
  {
    id: "stroymedproject",
    sequence: "01",
    url: "https://stroymedproject.ru/",
    visual: workProjectMedia.stroymedproject,
  },
  {
    id: "tk-builds",
    sequence: "02",
    url: "https://tkbuilds.pro/",
    visual: workProjectMedia["tk-builds"],
  },
  {
    id: "museum-online",
    sequence: "03",
    url: "https://музей.online/",
    visual: workProjectMedia["museum-online"],
  },
] as const satisfies readonly WorkProjectDefinition[];

const projectCopy = {
  en: {
    stroymedproject: {
      title: "Stroymedproject",
      titleSegments: ["Stroymed", "project"],
      category: "Corporate Website",
      summary:
        "Corporate website for a construction company. UX/UI design, structure and development of its digital presence.",
      disciplines: [
        "Construction",
        "B2B",
        "UX/UI Design",
        "Art Direction",
        "Frontend Development",
      ],
      imageAlts: ["Stroymedproject website preview"],
    },
    "tk-builds": {
      title: "TK-Stroy",
      category: "Construction",
      summary:
        "Corporate website for a construction company serving commercial and industrial facilities. Structure, UX/UI design and development of its digital presence.",
      disciplines: [
        "B2B",
        "Industrial",
        "UX/UI Design",
        "Art Direction",
        "Frontend Development",
      ],
      imageAlts: ["TK-Stroy website preview"],
    },
    "museum-online": {
      title: "Museum Online",
      category: "Digital Experience",
      summary:
        "Website for the World of Historical Reconstruction museum complex, presenting its thematic exhibitions and visitor information.",
      disciplines: ["Cultural Project"],
      imageAlts: [
        "Museum Online Great Patriotic War exhibition page",
        "Museum Online homepage",
        "Museum Online Justice exhibition page",
        "Museum Online Back to the USSR exhibition page",
      ],
    },
  },
  ru: {
    stroymedproject: {
      title: "Строймедпроект",
      titleSegments: ["Строймед", "проект"],
      category: "Корпоративный сайт",
      summary:
        "Корпоративный сайт строительной компании. UX/UI дизайн, структура и разработка цифрового представительства.",
      disciplines: [
        "Строительство",
        "B2B",
        "UX/UI Design",
        "Арт-дирекшн",
        "Frontend-разработка",
      ],
      imageAlts: ["Превью сайта «Строймедпроект»"],
    },
    "tk-builds": {
      title: "ТК-Строй",
      category: "Строительство",
      summary:
        "Корпоративный сайт строительной компании для коммерческих и промышленных объектов. Структура, UX/UI дизайн и разработка цифрового представительства.",
      disciplines: [
        "B2B",
        "Промышленность",
        "UX/UI Design",
        "Арт-дирекшн",
        "Frontend-разработка",
      ],
      imageAlts: ["Превью сайта «ТК-Строй»"],
    },
    "museum-online": {
      title: "Музей Online",
      category: "Цифровой опыт",
      summary:
        "Сайт музейного комплекса «Мир Исторической Реконструкции» с тематическими экспозициями и информацией для посетителей.",
      disciplines: ["Культурный проект"],
      imageAlts: [
        "Страница экспозиции «Великая Отечественная война» сайта «Музей Online»",
        "Главная страница сайта «Музей Online»",
        "Страница экспозиции «Правосудие» сайта «Музей Online»",
        "Страница экспозиции «Назад в СССР» сайта «Музей Online»",
      ],
    },
  },
} as const satisfies Record<
  Locale,
  Record<WorkProjectId, WorkProjectCopy>
>;

export function getWorkProjects(locale: Locale): readonly WorkProjectTeaser[] {
  return projectDefinitions.map((project) => ({
    ...project,
    ...projectCopy[locale][project.id],
  }));
}

export type { WorkProjectTeaser } from "./types";
