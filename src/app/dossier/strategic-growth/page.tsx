import type { Metadata } from 'next';

import CAODossier from '@/components/CAODossier';
import { caoMetadata } from '@/seo/caoDossier';

export const metadata: Metadata = caoMetadata;

export default function StrategicGrowthPage() {
  return <CAODossier />;
}
