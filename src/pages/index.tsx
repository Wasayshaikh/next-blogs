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
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Posts</li>
            <li>release</li>
          </ul>
        </nav>
      </header>
    </>
  )
}
