import type { Metadata } from 'next';
import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import notFound from '../not-found';
import { routing } from '@/i18n/routing';
import { Providers } from '@/contexts';
import Header2 from '@/components/header2';

export const metadata: Metadata = {
  title: 'Helwan National University',
  description: 'The official website of Helwan National University',
  icons: {
    icon: '/logo.png',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <Providers>
        <Header2 />
        {children}
      </Providers>
    </NextIntlClientProvider>
  );
}
