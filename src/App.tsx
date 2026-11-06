import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "@/components/layout/RootLayout";
import NotFound from "@/pages/NotFound";
import RouteError from "@/pages/RouteError";

import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import OurPeople from "@/pages/OurPeople";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import CookieNotice from "@/pages/CookieNotice";
import Disclaimer from "@/pages/Disclaimer";
import PrivacyNotice from "@/pages/PrivacyNotice";
import TermsOfUse from "@/pages/TermsOfUse";
import Sitemap from "@/pages/Sitemap";
import InsightsIndex from "@/pages/Insights/Index";
import InsightsSlug from "@/pages/Insights/Slug";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Index /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "our-people", element: <OurPeople /> },
      { path: "careers", element: <Careers /> },
      { path: "contact", element: <Contact /> },
      { path: "cookie-notice", element: <CookieNotice /> },
      { path: "disclaimer", element: <Disclaimer /> },
      { path: "privacy-notice", element: <PrivacyNotice /> },
      { path: "terms-of-use", element: <TermsOfUse /> },
      { path: "sitemap", element: <Sitemap /> },
      {
        path: "insights",
        children: [
          { index: true, element: <InsightsIndex /> },
          { path: ":slug", element: <InsightsSlug /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}