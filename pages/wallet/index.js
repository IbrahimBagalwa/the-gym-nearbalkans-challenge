import Link from 'next/link';
import React from 'react';

export default function Wallet() {
  return (
    <>
      <div className='flex py-6 justify-between items-center mx-auto container px-6'>
        <Link href='/'>
          <img
            src='/images/header.PNG'
            alt=''
            className='hidden md:block w-32'
          />
          <img
            src='/images/mb-2.PNG'
            alt=''
            className=' md:hidden lg:hidden block'
          />
        </Link>
        <div className='w-20 cursor-pointer'>
          <img src='/images/lag.PNG' alt='' />
        </div>
      </div>
      <hr />
    </>
  );
}
