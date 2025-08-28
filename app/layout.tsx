import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://gurxsingh.dev"),
  title: 'Gursimranjit Singh - Software Engineer',
  description:
    'Frontend Developer with expertise in React, Next.js, Tailwind CSS, GraphQL, and Node.js. Experienced in building responsive and high-performance web applications.',
  generator: 'Next.js',
  keywords: [
    'Gursimranjit Singh',
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'GraphQL',
    'Full Stack Developer',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Gursimranjit Singh', url: 'https://www.linkedin.com/in/gursimranjit-singh-bb3a98234' }],
  creator: 'Gursimranjit Singh',
  publisher: 'Gursimranjit Singh',
  openGraph: {
    title: 'Gursimranjit Singh - Software Engineer',
    description:
      'Portfolio of Gursimranjit Singh, a Frontend Developer skilled in React, Next.js, and modern web technologies.',
    url: 'https://gurxsingh.dev',
    siteName: 'Gursimranjit Singh Portfolio',
    images: [
      {
        url: '/myimg.jpeg',
        width: 1200,
        height: 630,
        alt: 'Gursimranjit Singh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gursimranjit Singh - Software Engineer',
    description:
      'Frontend Developer specializing in React, Next.js, Tailwind CSS, GraphQL, and Node.js.',
    images: ['/myimg.jpeg'],
  },
 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
