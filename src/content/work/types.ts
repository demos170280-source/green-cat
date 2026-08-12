export type WorkProjectId =
  | "stroymedproject"
  | "tk-builds"
  | "museum-online";

export type WorkProjectVisual =
  | {
      type: "single";
      image: string;
    }
  | {
      type: "gallery";
      images: readonly [string, string, string, string];
    };

export type WorkProjectDefinition = {
  id: WorkProjectId;
  sequence: string;
  url: string;
  visual: WorkProjectVisual;
};

export type WorkProjectCopy = {
  title: string;
  titleSegments?: readonly string[];
  category: string;
  summary: string;
  disciplines: readonly string[];
  imageAlts:
    | readonly [string]
    | readonly [string, string, string, string];
};

export type WorkProjectTeaser = WorkProjectDefinition & WorkProjectCopy;
