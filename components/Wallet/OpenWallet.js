import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';

export default function OpenWallet() {
  return (
    <div className='lg:mt-[182px] mt-16 gap-y-4 px-[22px] lg:px-0 lg:max-w-[940px] mx-auto flex lg:flex-row flex-col-reverse lg:justify-between items-center'>
      <div class=' font-global-font text-center lg:text-left'>
        <h1 class='text-op font-medium text-2xl text-center lg:text-left lg:text-4xl leading-[44px] tracking-[-0.02em] text-title-color'>
          Open NEAR wallet
        </h1>
        <p class='text-dark-200 font-normal text-base lg:text-lg lg:leading-6 pt-[6px] text-paragraph-color'>
          <span class='hidden lg:block'>
            Opening a NEAR wallet is the first step and
            <br /> essential part of joining the NEAR community
            <br /> as well as starting this course.
          </span>
          <span class='block lg:hidden'>
            Opening a NEAR wallet is the first step and an essential part of
            joining the NEAR community as well as starting this course.
          </span>
        </p>
        <Link href='/wallet'>
          <Button
            title='Create wallet'
            className='text-dark-100'
            classNameStyle='font-normal text-op text-base leading-[17.6px] mt-8  border-col border px-6 focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block'
          />
        </Link>
      </div>
      <div>
        <img
          src='images/meta.png'
          alt='meta'
          className='max-w-[20rem] max-h-min'
        />
      </div>
    </div>
  );
}
