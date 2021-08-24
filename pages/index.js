// pages/index.js maps to projectlumiere.org/ (our homepage)
// See https://nextjs.org/docs/routing/introduction#index-routes

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import HomeLayout from '@components/layouts/HomeLayout';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Project Lumiere</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='flex'>
          <h1 className='text-2xl font-medium'>
            We are championing Computer Science for all
          </h1>
        </section>
      </main>

      {mounted && (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Change theme
        </button>
      )}
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
