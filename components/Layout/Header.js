import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className='bg-white fixed top-0 z-[99] mx-auto- container- w-full'>
        <div className='flex items-center my-[1.567rem] md:pl-20 md:pr-20 pr-8 pl-8 lg:pr-20 ld:pl-20'>
          <div className='text-color flex items-center justify-center'>
            <Link href='#'>
              <div className='flex items-center'>
                <span>
                  <svg
                    viewBox='0 0 39 39'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    class='lg:w-[39px] w-[30px]'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M19.5 1.41C9.509 1.41 1.41 9.509 1.41 19.5S9.509 37.59 19.5 37.59s18.09-8.099 18.09-18.09S29.491 1.41 19.5 1.41ZM0 19.5C0 8.73 8.73 0 19.5 0S39 8.73 39 19.5 30.27 39 19.5 39 0 30.27 0 19.5Z'
                      fill='#3F4246'
                    ></path>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M25.515 6.525C23.852 3.199 21.685 1.41 19.5 1.41V0c3.006 0 5.537 2.418 7.276 5.895 1.759 3.518 2.826 8.33 2.826 13.605 0 5.276-1.067 10.087-2.826 13.605C25.037 36.582 22.506 39 19.5 39v-1.41c2.184 0 4.352-1.789 6.015-5.115 1.642-3.284 2.678-7.87 2.678-12.975 0-5.104-1.036-9.69-2.678-12.975Z'
                      fill='#3F4246'
                    ></path>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M28.904 6.633C26.453 3.365 23.12 1.41 19.5 1.41V0c4.164 0 7.88 2.252 10.532 5.787 2.65 3.534 4.27 8.385 4.27 13.713 0 5.328-1.62 10.178-4.27 13.713C27.38 36.748 23.663 39 19.5 39v-1.41c3.621 0 6.953-1.955 9.404-5.223 2.45-3.268 3.988-7.815 3.988-12.867 0-5.052-1.537-9.6-3.988-12.867Z'
                      fill='#3F4246'
                    ></path>
                  </svg>
                </span>
                <span className='ml-2 hidden md:block text-zinc-700 font-bold text-lg'>
                  Dacade
                </span>
              </div>
            </Link>
            <div class='border-gray-300 border-solid border-r-2 lg:mx-[11px] pb-6 pt-6 mx-1.5'></div>
            <div className='hidden lg:block'>
              <img
                src='images/logo-removebg-preview.png'
                className='w-32'
                alt='logo'
              />
            </div>
            <div className='md:hidded lg:hidden sm:block'>
              <img
                src='/images/mob-log-removebg-preview.png'
                className='w-9'
                alt='mob-log'
              />
            </div>
          </div>
          <div className='flex text-black font-normal lg:text-lg text-base items-center ml-auto primary-font'>
            <Button
              title='Start The Course'
              classNameStyle='hidden lg:block bg-transparent border-none text-default w-full  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block'
              click={() => setIsOpen(true)}
            />
            <Link href='/wallet'>
              <Button
                title='Create wallet'
                classNameStyle='ml-12 bg-zinc-700 text-white  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block'
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className=''>
        <Modal open={isOpen} onclose={() => setIsOpen(false)} />
      </div>
    </>
  );
}
