import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

const PostSwiper = () => {
  let elemt2 = '/img/image2.jpg';
  let elemt1 = '/img/image1.jpg';
  let elemt3 = '/img/image3.jpg';
  return (
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
  )
}

export default PostSwiper