import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const SinglePost = () => {
    type postType = {
        data:Record<string,any>,
        status:string|number
      } | null
    const router = useRouter();
    const {slug} = router.query;
    const [blogs, setBlogs] = useState<postType>(null)
    useEffect(() => {
        const fetchPost = async () => {
          try {
            const response = await fetch(`http://localhost:3000/api/get-posts/${slug}`);
            const data = await response.json();
            setBlogs(data);
            console.log()
          } catch (error) {
            console.error('Error fetching post:', error);
          }
        };
    
        if (slug) {
          fetchPost();
        }
      }, [slug]);
    
    return (

        <div className='p-4'>
            <Head>
            <title>{blogs?.data.title} - Coder Space</title>
            <meta name='description' content='Blog post website for coding enthusiast ' />
            </Head>
            <h1 className='text-xl bold my-3'>{blogs?.data.title}</h1>
            <p>{blogs?.data.content}</p>
            <p className='text-right'>{blogs?.data.arthur}</p>
        </div>
    )
}

export default SinglePost
