import Image from 'next/image';
import Link from 'next/link';
import projectLumiere from '@public/images/logos/ProjectLumiere.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Disclosure } from '@headlessui/react';

const sitemap = [
  {
    name: 'Media',
    content: [
      { name: 'Lumiere Press', link: '/press' },
      { name: 'Lumiere Channel', link: '/channel' },
      { name: 'About Media', link: '/media' },
    ],
  },
  {
    name: 'Resources',
    content: [
      { name: 'Contributing', link: '/resources/contributing' },
      { name: 'Changelog', link: '/resources/changelog' },
      { name: 'Contact Us', link: '/resources/contact' },
    ],
  },
  {
    name: 'Company',
    content: [
      { name: 'Home', link: '/' },
      { name: 'Blog', link: '/company/blog' },
      { name: 'Team', link: '/company/team' },
      { name: 'Support Us', link: '/company/donate' },
      { name: 'Brand', link: '/company/brand' },
    ],
  },
  {
    name: 'Legal',
    content: [
      { name: 'Privacy Policy', link: '/company/legal/privacy' },
      { name: 'Terms and Conditions', link: '/company/legal/terms' },
      { name: 'Contributors', link: '/company/legal/cla' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-gray-800 border-t border-gray-700 mt-28 md:pt-12 md:pb-6">
      <div className="container">
        {/* Navigation menu for large screens (md and above) */}
        <nav className="flex justify-between text-sm leading-loose transition-colors lg:text-xs md:hidden">
          {sitemap.map((category) => (
            <ul key={category.name}>
              <h3 className="heading-tertiary">{category.name}</h3>
              {category.content.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <a className="font-normal text-gray-500 transition-colors duration-200 hover:text-gray-400">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/* Navigation menu for small screens (sm and below) */}
        <nav className="text-xs text-gray-500">
          {sitemap.map((category) => (
            <Disclosure
              as="div"
              className="hidden border-b border-gray-700 md:block"
              key={category.name}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="h3"
                    className="flex items-center justify-between py-4 cursor-pointer heading-tertiary"
                  >
                    <p>{category.name}</p>
                    {open ? (
                      <FiMinus className="w-2.5 h-2.5" />
                    ) : (
                      <FiPlus className="w-2.5 h-2.5" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel as="ul" className="mt-1 ml-3">
                    {category.content.map((item) => (
                      <li key={item.name}>
                        <Link href={item.link}>
                          <a className="block mb-2 font-normal text-gray-500 transition-colors duration-200 hover:text-gray-400">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </nav>

        {/* Bottom strip for large screens (md and above) */}
        <section className="md:hidden">
          <figure className="flex items-center cursor-default select-none mt-14">
            <div className="relative mb-0.5 mr-1.5 w-7 h-7">
              <Image
                src={projectLumiere}
                alt="Project Lumiere logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <figcaption className="font-serif text-2xl text-gray-300">
              Lumiere
            </figcaption>
          </figure>

          <div className="flex items-center justify-between text-gray-500 lg:-mt-1">
            <p className="text-xs lg:text-2xs">
              &copy; 2021 Project Lumiere 501(c)(3). All rights reserved.
            </p>
            <div className="flex flex-row items-center -space-x-12">
              <a
                href="https://vercel.com/?utm_source=lumiere&utm_campaign=oss"
                target="_blank"
                rel="noreferrer noopener"
                className="flex justify-center scale-80"
              >
                <Image
                  src="/images/powered-by-vercel.svg"
                  alt="Powered by Vercel"
                  width="230"
                  height="41"
                />
              </a>
              <iframe
                title="Instatus"
                src="https://projectlumiere.instatus.com/embed-status/dark-sm"
                width="230"
                height="41"
                frameBorder="0"
                scrolling="no"
                className="scale-80 dark:rounded-lg"
              />
            </div>
            <div className="flex">
              <a
                href="https://www.linkedin.com/company/lumierecodes"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin className="w-5 h-5 text-gray-400 transition-colors hover:text-gray-300" />
              </a>
              <div className="mx-3 border-r border-gray-600" />
              <a
                href="https://github.com/project-lumiere/lumiere.codes"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub className="w-5 h-5 text-gray-400 transition-colors hover:text-gray-300" />
              </a>
            </div>
          </div>
        </section>

        {/* Bottom strip for small screens (sm and above) */}
        <section className="hidden md:block">
          <figure className="flex items-center justify-center mt-12 cursor-default select-none">
            <div className="relative w-6 h-6 mb-0.5 mr-1">
              <Image
                src={projectLumiere}
                alt="Project Lumiere logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <figcaption className="font-serif text-xl text-gray-300">
              Lumiere
            </figcaption>
          </figure>

          <div className="flex flex-col items-center mt-6">
            <a
              href="https://vercel.com/?utm_source=lumiere&utm_campaign=oss"
              target="_blank"
              rel="noreferrer noopener"
              className="flex justify-center scale-75 w-max h-max"
            >
              <Image
                src="/images/powered-by-vercel.svg"
                alt="Powered by Vercel"
                width="230"
                height="50"
              />
            </a>
            <iframe
              title="Instatus"
              src="https://projectlumiere.instatus.com/embed-status/dark-sm"
              width="230"
              height="41"
              frameBorder="0"
              scrolling="no"
              className="mx-auto scale-75 dark:rounded-lg"
            />
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://www.linkedin.com/company/lumierecodes"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="w-5 h-5 text-gray-400 transition-colors hover:text-gray-300" />
            </a>
            <div className="mx-3 border-r border-gray-600" />
            <a
              href="https://github.com/project-lumiere/lumiere.codes"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub className="w-5 h-5 text-gray-400 transition-colors hover:text-gray-300" />
            </a>
          </div>

          <p className="my-4 text-center text-gray-500 text-2xs">
            &copy; 2021 Project Lumiere 501(c)(3). All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
