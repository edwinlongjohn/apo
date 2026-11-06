import { LegalPage } from "@/components/site/LegalPage";
import { Seo } from "@/components/site/Seo";

export default function Disclaimer() {
  return (
    <>
      <Seo
        title="Disclaimer"
        description="The content of the Akpobire Preh & Ocholi Attorneys website is general information, not legal advice."
        canonical="https://apo-law.com/disclaimer"
      />
      <LegalPage
        title="Disclaimer"
        blocks={[
          { heading: "General information only", text: "The content of this website is general information. It is not legal advice on your matter and you should not rely on it." },
          { heading: "No lawyer and client relationship", text: "Sending us a message does not create a lawyer and client relationship. We act for you only once we have confirmed this in writing." },
          { heading: "Partners abroad", text: "Each partner advises only on the law they are qualified to practise." },
        ]}
      />
    </>
  );
}