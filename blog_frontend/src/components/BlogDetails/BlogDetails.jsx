import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {
  const [blog, setBlog] = useState([])
  const blogId = useParams().id

  useEffect(() => {
    fetch(`http://localhost:6969/api/blogs/${blogId}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => setBlog(data))
      .catch(err => console.log(err))
  }, [])

  console.log(blog)

  return (
    <section>
      <h1>Details</h1>
    </section>
  )
}

export default BlogDetails
