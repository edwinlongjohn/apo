import { LegalPage } from "@/components/site/LegalPage";
import { Seo } from "@/components/site/Seo";

export default function PrivacyNotice() {
  return (
    <>
      <Seo
        title="Privacy notice"
        description="How Akpobire Preh & Ocholi Attorneys collects and uses personal data under the Nigeria Data Protection Act."
        canonical="https://apo-law.com/privacy-notice"
      />
      <LegalPage
        title="Privacy notice"
        blocks={[
          { heading: "Who we are", text: "Akpobire Preh & Ocholi Attorneys is the controller of the personal data described in this notice." },
          { heading: "What we collect", text: ["Enquiry forms and messages: your name, email, phone number, country and the message you write.", "Job applications: the details and documents you send us.", "Newsletter: your email address and your consent.", "Website use: technical data collected through cookies, only if you accept them."] },
          { heading: "Why we use it, and our lawful basis", text: ["To reply to your enquiry and decide whether we can act.", "To assess a job application.", "To send the newsletter, with your consent.", "To understand and improve the website, with your consent.", "To meet legal and professional duties."] },
          { heading: "Who we share it with", text: "Service providers who help us run the website, email, hosting and analytics, under written terms. Our partners abroad, only where your matter needs them. Regulators, courts or other authorities where the law requires it. We do not sell personal data." },
          { heading: "Transfers outside Nigeria", text: "Some providers and partners are outside Nigeria. Where this happens we take steps to protect your data as the Nigeria Data Protection Act requires." },
          { heading: "Security", text: "We use technical and organisational measures to protect personal data, including encryption in transit and restricted access." },
          { heading: "Client information", text: "Information about clients and their matters is also protected by our professional duty of confidentiality. This notice does not replace that duty." },
          { heading: "Your rights", text: "You may ask for a copy of your data, correct it, delete it, restrict or stop our use of it, or withdraw consent at any time. You may also complain to the Nigeria Data Protection Commission." },
          { heading: "Children", text: "This website is not aimed at children, and we do not knowingly collect their data." },
          { heading: "Changes", text: "We will publish any changes on this page and update the date." },
        ]}
      />
    </>
  );
}