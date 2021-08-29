import Image from 'next/image';
import { Menu } from '@headlessui/react';
import { signOut } from 'next-auth/client';

export default function Avatar({ profileImageSrc, profileName }) {
  return (
    <Menu>
      <Menu.Button className='flex cursor-pointer'>
        <div className='p-0.5 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full'>
          <div className='p-0.5 bg-gray-700 rounded-full'>
            <figure className='relative w-10 h-10'>
              <Image
                src={profileImageSrc}
                alt={`Picture of ${profileName}`}
                layout='fill'
                objectFit='contain'
                className='rounded-full'
              />
            </figure>
          </div>
        </div>
      </Menu.Button>

      <Menu.Items as='div' className='absolute w-full left-0 bottom-0 z-10'>
        <div className='container relative'>
          <Menu.Item
            as='div'
            className='absolute right-12 top-0 rounded-b-lg bg-gray-700 opacity-80 px-10 py-8'
          >
            <button
              className='text-sm button-primary px-5 py-3'
              onClick={() => signOut({ redirect: false })}
            >
              Sign out
            </button>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
