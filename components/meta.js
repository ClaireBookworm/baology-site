import Head from 'next/head'

export default ({
  title = 'Baology',
  description = 'A biology class with Kevin Bao.',
  image = 'https://baology.org/images/baology-logo.png',
  url = 'https://baology.org'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="baology" />
    <meta name="twitter:site" content="@baology" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'baology',
        url: 'https://baology.org',
        logo: 'https://baology.org/flag.png',
        sameAs: [
          'https://www.instagram.org/baology',
          'https://www.facebook.com/baology'
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'contact@baology.org',
            contactType: 'customer support',
            url: 'https://baology.org'
          }
        ]
      })}}
    />
  </Head>
)

