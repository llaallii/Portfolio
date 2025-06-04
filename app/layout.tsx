import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ratan Bunkar - Portfolio',
  description: "Ratan Bunkar's personal portfolio. Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences",
  keywords: ['portfolio', 'developer', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Ratan Bunkar' }],
  creator: 'Ratan Bunkar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ratanbunkar.com',
    title: 'Ratan Bunkar - Portfolio',
    description: 'Full Stack Developer & UI/UX Designer',
    siteName: 'Ratan Bunkar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ratan Bunkar - Portfolio',
    description: 'Full Stack Developer & UI/UX Designer',
    creator: '@ratanbunkar',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
