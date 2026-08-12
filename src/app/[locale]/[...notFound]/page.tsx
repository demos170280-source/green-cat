import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "404 — Green Cat",
};

export default function UnknownRoute() {
  notFound();
}
