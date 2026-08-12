import type { Metadata } from "next";

import { LocalizedNotFound } from "@/components/legal/localized-not-found";

export const metadata: Metadata = {
  title: "404 — Green Cat",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return <LocalizedNotFound />;
}
