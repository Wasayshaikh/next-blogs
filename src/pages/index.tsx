import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

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
          <div className='flex-1 bg-blue-500 relative'>
          <span className='p-2 bg-green-400 block max-w-24 absolute left-0 top-0'>Popular</span>
          </div>
          <div className='w-56'>
            <div className='w-full h-2/4 bg-red-500'>
             

            </div>
            <div  className='w-full h-2/4  bg-green-500'></div>
          </div>

        </div>
      </div>
    </>
  )
}
