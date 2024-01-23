import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link';
import { PostSwiper, PopularPosts } from '@/components';
import { useEffect, useState } from 'react';

type postType = {
  data: Array<Record<string, any>>,
  status: string | number
} | null
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [blogs, setBlogs] = useState<postType>(null)
  useEffect(() => {
    fetch("http://localhost:3000/api/get-posts")
      .then((a) => {
        return a.json();
      })
      .then((parse) => {
        setBlogs(parse)
      })
  }, [])
  return (
    <>
      <Head>
        <title>Coder Space</title>
        <meta name='description' content='Blog post website for coding enthusiast ' />
      </Head>
      <section className=' bg-gray-900 w-full h-[500px] md:h-[600px] lg:h-[600px] xl:h-[calc(100vh-300px)]'>
        <div className='lg:container m-auto flex  h-full' >
          <div className='w-full lg:w-[70%] xxl:w-[80%] relative'>
            <span className='p-2 block max-w-24 text-white font-bold absolute left-0 top-0 z-10'>Featured</span>
            <PostSwiper />
          </div>
          <div className='hidden lg:block xl:block lg:w-[30%] xxl:w-[20%]'>
            <PopularPosts />
          </div>

        </div>
      </section>
      <section className='flex flex-wrap lg:container m-auto px-4 lg:px-0 py-10'>
        <div className='bg-green-400 w-1/3 p-4 h-fit  rounded-lg'>
          <div className='py-2'>
            <Image  src={'/img/image1.jpg'} alt='tests' width={100} height={100} style={{width:'100%'}} className=' rounded-lg' />
            <div><h3 className='text-2xl font-semibold py-3'>{blogs == null ? (<>loading</>) : blogs.data[0].title}</h3></div>
            <div><p className='text-justify text-ellipsis text-wrap line-clamp-4'>{blogs == null ? (<>loading</>) : blogs.data[0].content}</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
