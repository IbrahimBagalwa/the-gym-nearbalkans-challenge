import React from 'react';

export default function Hero() {
  return (
    <div className=' text-center lg:w-[910px] mx-auto'>
      <h1 className='lg:text-[72px] lg:w-full w-[200px] mx-auto font-medium text-[36px] text-title-color'>
        Get <span className='text-gradient'>NEAR</span> Certified!
      </h1>
      <p className=' pt-5 pb-24 lg:text-[22px] text-lg text-paragraph-color leading-[28px]'>
        We, in NEAR Balkans, know how important it is to have regional and local
        support. Now you can become NEAR certified in a regional language of
        preference and connect with our team to support your further growth
        within the NEAR ecosystem.
      </p>
      <div className='mx-auto text-center '>
        <a href='#learning'>
          <svg
            width='28'
            height='28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='mx-auto'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M26.25 14c0-6.765-5.485-12.25-12.25-12.25S1.75 7.235 1.75 14 7.235 26.25 14 26.25 26.25 20.765 26.25 14ZM0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14Zm13.125-6.125a.875.875 0 0 1 1.75 0v10.138l3.756-3.757a.875.875 0 1 1 1.238 1.238l-5.25 5.25a.875.875 0 0 1-1.238 0l-5.25-5.25a.875.875 0 1 1 1.238-1.238l3.756 3.757V7.875Z'
              fill='#676767'
              opacity='0.3'
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
