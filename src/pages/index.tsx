import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Coder Space</title>
        <meta name='description' content='Blog post website for coding enthusiast ' />
      </Head>
      <div className=' bg-gray-900 w-screen h-[calc(100vh-300px)]'>
        <div className='w-[1100px] m-auto flex  h-full' >
          <div className='w-[80%] bg-blue-500 relative'>
            <span className='p-2 bg-green-400 block max-w-24 absolute left-0 top-0'>Popular</span>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              className='w-full h-[80%]'
            >
              <SwiperSlide><div className='bg-red-400 w-full h-full'>slides 1</div></SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
          <div className='w-[20%]'>
            <div className='w-full h-2/4 bg-red-500'>


            </div>
            <div className='w-full h-2/4  bg-green-500'></div>
          </div>

        </div>
      </div>
    </>
  )
}
