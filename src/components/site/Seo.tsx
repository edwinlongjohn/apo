import { Helmet } from "react-helmet-async"
import type { ReactNode } from "react"

type SeoProps = {
  title: string
  description?: string
  canonical?: string
  image?: string
  noindex?: boolean,
  children?:ReactNode
}

const SITE_NAME = "Akpobire Preh & Ocholi Attorneys"
const DEFAULT_DESCRIPTION =
  "A law firm for individuals and businesses in Nigeria and abroad. Advice across every area of law. Speak to a lawyer."

export function Seo({ title, description = DEFAULT_DESCRIPTION, canonical, image, noindex, children }: SeoProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {canonical && <meta property="og:url" content={canonical} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
        {children}
    </Helmet>
  )
}