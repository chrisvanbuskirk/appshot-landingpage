import type { Metadata } from "next";
import TemplatesClient from "./TemplatesClient";

export const metadata: Metadata = {
  title: "App Shot templates",
  description:
    "Explore App Shot template presets for iPhone, iPad, Apple Watch, and Mac with ready-to-copy CLI commands.",
};

export default function TemplatesPage() {
  return <TemplatesClient />;
}
