import { LegalPage } from "@/components/site/LegalPage";
import { Seo } from "@/components/site/Seo";

export default function CookieNotice() {
  return (
    <>
      <Seo
        title="Cookie notice"
        description="How the Akpobire Preh & Ocholi Attorneys website uses cookies and how you can control them."
        canonical="https://apo-law.com/cookie-notice"
      />
      <LegalPage
        title="Cookie notice"
        blocks={[
          { heading: "What cookies are", text: "Cookies are small files stored on your device when you visit a website." },
          { heading: "Cookies we use", text: ["Necessary cookies, which make the website work.", "Analytics cookies, used only if you accept them, to understand how the website is used."] },
          { heading: "Your choices", text: "You can accept or refuse analytics cookies, and change your browser settings to remove cookies at any time." },
        ]}
      />
    </>
  );
}