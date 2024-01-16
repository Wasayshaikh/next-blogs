import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type postType = {
  data:Array<Record<string,any>>,
  status:string|number
} | null
const Posts = () => {
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
        <title>Posts - Coder Space</title>
        <meta name='description' content='Blog post website for coding enthusiast ' />
      </Head>
      <div>{blogs == null ? (<>loading</>) : (blogs.data.map(blog => (
        <Link href={'posts/'+blog.slug} key={blog.title} className='container m-auto block '>
          <h1 className='text-2xl bold '>{blog.title}</h1>
          <div className='text-justify'>{blog.content.substr(0,440)}....</div>
          <div className=' text-right'>{blog.arthur}</div>
        </Link>

      )))
      }</div>
    </>

  )
}

export default Posts