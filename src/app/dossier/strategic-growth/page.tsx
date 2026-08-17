import type { Metadata } from 'next';

import CAODossier from '@/components/CAODossier';
import { julioPonderMetadata } from '@/seo/julio-ponder';

export const metadata: Metadata = julioPonderMetadata;

export default function StrategicGrowthPage() {
  return <CAODossier />;
}