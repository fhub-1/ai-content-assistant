import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-content-assistant.vercel.app'),
  title: "AI Content Assistant - Your AI Partner for YouTube & Podcasts",
  description: "Transform your content creation with AI-powered scripts, descriptions, and titles. The perfect tool for YouTubers and Podcasters to create engaging content.",
  openGraph: {
    title: "AI Content Assistant - Your AI Partner for YouTube & Podcasts",
    description: "Transform your content creation with AI-powered scripts, descriptions, and titles. The perfect tool for YouTubers and Podcasters to create engaging content.",
    url: '/',
    siteName: "AI Content Assistant",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Content Assistant - Your AI Partner for YouTube & Podcasts",
    description: "Transform your content creation with AI-powered scripts, descriptions, and titles. The perfect tool for YouTubers and Podcasters to create engaging content.",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="product-hunt-domain-verify" content="ph_YOUR_DOMAIN_VERIFICATION" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
