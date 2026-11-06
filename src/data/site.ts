import practiceAreasJson from "./practice-areas.json";
import sectorsJson from "./sectors.json";

export type PracticeArea = {
  title: string;
  slug: string;
  overview: string;
  whatWeDo: { name: string; text: string }[];
  whoFor: string;
  helpful: string[];
};
export type Sector = {
  title: string;
  slug: string;
  overview: string;
  asks: string[];
  practices: string[];
};

export const practiceAreas = practiceAreasJson as PracticeArea[];
export const sectors = sectorsJson as Sector[];

export const FIRM = "Akpobire Preh & Ocholi Attorneys";

/* Placeholder contact details — replace with the firm's Office records. */
export const contact = {
  phone: "+234 800 000 0000",
  phoneHref: "tel:+2348000000000",
  whatsapp: "https://wa.me/2348000000000",
  email: "contact@apoattorney.com",
  website: "www.apoattorney.com",
};

export const offices = [
  {
    city: "Lagos",
    address: "Address to be confirmed, Victoria Island, Lagos",
    hours: "Monday to Friday, 8:30am to 5:30pm",
    map: "https://maps.google.com/?q=Victoria+Island+Lagos",
  },
  {
    city: "Abuja",
    address: "Address to be confirmed, Maitama, Abuja",
    hours: "Monday to Friday, 8:30am to 5:30pm",
    map: "https://maps.google.com/?q=Maitama+Abuja",
  },
];

