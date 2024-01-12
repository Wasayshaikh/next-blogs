import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })
let elemt2 = '/img/image2.jpg';
let elemt1 = '/img/image1.jpg';
let elemt3 = '/img/image3.jpg';
export default function Home() {

  return (
    <>
      <Head>
        <title>Coder Space</title>
        <meta name='description' content='Blog post website for coding enthusiast ' />
      </Head>
      <div className=' bg-gray-900 w-screen h-[500px] md:h-[600px] lg:h-[600px] xl:h-[calc(100vh-300px)]'>
        <div className='xl:w-[1100px] m-auto flex  h-full' >
          <div className='w-full lg:w-[70%] xxl:w-[80%] relative'>
            <span className='p-2 block max-w-24 text-white font-bold absolute left-0 top-0 z-10'>Latest</span>
            <Swiper

              slidesPerView={1}
              navigation={false}
              pagination={{
                clickable: true,
                bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
              }}
              modules={[Pagination]}
              className='w-full h-full'
            >
              <SwiperSlide>
                <div
                 
                  style={{ backgroundImage: `url(" ${elemt1}")` }}
                  className={` w-full h-full bg-no-repeat bg-cover bg-center block `}
                >
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-end'>
                <Link href={'#'} className='block posts-link'>
                <p className=' px-4 text-white text-2xl'>Lorem ipsum dolor sit amet.</p>
                <p className='text-white text-xl p-4 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam suscipit temporibus eveniet expedita nostrum harum ipsa esse laboriosam nobis!</p>
                </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                 
                  style={{ backgroundImage: `url(" ${elemt2}")` }}
                  className={` w-full h-full  bg-no-repeat bg-cover bg-center block `}
                >
                 <div className='w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-end'>
                  <Link href={'#'} className='block posts-link'>
                 <p className=' px-4 text-white text-2xl'>Lorem ipsum dolor sit amet.</p>
                    <p className='text-white text-xl p-4 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam suscipit temporibus eveniet expedita nostrum harum ipsa esse laboriosam nobis!</p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                 
                  style={{ backgroundImage: `url(" ${elemt3}")` }}
                  className={` w-full h-full bg-no-repeat bg-cover bg-center block `}
                >
                  <div className='w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-end'>
                  <Link href={'#'} className='block posts-link'>
                  <p className=' px-4 text-white text-2xl'>Lorem ipsum dolor sit amet.</p>
                  <p className='text-white text-xl p-4 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam suscipit temporibus eveniet expedita nostrum harum ipsa esse laboriosam nobis!</p>
                  </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='hidden lg:block xl:block lg:w-[30%] xxl:w-[20%]'>
            <div className='w-full h-2/4  relative'>
              <span className='p-2 block max-w-24 text-white font-bold absolute left-0 top-0 z-10'>Popular</span>
              <div
                
                style={{ backgroundImage: `url(" ${elemt3}")` }}
                className={` w-full h-full bg-no-repeat bg-cover bg-center block `}
              >
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-end'>
                <Link href={'#'} className='block posts-link'>
                <p className='text-white text-xl py-4 px-2 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, earum!</p>
                </Link>
                </div>
              </div>


            </div>
            <div className='w-full h-2/4   relative'>
              <span className='p-2 block max-w-24 text-white font-bold absolute left-0 top-0 z-10'>Popular</span>
              <div
               
                style={{ backgroundImage: `url(" ${elemt3}")` }}
                className={` w-full h-full bg-no-repeat bg-cover bg-center block `}
              >
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-end'>
                <Link href={'#'} className='block posts-link'>
                <p className='text-white text-xl py-4 px-2 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, earum!</p>
                </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
