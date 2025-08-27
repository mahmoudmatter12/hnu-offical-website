import type { Metadata } from 'next';
import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import notFound from '../not-found';
import { routing } from '@/i18n/routing';
import { Providers } from '@/contexts';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Ahlan Helwan National University',
  description:
    'Official Website of Helwan National University for Orientation days',
  icons: {
    icon: '/uni.png',
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
        <div className='min-h-screen'>
          <Header />
          {children}
        </div>
      </Providers>
    </NextIntlClientProvider>
  );
}
