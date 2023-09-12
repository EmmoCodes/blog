import React, { useEffect, useState } from 'react'
import '../../App.scss'
import BlogItem from '../BlogItem/BlogItem.jsx'

function BlogList() {
  const [blogs, setBlogs] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6969/api/blogs')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => setBlogs(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>ALL BLOGS</h1>
      <section className="blog_grid">
        {blogs.map(item => (
          <BlogItem key={crypto.randomUUID()} blog={item} id={crypto.randomUUID()} />
        ))}
      </section>
    </>
  )
}

export default BlogList
