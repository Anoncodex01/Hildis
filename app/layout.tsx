import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: 'HILDIS - Reliable Industrial & Mining Solutions for Africa',
    template: '%s | HILDIS',
  },
  description:
    'Delivering high-quality industrial equipment, premium chemicals, and expert technical services across East Africa.',
  metadataBase: new URL(siteUrl),
  applicationName: 'HILDIS',
  keywords: [
    'HILDIS',
    'industrial equipment',
    'mining solutions',
    'engineering services',
    'chemicals supply',
    'East Africa',
    'Tanzania',
  ],
  icons: {
    icon: '/logo/hildis.png',
    apple: '/logo/hildis.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'HILDIS - Reliable Industrial & Mining Solutions for Africa',
    description:
      'Delivering high-quality industrial equipment, premium chemicals, and expert technical services across East Africa.',
    siteName: 'HILDIS',
    images: [
      {
        url: '/logo/hildis.png',
        width: 512,
        height: 512,
        alt: 'HILDIS logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'HILDIS - Reliable Industrial & Mining Solutions for Africa',
    description:
      'Delivering high-quality industrial equipment, premium chemicals, and expert technical services across East Africa.',
    images: ['/logo/hildis.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

