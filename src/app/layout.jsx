import './globals.css'

export const metadata = {
  title: 'Akande Gbolahan | AI, Data & Blockchain Engineer',
  description: 'AI automation specialist, data analyst and blockchain engineer in Nigeria. Building AI chatbots, data pipelines and smart contracts. Open to freelance.',
  keywords: 'data analyst Nigeria, AI automation specialist, Python developer, chatbot development, customer segmentation, RFM analysis, blockchain developer, Clarity, Solidity, Stacks, freelance data analyst',
  authors: [{ name: 'Akande Gbolahan Emmanuel' }],
  metadataBase: new URL('https://agedevs.com'),
  openGraph: {
    title: 'Akande Gbolahan | AI, Data & Blockchain Engineer',
    description: 'AI automation specialist, data analyst and blockchain engineer in Nigeria. Building AI chatbots, data pipelines and smart contracts. Open to freelance.',
    url: 'https://agedevs.com',
    siteName: 'Agedevs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akande Gbolahan | AI, Data & Blockchain Engineer',
    description: 'AI automation specialist, data analyst and blockchain engineer in Nigeria. Building AI chatbots, data pipelines and smart contracts. Open to freelance.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Akande Gbolahan Emmanuel',
  url: 'https://agedevs.com',
  image: 'https://agedevs.com/proF1.png',
  jobTitle: 'Data Analyst & AI Automation Specialist',
  description: 'Python data analyst and AI automation specialist building customer segmentation pipelines, AI chatbots, automated workflows, and blockchain applications.',
  knowsAbout: [
    'Data Analysis', 'Python', 'Pandas', 'SQL', 'AI Automation',
    'Chatbot Development', 'Groq API', 'RFM Customer Segmentation',
    'Blockchain Development', 'Clarity Smart Contracts', 'Node.js', 'React',
  ],
  nationality: { '@type': 'Country', name: 'Nigeria' },
  sameAs: [
    'https://github.com/thecodedcoder',
    'https://linkedin.com/in/gbolahan-akande-079ba814b',
  ],
  worksFor: { '@type': 'Organization', name: 'LAB (Let Africa Build)' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