export const nav = [
  { to: "/services", label: "Services" },
  { to: "/our-people", label: "Our people" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
] as const;

export const legalLinks = [
  { to: "/privacy-notice", label: "Privacy notice" },
  { to: "/terms-of-use", label: "Terms of use" },
  { to: "/cookie-notice", label: "Cookie notice" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/sitemap", label: "Site map" },
] as const;

export const featuredPracticeSlugs = [
  "corporate-commercial",
  "dispute-resolution",
  "real-estate-property",
  "employment-labour",
  "private-wealth-family",
  "tax",
];

export const values = [
  { title: "Clarity", text: "We say things plainly." },
  { title: "Integrity", text: "We act honestly and keep confidences." },
  { title: "Care", text: "We treat every client's matter as important." },
  { title: "Diligence", text: "We prepare properly and keep our word." },
];

export const howWeWork = [
  { title: "A named lawyer", text: "Every matter has a lead lawyer who stays in touch." },
  { title: "Plain advice", text: "We explain your options without legal jargon." },
  { title: "Clear next steps", text: "You will know what happens next, and when." },
];

/* Placeholder people — names, photos and details to be confirmed by the partners. */
export type Person = {
  slug: string;
  name: string;
  role: "Partner" | "Associate";
  location: string;
  practices: string[];
  bio: string;
  admission: string;
  languages: string;
};
export const people: Person[] = [
  {
    slug: "partner-akpobire",
    name: "Akpobire (Partner)",
    role: "Partner",
    location: "Lagos",
    practices: ["corporate-commercial", "mergers-acquisitions", "banking-finance"],
    bio: "Akpobire is a partner at Akpobire Preh & Ocholi Attorneys. They advise owners, directors and investors on corporate and commercial matters, transactions and finance.",
    admission: "Called to the Nigerian Bar in [year]. [Degree], [institution].",
    languages: "English",
  },
  {
    slug: "partner-preh",
    name: "Preh (Partner)",
    role: "Partner",
    location: "Abuja",
    practices: ["dispute-resolution", "employment-labour", "regulatory-compliance"],
    bio: "Preh is a partner at Akpobire Preh & Ocholi Attorneys. They advise individuals, companies and public bodies on disputes, employment and regulatory matters.",
    admission: "Called to the Nigerian Bar in [year]. [Degree], [institution].",
    languages: "English",
  },
  {
    slug: "partner-ocholi",
    name: "Ocholi (Partner)",
    role: "Partner",
    location: "Lagos",
    practices: ["real-estate-property", "private-wealth-family", "tax"],
    bio: "Ocholi is a partner at Akpobire Preh & Ocholi Attorneys. They advise individuals, families and businesses on property, estates and tax.",
    admission: "Called to the Nigerian Bar in [year]. [Degree], [institution].",
    languages: "English",
  },
  {
    slug: "associate-one",
    name: "Associate (to be confirmed)",
    role: "Associate",
    location: "Lagos",
    practices: ["intellectual-property", "data-protection-cyber-security"],
    bio: "An associate at Akpobire Preh & Ocholi Attorneys, advising businesses on intellectual property and data protection.",
    admission: "Called to the Nigerian Bar in [year]. [Degree], [institution].",
    languages: "English",
  },
  {
    slug: "associate-two",
    name: "Associate (to be confirmed)",
    role: "Associate",
    location: "Abuja",
    practices: ["energy-natural-resources-infrastructure", "antitrust-competition"],
    bio: "An associate at Akpobire Preh & Ocholi Attorneys, advising on energy, infrastructure and competition matters.",
    admission: "Called to the Nigerian Bar in [year]. [Degree], [institution].",
    languages: "English",
  },
];

export type Insight = {
  slug: string;
  title: string;
  date: string;
  category: "Legal explainers" | "Regulatory updates" | "Firm news";
  practice: string;
  readingTime: string;
  excerpt: string;
  body: { heading: string; text: string }[];
};

/* Launch article titles from the brief. Bodies are draft copy for the lawyers to write and approve. */
export const insights: Insight[] = [
  {
    slug: "steps-to-register-a-company-in-nigeria",
    title: "The main steps to register a company in Nigeria",
    date: "12 October 2026",
    category: "Legal explainers",
    practice: "corporate-commercial",
    readingTime: "4 min read",
    excerpt: "A plain guide to choosing a company type, reserving a name and filing with the Corporate Affairs Commission.",
    body: [
      { heading: "Choose the right type of company", text: "Most businesses register as a private company limited by shares. Others may suit a business name, a partnership or a company limited by guarantee. The right choice depends on who owns the business and what it will do." },
      { heading: "Reserve a name", text: "The proposed name is checked and reserved with the Corporate Affairs Commission before the company is registered." },
      { heading: "File the registration documents", text: "The company's details, its shareholders, directors and share capital are filed online, together with the required fees and stamp duties." },
      { heading: "After registration", text: "A new company should keep its statutory records, register for tax and plan its annual filings." },
    ],
  },
  {
    slug: "what-to-do-if-you-receive-a-demand-letter",
    title: "What to do if you receive a demand letter",
    date: "5 October 2026",
    category: "Legal explainers",
    practice: "dispute-resolution",
    readingTime: "3 min read",
    excerpt: "A demand letter is often the first step before a claim. Here is how to read it and what to do next.",
    body: [
      { heading: "Read it carefully", text: "Note who sent it, what they say you owe or must do, and the deadline they give." },
      { heading: "Do not ignore it", text: "Ignoring a demand can lead to a court claim. A short, careful reply often helps." },
      { heading: "Gather your documents", text: "Collect the contract, letters, emails and any payment records, and write a short timeline of events." },
      { heading: "Take advice", text: "A lawyer can tell you whether the demand is valid and how best to respond." },
    ],
  },
  {
    slug: "what-the-nigeria-data-protection-act-asks-of-businesses",
    title: "What the Nigeria Data Protection Act asks of businesses",
    date: "28 September 2026",
    category: "Regulatory updates",
    practice: "data-protection-cyber-security",
    readingTime: "5 min read",
    excerpt: "An overview of the main duties the Act places on organisations that collect and use personal data.",
    body: [
      { heading: "Know what you collect", text: "Businesses should map the personal data they hold, why they hold it, and where it goes." },
      { heading: "Have a lawful basis", text: "Each use of personal data needs a lawful basis, such as consent, a contract or a legal obligation." },
      { heading: "Tell people", text: "A clear privacy notice explains how data is used and the rights people have." },
      { heading: "Keep it secure", text: "Organisations must protect data and respond properly if a breach occurs." },
    ],
  },
];

export const faqs = [
  { q: "How do I start?", a: `Send an enquiry using the form, call us on ${contact.phone} or write to us on WhatsApp. We will reply within one working day, ask a few questions, and tell you which lawyer can help.` },
  { q: "Is my enquiry treated as confidential?", a: "We use what you send only to respond to your enquiry. Sending an enquiry does not create a lawyer and client relationship. Please do not send confidential or time-sensitive information until we have confirmed that we can act for you." },
  { q: "How much will it cost?", a: "Fees depend on the work. Before we begin, we agree the scope of the work and how fees will be charged, and we confirm this in writing." },
  { q: "Is there a charge for a first conversation?", a: "We will tell you whether there is a charge before the conversation takes place." },
  { q: "I live outside Nigeria. Can you help?", a: "Yes. We act for Nigerians abroad and for businesses that deal with Nigeria. We work by phone, WhatsApp, email and video call, and our partners abroad can speak to you in your own time zone." },
  { q: "What should I bring to a first conversation?", a: "It depends on your matter. Each practice area has a short list headed \"Helpful to bring\". If you are unsure, send what you have and we will tell you what else we need." },
  { q: "Who will handle my matter?", a: "Every matter has a named lead lawyer. You will have their contact details and they will keep you informed." },
  { q: "How long will my matter take?", a: "That depends on the matter. Once we understand it, we will give you an estimate of the steps and the time they usually take, and we will tell you if that changes." },
  { q: "Can I meet a lawyer in person?", a: "Yes. Please make an appointment through the form or by phone, and tell us which office suits you." },
  { q: "I have received court papers, or a deadline is close. What should I do?", a: `Call us on ${contact.phone} as soon as you can. Court deadlines are short. Please do not wait for a reply to the form.` },
  { q: "How do you look after my personal data?", a: "See our Privacy notice." },
];

export const enquiryTopics = [
  ...practiceAreasJson.map((p) => p.title),
  "Individual or family matter",
  "Media and press",
  "Something else",
];

export const getPractice = (slug: string) => practiceAreas.find((p) => p.slug === slug);
export const practiceSlugByTitle = (title: string) =>
  practiceAreas.find((p) => p.title.toLowerCase() === title.toLowerCase())?.slug;
export const initials = (name: string) =>
  name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "AP";
