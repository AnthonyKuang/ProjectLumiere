import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { Popover, Dialog } from '@headlessui/react';
import Avatar from '@components/ui/Avatar';
import { FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';
import projectLumiere from '@public/images/logos/ProjectLumiere.svg';
import { Gradient } from '@lib/gradient';
import { IoReorderThreeOutline } from 'react-icons/io5';

export default function Header({
  pageType,
  setTitle,
  title,
  titleInput,
  setSlug,
  saveDraft,
  showUntitledError,
  collapsed,
  setCollapsed,
}) {
  useEffect(() => {
    if (!pageType) {
      const gradient = new Gradient();
      gradient.initGradient('.header-gradient-canvas');
    }
  }, [pageType]);

  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (pageType === 'editor') {
    return (
      <>
        <header
          className={`relative h-18 lg:h-16 transition-transform origin-top ${
            collapsed ? 'scale-y-0' : 'scale-y-1'
          } flex items-center border-b border-gray-700 bg-gray-900 px-6`}
        >
          <div className="flex items-center">
            <Link href="/">
              <a>
                <figure className="relative w-10 h-10 mb-1 lg:w-9 lg:h-9">
                  <Image
                    src={projectLumiere}
                    alt="Project Lumiere logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </figure>
              </a>
            </Link>
            {setTitle ? (
              <input
                type="text"
                placeholder="Untitled"
                value={title}
                ref={titleInput}
                className={`rounded-lg bg-transparent text-xl lg:text-lg ml-3 py-2 lg:py-1.5 px-4 w-96 md:w-72 sm:w-48 border-none hover:bg-gray-800 transition-colors text-gray-300 focus:outline-none focus:ring-2 ${
                  title ? 'focus:ring-blue-600' : 'focus:ring-red-600'
                } placeholder-gray-500`}
                onClick={(e) => e.target.select()}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setSlug(
                    e.target.value
                      .replaceAll(/[`~!@#$%^&*()_+={}|[;:'"<>,./?]/g, '')
                      .replaceAll(' ', '-')
                      .toLowerCase()
                  );
                }}
              />
            ) : (
              <input
                type="text"
                value={title}
                className="px-4 py-2 ml-3 text-xl text-gray-300 transition-colors bg-transparent border-none rounded-lg cursor-not-allowed w-96 hover:bg-gray-800"
                disabled
              />
            )}
          </div>
          <div className="flex ml-auto">
            {session && (
              <button
                type="button"
                className="px-4 py-3 mr-5 text-xs button-tertiary lg:text-2xs"
                onClick={title ? saveDraft : showUntitledError}
              >
                Save draft
              </button>
            )}
            {session ? (
              <Avatar
                profileImageSrc={session.user.image}
                profileName={session.user.name}
                renderPosition="fullscreen"
                pageType="editor"
              />
            ) : (
              <button
                type="button"
                className="px-5 py-3 text-sm lg:text-xs button-primary lg:px-4 lg:py-2.5"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            )}
          </div>
        </header>
        <button
          type="button"
          className="absolute top-0 z-50 grid w-8 h-6 transition-all -translate-x-1/2 -translate-y-4 bg-gray-500 left-1/2 place-items-center rounded-b-md hover:rounded-b-full hover:translate-y-0"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FiChevronUp
            className={`w-5 h-5 text-gray-100 -mt-0.5 transition-transform ${
              collapsed && 'rotate-180'
            }`}
          />
        </button>
      </>
    );
  }
  if (pageType === 'home') {
    return (
      <header className="sticky top-0 z-50 flex items-center bg-gray-900 border-b border-gray-700 bg-opacity-90 backdrop-filter backdrop-blur-sm backdrop-saturate-200 h-18 lg:h-16">
        <div className="container flex items-center">
          <div className="pr-8 border-r border-gray-600 lg:pr-7 md:border-0 md:pr-0">
            <Link href="/">
              <a>
                <figure className="flex items-center group">
                  <div className="relative mr-1.5 mb-0.5 w-10 h-10 lg:w-8 lg:h-8">
                    <Image
                      src={projectLumiere}
                      alt="Project Lumiere logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <figcaption className="mb-1 font-serif text-3xl leading-none text-gray-300 transition-colors duration-200 lg:text-2xl group-hover:text-gray-200 lg:mb-0.5">
                    Lumiere
                  </figcaption>
                </figure>
              </a>
            </Link>
          </div>
          <nav className="flex mt-1 text-sm md:hidden">
            <Link href="/press">
              <a className="ml-8 font-medium text-gray-400 transition-colors lg:text-xs hover:text-gray-300 lg:ml-7">
                Publications
              </a>
            </Link>
            <Link href="/company/blog">
              <a className="ml-8 font-medium text-gray-400 transition-colors lg:text-xs hover:text-gray-300 lg:ml-7">
                Blog
              </a>
            </Link>
            <Popover className="ml-8 lg:ml-7">
              {({ open }) => (
                <>
                  <Popover.Button>
                    <div className="flex items-center transition-colors hover:text-gray-300">
                      <p className="font-medium lg:text-xs">Discover</p>
                      <FiChevronDown
                        className={`${
                          open && 'transform rotate-180'
                        } lg:w-4 lg:h-4 ml-1 w-5 h-5 transition-transform`}
                      />
                    </div>
                  </Popover.Button>
                  <Popover.Panel className="absolute left-0 z-10 w-full bg-gray-900 bg-opacity-90 border-b border-gray-700 -bottom-5.5">
                    <div className="container beta">This is Discover</div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </nav>
          <form className="relative flex items-center ml-auto mr-7 lg:mr-6 md:hidden beta">
            <input
              type="text"
              name="search"
              placeholder="Search for anything"
              className={`py-3 lg:py-2.5 rounded-lg border-2 bg-transparent ${
                session ? 'pr-18 lg:pr-14' : 'pr-9 lg:pr-8'
              } pl-4 text-sm border-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 hover:border-gray-600 placeholder-gray-500`}
            />
            <FiSearch className="absolute right-0 w-6 h-6 mr-4 text-gray-600" />
          </form>
          {session ? (
            <Avatar renderPosition="container" />
          ) : (
            <button
              type="button"
              className="px-5 py-3 text-sm lg:text-xs button-primary lg:px-4 lg:py-2.5 md:hidden"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}

          <button
            type="button"
            className="hidden w-12 h-8 ml-auto transition bg-gray-500 place-items-center rounded-2xl opacity-80 md:grid hover:bg-gray-400 hover:opacity-100"
            onClick={() => setIsOpen(true)}
          >
            <IoReorderThreeOutline className="w-6 text-gray-100 h-7" />
          </button>
        </div>

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-10 overflow-y-scroll"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 opacity-95" />

            <div className="relative w-screen h-screen pt-16 mx-auto rounded">
              <button type="button" onClick={() => setIsOpen(false)}>
                X
              </button>
              <Dialog.Title>Mobile Navbar</Dialog.Title>
            </div>
          </div>
        </Dialog>
      </header>
    );
  }
  return (
    <header className="sticky top-0 z-50 flex items-center mb-16 bg-gray-900 border-b border-gray-700 h-18 lg:h-16">
      <div className="absolute z-0 w-full h-full -mt-60 lg:-mt-64">
        <div className="relative h-48">
          <canvas
            className="absolute top-0 header-gradient-canvas"
            data-js-darken-top
            data-transition-in
          />
        </div>
      </div>
      <div className="container z-50 flex items-center">
        <div className="pr-8 border-r border-gray-600 lg:pr-7 md:border-0 md:pr-0">
          <Link href="/">
            <a>
              <figure className="flex items-center group">
                <div className="relative mr-1.5 mb-0.5 w-10 h-10 lg:w-8 lg:h-8">
                  <Image
                    src={projectLumiere}
                    alt="Project Lumiere logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <figcaption className="mb-1 font-serif text-3xl leading-none text-gray-300 transition-colors duration-200 lg:text-2xl group-hover:text-gray-200 lg:mb-0.5">
                  Lumiere
                </figcaption>
              </figure>
            </a>
          </Link>
        </div>
        <nav className="flex mt-1 text-sm md:hidden">
          <Link href="/press">
            <a className="ml-8 font-medium text-gray-400 transition-colors lg:text-xs hover:text-gray-300 lg:ml-7">
              Publications
            </a>
          </Link>
          <Link href="/company/blog">
            <a className="ml-8 font-medium text-gray-400 transition-colors lg:text-xs hover:text-gray-300 lg:ml-7">
              Blog
            </a>
          </Link>
          <Popover className="ml-8 lg:ml-7">
            {({ open }) => (
              <>
                <Popover.Button>
                  <div className="flex items-center transition-colors hover:text-gray-300">
                    <p className="font-medium lg:text-xs">Discover</p>
                    <FiChevronDown
                      className={`${
                        open && 'transform rotate-180'
                      } lg:w-4 lg:h-4 ml-1 w-5 h-5 transition-transform`}
                    />
                  </div>
                </Popover.Button>
                <Popover.Panel className="absolute left-0 z-10 w-full bg-gray-900 bg-opacity-90 border-b border-gray-700 -bottom-5.5">
                  <div className="container beta">This is Discover</div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </nav>
        <form className="relative flex items-center ml-auto mr-7 lg:mr-6 md:hidden beta">
          <input
            type="text"
            name="search"
            placeholder="Search for anything"
            className={`text-field ${
              session ? 'pr-18 lg:pr-14' : 'pr-9 lg:pr-8'
            } border-gray-700`}
          />
          <FiSearch className="absolute right-0 w-6 h-6 mr-4 text-gray-600" />
        </form>
        {session ? (
          <Avatar renderPosition="container" />
        ) : (
          <button
            type="button"
            className="px-5 py-3 text-sm lg:text-xs button-primary lg:px-4 lg:py-2.5 md:hidden"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}

        <button
          type="button"
          className="hidden w-12 h-8 ml-auto transition bg-gray-500 place-items-center rounded-2xl opacity-80 md:grid hover:bg-gray-400 hover:opacity-100"
          onClick={() => setIsOpen(true)}
        >
          <IoReorderThreeOutline className="w-6 text-gray-100 h-7" />
        </button>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-10 overflow-y-scroll"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-gray-900 opacity-95" />

          <div className="relative w-screen h-screen pt-16 mx-auto rounded">
            <button type="button" onClick={() => setIsOpen(false)}>
              X
            </button>
            <Dialog.Title>Mobile Navbar</Dialog.Title>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
