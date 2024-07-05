import { Inter } from 'next/font/google';
import './globals.css';
import { dir } from 'i18next';
import { Metadata } from 'next';
import { i18nConfig } from '../../i18nConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | My Next.js App',
    default: 'My Next.js App'
  }
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => {
    locale;
  });
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
