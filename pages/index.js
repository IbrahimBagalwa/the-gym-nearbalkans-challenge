import Image from 'next/image';
import Button from '../components/Button/Button';
import CompleteCourse from '../components/CompleteCourse/CompleteCourse';
import Hero from '../components/hero/Hero';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import OpenWallet from '../components/Wallet/OpenWallet';

export default function Home() {
  return (
    <>
      <Header />
      <div className='bg-white px-[23px] lg:px-0 font-global-font relative lg:pt-32 lg:mt-36 pt-12 h-[600px] lg:h-[500px] w-full'>
        <div className='bg-page-gradient absolute lg:-top-[550px] -top-[520px] opacity-[0.4] left-0 lg:-left-48 h-[100%] w-[50%] z-50'></div>
        <div className='bg-page-gradient absolute lg:-top-[550px] -top-[520px] opacity-[0.4] right-0 lg:right-0 h-[100%] w-[40%] z-50'></div>
        <Hero />
        <div
          id='learning'
          class='grid mt-16 justify-items-center font-global-font text-title-color text-center text-op font-medium text-[34px] lg:text-5xl leading-7 lg:leading-[60px] tracking-[-0.02em]'
        >
          Making your NEAR <br />
          learning easy.
        </div>
        <OpenWallet />
        <CompleteCourse />
        <div className='text-center mx-auto lg:mt-[182px] mt-16'>
          <h1 className='text-title-color text-center font-medium text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em] relative text-title-color'>
            Claim NEAR certificate
            <div className='hidden lg:block absolute top-0 -mt-[12%] left-[50%]'>
              <svg
                width='164'
                height='132'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.511 120.017c1.318 1.354 6.103 10.6 6.633 10.823m0 0c.452.191 3.298-5.156 5.992-10.538M8.144 130.84c-5.012-24.418 17.84-38.27 35.281-47.719C64.522 71.692 82.33 66.933 100.376 59.01c26.494-11.631 59.68-29.574 62.055-57.026'
                  stroke='#676767'
                  stroke-width='2'
                  stroke-miterlimit='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
          </h1>
          <p className='text-dark-200 font-normal text-lg leading-6 text-center text-paragraph-color'>
            <span className='hidden lg:block'>
              Upon course completion, receive the NEAR dev 101
              <br /> certificate as an NFT on your NEAR wallet.
            </span>
            <span class='block lg:hidden'>
              Upon course completion, receive the NEAR dev 101 certificate as an
              NFT on your NEAR wallet.
            </span>
          </p>
        </div>
        <div className='mt-16 lg:mt-[100px] mx-auto container flex items-center justify-center'>
          <Image src='/images/certification.png' width='670' height='500' />
        </div>
        <div className='w-full bg-white mx-auto container'>
          <div class='lg:px-[148px] flex lg:flex-row flex-col-reverse justify-between items-center mt-[168px] mb-4'>
            <div class='relative text-center lg:text-left'>
              <h1 class='text-title-color font-medium text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em]'>
                NEAR Development 101
              </h1>
              <div class='bg-blur w-[1067px] h-[240px] top-[5%] -left-[15%] absolute hidden lg:block'></div>
              <Button
                title='Start The Course'
                classNameStyle='font-normal relative z-10 text-dark-100 text-base leading-[17.6px] mt-4 text-secondary border-secondary  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block'
              />
            </div>
            <div className='lg:w-[400px] lg:h-[400px] w-44 h-44'>
              <Image src='/images/blur-img.png' width='400' height='400' />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
