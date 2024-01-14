import Link from 'next/link'
import React from 'react'

const PopularPosts = () => {
    let elemt3 = '/img/image3.jpg';
  return (
    <>
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
            </>
  )
}

export default PopularPosts
