import Link from 'next/link';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

export default function Header() {
  return (
    <header className='sticky-navbar h-20 flex items-center opacity-90 border-b border-gray-200 dark:border-gray-500 z-10 bg-gray-100 dark:bg-gray-700'>
      <div className='container flex items-center'>
        <Link href='/'>
          <a>
            <figure className='flex items-center border-r border-gray-200 dark:border-gray-500 pr-8'>
              <div className='w-8 h-8 bg-gray-300 dark:bg-gray-500 mr-3'></div>
              <figcaption className='text-gray-600 dark:text-gray-200 text-2xl font-semibold'>
                Lumiere
              </figcaption>
            </figure>
          </a>
        </Link>
        <nav>
          <ul className='flex font-medium text-sm'>
            <li className='flex items-end mr-4 ml-8 cursor-pointer'>
              <p>Discover</p>
              <FiChevronDown className='ml-1 w-5 h-5' />
            </li>
            <li className='flex items-end mx-4 cursor-pointer'>
              <p>Media</p>
              <FiChevronDown className='ml-1 w-5 h-5' />
            </li>
          </ul>
        </nav>
        <form className='flex relative items-center ml-auto'>
          <input
            type='text'
            name='search'
            placeholder='Search for anything'
            className='py-3 rounded-lg border-2 bg-transparent pr-16 pl-5 text-sm border-gray-200 dark:border-gray-500'
          />
          <FiSearch className='absolute right-0 mr-5 w-6 h-6' />
        </form>
        <button className='ml-8 button-primary'>Support us</button>
      </div>
    </header>
  );
}
