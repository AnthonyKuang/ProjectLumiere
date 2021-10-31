import Image from 'next/image';
import Link from 'next/link';
import projectLumiere from '@public/images/logos/ProjectLumiere.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Disclosure } from '@headlessui/react';

export default function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-gray-800 border-t border-gray-700 md:pt-12 md:pb-6 mt-36">
      <div className="container">
        <nav className="flex justify-between text-sm leading-loose transition-colors lg:text-xs md:hidden">
          <ul>
            <h3 className="heading-tertiary">Media</h3>
            <li>
              <Link href="/press">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Lumiere Press
                </a>
              </Link>
            </li>
            <li>
              <Link href="/channel">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Lumiere Channel
                </a>
              </Link>
            </li>
            <li>
              <Link href="/media">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  About Media
                </a>
              </Link>
            </li>
          </ul>
          <ul>
            <h3 className="heading-tertiary">Resources</h3>
            <li>
              <Link href="/resources/contributing">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Contributing
                </a>
              </Link>
            </li>
            <li>
              <Link href="/changelog">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Changelog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
          <ul>
            <h3 className="heading-tertiary">Company</h3>
            <li>
              <Link href="/">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/company/blog">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/company/team">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Team
                </a>
              </Link>
            </li>
            <li>
              <Link href="/company/donate">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Support Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/company/brand">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Brand
                </a>
              </Link>
            </li>
          </ul>
          <ul>
            <h3 className="heading-tertiary">Legal</h3>
            <li>
              <Link href="/legal/privacy">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legal/terms">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Terms of Service
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legal/cla">
                <a className="font-normal text-gray-500 hover:text-gray-400">
                  Contributors
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="text-xs text-gray-500">
          <Disclosure
            as="div"
            className="hidden border-b border-gray-700 md:block"
          >
            {({ open }) => (
              <>
                <Disclosure.Button
                  as="h3"
                  className="flex items-center justify-between py-4 cursor-pointer heading-tertiary"
                >
                  <p>Media</p>
                  {open ? (
                    <FiMinus className="w-2.5 h-2.5" />
                  ) : (
                    <FiPlus className="w-2.5 h-2.5" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel as="ul" className="mt-1 ml-3">
                  <li>
                    <Link href="/press">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Lumiere Press
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/channel">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Lumiere Channel
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/media">
                      <a className="block mb-4 font-normal text-gray-500 hover:text-gray-400">
                        About Media
                      </a>
                    </Link>
                  </li>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure
            as="div"
            className="hidden border-b border-gray-700 md:block"
          >
            {({ open }) => (
              <>
                <Disclosure.Button
                  as="h3"
                  className="flex items-center justify-between py-4 cursor-pointer heading-tertiary"
                >
                  <p>Resources</p>
                  {open ? (
                    <FiMinus className="w-2.5 h-2.5" />
                  ) : (
                    <FiPlus className="w-2.5 h-2.5" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel as="ul" className="mt-1 ml-3">
                  <li>
                    <Link href="/resources/contributing">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Contributing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/changelog">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Changelog
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="block mb-4 font-normal text-gray-500 hover:text-gray-400">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure
            as="div"
            className="hidden border-b border-gray-700 md:block"
          >
            {({ open }) => (
              <>
                <Disclosure.Button
                  as="h3"
                  className="flex items-center justify-between py-4 cursor-pointer heading-tertiary"
                >
                  <p>Company</p>
                  {open ? (
                    <FiMinus className="w-2.5 h-2.5" />
                  ) : (
                    <FiPlus className="w-2.5 h-2.5" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel as="ul" className="mt-1 ml-3">
                  <li>
                    <Link href="/">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/blog">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Blog
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/team">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Team
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/donate">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Support Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/brand">
                      <a className="block mb-4 font-normal text-gray-500 hover:text-gray-400">
                        Brand
                      </a>
                    </Link>
                  </li>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure
            as="div"
            className="hidden border-b border-gray-700 md:block"
          >
            {({ open }) => (
              <>
                <Disclosure.Button
                  as="h3"
                  className="flex items-center justify-between py-4 cursor-pointer heading-tertiary"
                >
                  <p>Legal</p>
                  {open ? (
                    <FiMinus className="w-2.5 h-2.5" />
                  ) : (
                    <FiPlus className="w-2.5 h-2.5" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel as="ul" className="mt-1 ml-3">
                  <li>
                    <Link href="/legal/privacy">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/terms">
                      <a className="block mb-2 font-normal text-gray-500 hover:text-gray-400">
                        Terms of Service
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/cla">
                      <a className="block mb-4 font-normal text-gray-500 hover:text-gray-400">
                        Contributors
                      </a>
                    </Link>
                  </li>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </nav>

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
                href="https://www.linkedin.com/company/project-lumiere"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin className="w-5 h-5 text-gray-400 transition-colors hover:text-gray-300" />
              </a>
              <div className="mx-3 border-r border-gray-600" />
              <a
                href="https://github.com/AnthonyKuang/ProjectLumiere"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub className="w-5 h-5 text-gray-400 transition-colors hover:text-gray-300" />
              </a>
            </div>
          </div>
        </section>

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
              href="https://www.linkedin.com/company/project-lumiere"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="w-5 h-5 text-gray-400 transition-colors hover:text-gray-300" />
            </a>
            <div className="mx-3 border-r border-gray-600" />
            <a
              href="https://github.com/AnthonyKuang/ProjectLumiere"
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
