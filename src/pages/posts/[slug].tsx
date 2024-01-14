import { useRouter } from 'next/router'
import React from 'react'

const SinglePost = () => {
    const router = useRouter();
    const slug = router.query
    return (

        <div>
            {JSON.stringify(slug)}
        </div>
    )
}

export default SinglePost
