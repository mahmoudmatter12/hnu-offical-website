import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('navigation');
  return (
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <p className='text-white text-lg'>
        Welcome to the official website of Helwan National University.
      </p>
    </div>
  );
}
