import type { Metadata } from 'next';

import CTODossier from '@/components/CTODossier';
import { ctoMetadata } from '@/seo/ctoDossier';

export const metadata: Metadata = ctoMetadata;

export default function DigitalIntegrationPage() {
  return <CTODossier />;
}
