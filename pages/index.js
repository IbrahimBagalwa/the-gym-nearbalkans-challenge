import Image from 'next/image';
import Button from '../components/Button/Button';
import Hero from '../components/hero/Hero';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';

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
            <Button
              title='Create wallet'
              className='text-dark-100'
              classNameStyle='font-normal text-op text-base leading-[17.6px] mt-8  border-col border px-6 focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block'
            />
          </div>
          <div>
            <img
              src='images/meta.png'
              alt='meta'
              className='max-w-[20rem] max-h-min'
            />
          </div>
        </div>
        <div className='lg:mt-[182px] mt-16 gap-y-4 px-[22px] lg:px-0 lg:max-w-[940px] mx-auto flex lg:flex-row flex-col-reverse lg:justify-between items-center'>
          <svg
            viewBox='0 0 296 296'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='max-w-[20rem] max-h-min'
          >
            <path fill='url(#Target_svg__a)' d='M0 0h296v296H0z'></path>
            <path
              opacity='0.05'
              d='M238 147c0 49.639-40.137 90-89.5 90S59 196.639 59 147c0-49.64 40.137-90 89.5-90S238 97.36 238 147Z'
              fill='#676767'
            ></path>
            <path
              d='M148.5 215c37.279 0 67.5-30.221 67.5-67.5 0-37.279-30.221-67.5-67.5-67.5-37.279 0-67.5 30.221-67.5 67.5 0 37.279 30.221 67.5 67.5 67.5Z'
              fill='#fff'
            ></path>
            <path
              d='M181.866 180.707c18.408-18.435 18.408-48.325 0-66.76-18.408-18.435-48.253-18.435-66.661 0-18.407 18.435-18.407 48.325 0 66.76 18.408 18.436 48.253 18.436 66.661 0Z'
              fill='url(#Target_svg__b)'
            ></path>
            <path
              d='M148.877 173.484c14.419-.181 25.962-12.033 25.781-26.474-.18-14.44-12.015-26-26.433-25.819-14.419.18-25.962 12.033-25.782 26.473.181 14.44 12.015 26 26.434 25.82Z'
              fill='#fff'
            ></path>
            <circle
              opacity='0.2'
              cx='148.5'
              cy='147.5'
              r='12.5'
              fill='#676767'
            ></circle>
            <path
              d='m147.5 148 77.303-90.446'
              stroke='#676767'
              stroke-miterlimit='10'
            ></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M146.679 139.207a.5.5 0 0 1 .527.471l.443 7.973 7.973-.442a.5.5 0 0 1 .055.998l-8.472.47a.499.499 0 0 1-.527-.471l-.47-8.472a.5.5 0 0 1 .471-.527Z'
              fill='#676767'
            ></path>
            <path
              d='M203.139 81 224 56.603 211.02 52 189 77.548 203.139 81ZM205 82.561 226.176 58 233 70.049 210.882 96 205 82.561Z'
              fill='#9092FB'
            ></path>
            <defs>
              <linearGradient
                id='Target_svg__a'
                x1='252.652'
                y1='43.348'
                x2='43.348'
                y2='252.652'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#FDFEFF'></stop>
                <stop offset='1' stop-color='#F1F7FF'></stop>
              </linearGradient>
              <linearGradient
                id='Target_svg__b'
                x1='115.205'
                y1='113.947'
                x2='139.073'
                y2='189.318'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#7BDDE2'></stop>
                <stop offset='0.479' stop-color='#86B5EF'></stop>
                <stop offset='1' stop-color='#9092FB'></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className='text-center md:text-left'>
            <h1 className='text-op font-medium text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em] relative text-center md:text-left'>
              Complete the course
              <div className='absolute top-[0] -mt-[38%] -left-[24%] hidden lg:block'>
                <svg
                  width='164'
                  height='132'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M162.489 120.017c-1.318 1.354-6.103 10.6-6.633 10.823m0 0c-.452.191-3.298-5.156-5.992-10.538m5.992 10.538c5.012-24.418-17.84-38.27-35.281-47.719-21.097-11.429-38.904-16.188-56.95-24.111C37.13 47.379 3.943 29.436 1.568 1.984'
                    stroke='#676767'
                    stroke-width='2'
                    stroke-miterlimit='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </div>
            </h1>
            <p className=' text-lg leading-6 mt-6 text-paragraph-color text-center md:text-left'>
              In three simple modules, learn:
            </p>
            <div className='flex gap-x-3 gap-y-[10px] lg:items-end items-center lg:flex-row flex-col mt-6'>
              <div className='lg:h-8 lg:w-8 h-[18px] w-[18px]'>
                <Image src='/images/im-1.png' alt='' width='32' height='32' />
              </div>
              <p className='text-paragraph-color text-lg'>
                Essential NEAR concepts
              </p>
            </div>
            <div className='flex gap-x-3 gap-y-[10px] lg:items-end items-center lg:flex-row flex-col mt-6'>
              <div className='lg:h-8 lg:w-8 h-[18px] w-[18px]'>
                <Image src='/images/im-2.png' alt='' width='32' height='32' />
              </div>
              <p className='text-paragraph-color text-lg'>
                How to write smart contracts on NEAR
              </p>
            </div>
            <div className='flex gap-x-3 gap-y-[10px] lg:items-end items-center lg:flex-row flex-col mt-6'>
              <div className='lg:h-8 lg:w-8 h-[18px] w-[18px]'>
                <Image src='/images/im-3.png' alt='' width='32' height='32' />
              </div>
              <p className='text-paragraph-color text-lg'>
                How to build dapps on the NEAR blockchain
              </p>
            </div>
          </div>
        </div>
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
        <div className='w-full bg-white'>
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
