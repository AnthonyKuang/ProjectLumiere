import Image from 'next/image';

export default function Avatar({ profileImageSrc, profileName }) {
  return (
    <div className='flex'>
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
    </div>
  );
}
