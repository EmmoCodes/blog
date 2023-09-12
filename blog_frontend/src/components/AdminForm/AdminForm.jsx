import React, { useState } from 'react'
import '../../App.scss'

function AdminForm() {
  const [err, setErr] = useState(false)

  const postIt = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    form.set('id', crypto.randomUUID())
    fetch('http://localhost:6969/api/blogs', {
      method: 'POST',
      body: form,
    }).then(response => e.target.reset)
  }

  return (
    <form onSubmit={postIt} className="admin_section">
      <input type="text" name="title" placeholder="TITLE" />
      <input type="file" name="picture" placeholder="FILE" />
      <textarea name="message" id="message" placeholder="MESSAGE" cols="10" rows="5"></textarea>
      {err && <p>Error in diesem oder jenem</p>}
      <button>Post it</button>
    </form>
  )
}

export default AdminForm
