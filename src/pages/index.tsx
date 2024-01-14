import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link';
import { PostSwiper, PopularPosts } from '@/components';


const inter = Inter({ subsets: ['latin'] })

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
            <PostSwiper />
          </div>
          <div className='hidden lg:block xl:block lg:w-[30%] xxl:w-[20%]'>
            <PopularPosts />
          </div>

        </div>
      </div>
    </>
  )
}
