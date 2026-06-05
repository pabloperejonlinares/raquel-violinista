import { EventServicePage } from "@/components/EventServicePage";
import { SitePageLayout } from "@/components/SitePageLayout";
import { getServicePageMetadata, servicePages } from "@/lib/servicePages";

import type { Metadata } from "next";

const page = servicePages.hotelesRestaurantes;

export const metadata: Metadata = getServicePageMetadata(page);

export default function HotelesRestaurantesPage() {
  return (
    <SitePageLayout>
      <EventServicePage page={page} />
    </SitePageLayout>
  );
}
