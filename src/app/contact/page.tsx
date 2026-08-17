import type { Metadata } from "next";
import ExecutiveContact from "@/components/ExecutiveContact";
import { contactMetadata } from "@/seo/contact";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return <ExecutiveContact />;
}