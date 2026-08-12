import type { WorkProjectId, WorkProjectVisual } from "./types";

export const workProjectMedia = {
  stroymedproject: {
    type: "single",
    image: "/images/work/stroymedproject/cover.png",
  },
  "tk-builds": {
    type: "single",
    image: "/images/work/tk-builds/cover.png",
  },
  "museum-online": {
    type: "gallery",
    images: [
      "/images/work/museum-online/01.png",
      "/images/work/museum-online/02.png",
      "/images/work/museum-online/03.png",
      "/images/work/museum-online/04.png",
    ],
  },
} as const satisfies Record<WorkProjectId, WorkProjectVisual>;
