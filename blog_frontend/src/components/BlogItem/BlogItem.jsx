import React from 'react'
import { Link } from 'react-router-dom'

function BlogItem({ blog }) {
  return (
    <div>
      <Link to={`/details/${blog.id}`}>
        <img src={`http://localhost:6969/${blog.imgUrl}`} alt="" />
        <h1>FROM: {blog.title}</h1>
        <p>{blog.message}</p>
      </Link>
    </div>
  )
}

export default BlogItem
