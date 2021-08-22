export default function Header() {
  return (
    <header className='border-b border-[#e6e8ec] dark:border-[#353945] py-5'>
      <div className='flex max-w-7xl mx-auto px-20'>
        <div className='flex items-center flex-1'>
          <figure className='flex items-center border-r border-[#e6e8ec] dark:border-[#353945] pr-10 mr-5 h-10'>
            <div className='w-10 h-10 bg-gray-200 dark:bg-gray-700 mr-3'></div>
            <figcaption className='text-gray-600 dark:text-gray-300 text-3xl font-semibold'>
              Lumiere
            </figcaption>
          </figure>

          <ul className='flex font-medium text-[#777e90]'>
            <li className='px-5'>Discover</li>
            <li className='px-5'>Media</li>
          </ul>
        </div>
        <div className='flex flex-1'>
          <input type='text' />
          <button>Make a donation!</button>
        </div>
      </div>
    </header>
  );
}
