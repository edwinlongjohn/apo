/** Builds a route head() with the brand's title pattern and social tags. */
export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
export const pageTitle = (name: string) => `${name} | Akpobire Preh & Ocholi Attorneys`;
