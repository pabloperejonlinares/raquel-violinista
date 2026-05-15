import { HelpFab } from "@/components/HelpFab";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type SitePageLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export function SitePageLayout({ children }: SitePageLayoutProps) {
  return (
    <div id="top" className="flex min-h-dvh w-full flex-col bg-white text-zinc-900">
      <SiteHeader />
      <main className="min-w-0 w-full flex-1">{children}</main>
      <SiteFooter />
      <HelpFab />
    </div>
  );
}
