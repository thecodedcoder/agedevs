import './globals.css'

export const metadata = {
  title: 'Akande Gbolahan Emmanuel | Data Analyst & AI Automation Specialist',
  description: 'Data analyst, AI automation specialist, and blockchain engineer building intelligent automation tools, data pipelines, and AI-powered applications.',
  keywords: 'data analyst, AI automation, Python, chatbot development, blockchain developer, Clarity, Solidity, Stacks, Nigeria',
  authors: [{ name: 'Akande Gbolahan Emmanuel' }],
  metadataBase: new URL('https://agedevs.com'),
  openGraph: {
    title: 'Akande Gbolahan Emmanuel | Data Analyst & AI Automation Specialist',
    description: 'Data analyst, AI automation specialist, and blockchain engineer building intelligent automation tools, data pipelines, and AI-powered applications.',
    url: 'https://agedevs.com',
    siteName: 'Agedevs',
    images: [
      {
        url: '/Age_logo.png',
        alt: 'Akande Gbolahan Emmanuel - Data Analyst & AI Automation Specialist',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akande Gbolahan Emmanuel | Data Analyst & AI Automation Specialist',
    description: 'Data analyst, AI automation specialist, and blockchain engineer building intelligent automation tools, data pipelines, and AI-powered applications.',
    images: ['/Age_logo.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
