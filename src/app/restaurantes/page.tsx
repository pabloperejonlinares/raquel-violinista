import { EventServicePage } from "@/components/EventServicePage";
import { SitePageLayout } from "@/components/SitePageLayout";
import { getServicePageMetadata, servicePages } from "@/lib/servicePages";

import type { Metadata } from "next";

const page = servicePages.restaurantes;

export const metadata: Metadata = getServicePageMetadata(page);

export default function RestaurantesPage() {
  return (
    <SitePageLayout>
      <EventServicePage page={page} />
    </SitePageLayout>
  );
}
