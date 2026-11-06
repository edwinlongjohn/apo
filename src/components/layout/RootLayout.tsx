// src/components/layout/RootLayout.tsx
import { Outlet } from "react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ScrollToTop } from "./ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}