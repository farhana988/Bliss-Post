"use client"
import Link from 'next/link'
import React from 'react'

function PostCard({post}) {
  return (
    <div>
         <div  className="bg-white p-4 rounded-lg shadow-md flex flex-col 
        h-40 lg:h-52">
          <h2 className="text-base lg:text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700 text-xs lg:text-sm flex-1">{post.body}</p>
          <Link 
          className="text-xs text-[#867cc2] "
          href={`/blog/${post.id}`}>
           Read more
          </Link>
        </div>
    </div>
  )
}

export default PostCard