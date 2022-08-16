import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import hackPlus from '@public/images/logos/HackPlus.svg';
import hackClub from '@public/images/logos/HackClub.svg';
import editor from '@public/images/editor.png';
import { Gradient } from '@lib/gradient';
import { FiChevronRight } from 'react-icons/fi';
import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { useLocalStorage } from 'react-use';
import Tweet from '@components/ui/Tweet';
import { getTweets } from '@lib/twitter';
import { FaMarkdown, FaReact } from 'react-icons/fa';
import { NextSeo } from 'next-seo';

export default function Home({ tweets }) {
  const [value, setValue] = useLocalStorage('refresh', false);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('.home-gradient-canvas');
    if (value) {
      window.location.reload();
      setValue(false);
    }
  }, [value, setValue]);

  return (
    <div className="bg-gray-900">
  <NextSeo
      title="Lumiere - MDX editor for Techinal/Stem Research"
      description="Discover, Publish and Create Techinal and STEM content with MDX"
    />

      <Header pageType="home" />

      <div className="relative -mt-44 h-[396px] lg:h-[360px] sm:h-[320px]">
        <canvas
          className="absolute top-0 home-gradient-canvas"
          data-js-darken-top
          data-transition-in
        />
      </div>

      <div className="container -mt-32 lg:-mt-28 sm:-mt-9">
        <section className="flex mt-14 sm:mt-0">
          <div className="z-10 max-w-xl">
            <h1 className="text-gray-100 heading-primary">
              A revolution for{' '}
              <span className="gradient-text">Computer Science</span>{' '}
              publications.
            </h1>
            <p className="pr-16 mt-10 text-lg lg:text-base lg:pr-28 sm:pr-0 sm:text-sm sm:leading-relaxed xs:text-xs">
              Lumiere is the most powerful CompSci publication platform in the
              world, powered by the MDX editor of your dreams. Breathtaking
              levels of customization and liberty, by design.
            </p>
            <div className="flex mt-20 sm:mt-10">
              <Link href="/editor">
                <a className="flex items-center mr-6 button-secondary pl-4 pr-2 py-2 text-xs lg:text-2xs sm:pl-3 sm:pr-1.5 sm:py-1.5">
                  <p className="mr-2">Try the editor</p>
                  <FiChevronRight className="w-5 h-5 lg:w-4 lg:h-4" />
                </a>
              </Link>
              <Link href="/press">
                <a className="button-tertiary px-4 py-2 text-xs lg:text-2xs sm:py-1.5 border-gray-700 hover:border-gray-400 text-gray-400">
                  See publications
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-48 mb-32">
          <div className="grid justify-between grid-cols-5 gap-5 sm:grid-cols-3">
            <figure className="relative w-32 h-12 lg:w-28 lg:h-9 md:w-24 md:h-7">
              <Image
                src={hackPlus}
                alt="Hack Plus Logo"
                layout="fill"
                objectFit="contain"
              />
            </figure>
            <figure className="relative w-32 h-12 lg:w-28 lg:h-9 md:w-24 md:h-7">
              <Image
                src={hackClub}
                alt="Hack Plus Logo"
                layout="fill"
                objectFit="contain"
              />
            </figure>
            <figure className="relative w-32 h-12 lg:w-28 lg:h-9 md:w-24 md:h-7">
              <svg viewBox="0 0 284 65" fill="white" className="h-full">
                <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
              </svg>
            </figure>
          </div>
        </section>
      </div>

      <hr className="container border-gray-800" />

      <main className="container mt-32">
        <section className="flex flex-row items-center justify-between md:flex-col">
          <figure className="flex-1 scale-110">
            <div className="relative z-10 group -rotate-3">
              <div className="absolute bg-gradient-to-tr from-sky-600 to-indigo-600 -inset-0.5 rounded-lg blur-2xl group-hover:blur-xl group-hover:opacity-60 transition-all duration-200 opacity-50" />
              <Image
                src={editor}
                alt="Hack Plus Logo"
                height={600}
                width={1200}
                objectFit="contain"
              />
            </div>
          </figure>
          <div className="flex-1 mt-16 ml-32 md:ml-0">
            <h2 className="text-gray-200 heading-secondary">
              Living on the cutting-edge
            </h2>
            <p className="mt-12 leading-relaxed">
              Our live{' '}
              <a href="https://mdxjs.com/" target="_blank" rel="noreferrer">
                MDX
              </a>{' '}
              editor empowers creators with capabilities never seen in
              traditional publication platforms. We support the GFM-Compliant{' '}
              <a
                href="https://daringfireball.net/projects/markdown/"
                target="_blank"
                rel="noreferrer"
              >
                Markdown
              </a>{' '}
              spec, in addition to an infinitely extensible set of{' '}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                React
              </a>{' '}
              components.
            </p>
            <hr className="border-gray-800 mt-9" />
            <div className="flex items-center mt-6">
              <FaMarkdown className="w-10 h-10 text-gray-500 transition-colors hover:text-gray-300" />
              <FaReact className="w-8 h-8 ml-6 text-gray-500 transition-colors hover:text-gray-300" />
            </div>
          </div>
        </section>

        <hr className="my-24 border-gray-800" />

        <section>
          <h2 className="font-bold text-center text-gray-200 scale-125 heading-secondary">
            Components — &#8734; and beyond
          </h2>
          <p className="px-24 mt-12 leading-relaxed lg:px-0">
            We include a whole assortment of drop-in components for your
            publications, from code playgrounds to the most customizable code
            blocks you've ever seen. Still not satisfied? Craft and use your own
            components.
          </p>
          <div className="flex items-center justify-center my-18">
            <figure className="scale-90 sm:scale-75">
              <div className="relative z-10 group -rotate-3">
                <div className="absolute bg-gradient-to-tr from-amber-600 to-pink-600 -inset-0.5 rounded-lg blur-2xl group-hover:blur-xl group-hover:opacity-60 transition-all duration-200 opacity-50" />
                <Tweet key={tweets[0].id} forceDark {...tweets[0]} />
              </div>
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </div>

    
  );
}

export const getStaticProps = async () => {
  const tweets = await getTweets(['1395436062411984899']);

  return { props: { tweets } };
};
