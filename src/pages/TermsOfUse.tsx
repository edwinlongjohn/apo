import { LegalPage } from "@/components/site/LegalPage";
import { Seo } from "@/components/site/Seo";

export default function TermsOfUse() {
  return (
    <>
      <Seo
        title="Terms of use"
        description="The terms that apply when you use the Akpobire Preh & Ocholi Attorneys website."
        canonical="https://apo-law.com/terms-of-use"
      />
      <LegalPage
        title="Terms of use"
        blocks={[
          { heading: "Using this website", text: "By using this website you agree to these terms. If you do not agree, please do not use it." },
          { heading: "No legal advice", text: "The content of this website is general information. It is not legal advice and you should not rely on it." },
          { heading: "No lawyer and client relationship", text: "Using this website or sending us a message does not make you our client. A lawyer and client relationship begins only when we confirm in writing that we will act for you." },
          { heading: "Our content", text: "The text, design, logo and other material on this website belong to Akpobire Preh & Ocholi Attorneys or its licensors. You may read, print and share pages for personal or internal business use." },
          { heading: "Accuracy", text: "We take care to keep the website accurate and current, but we do not promise that it is complete, accurate or up to date." },
          { heading: "Limits of liability", text: "To the extent the law allows, we are not liable for loss that results from your use of this website or reliance on its content." },
          { heading: "Governing law", text: "These terms are governed by the laws of the Federal Republic of Nigeria, and the courts of Nigeria have jurisdiction." },
        ]}
      />
    </>
  );
}