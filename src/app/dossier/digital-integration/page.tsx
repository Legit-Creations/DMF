import type { Metadata } from 'next';

import CTODossier from '@/components/CTODossier';
import { ctoDossierMetadata } from '@/seo/ctoDossier';

export const metadata: Metadata = ctoDossierMetadata;

export default function DigitalIntegrationPage() {
  return <CTODossier />;
}