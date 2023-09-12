import express from 'express'
import multer from 'multer'
import cors from 'cors'
import { readFile } from 'fs/promises'
import fs from 'fs'
import { body, validationResult } from 'express-validator'

const PORT = 6969

const app = express()

app.use(cors())
app.use((req, _, next) => {
  console.log(req.method, req.url)
  next()
})
app.use(express.json())
app.use('/uploads', express.static('picture'))
const upload = multer({ dest: 'picture' })
const blogPath = new URL('./public/history.json', import.meta.url)
const blogs = []

app.post(
  '/api/blogs',
  upload.single('picture'),

  (req, res) => {
    const result = validationResult(req)
    if (result.errors.length > 0) {
      res.status(401).end()
      return
    }
    console.log(req.file.path)
    const blogItem = req.body
    blogItem.imgUrl = `uploads/${req.file.filename}`
    blogs.push(blogItem)
    console.log(blogs)
    fs.writeFile(blogPath, JSON.stringify(blogs, null, 2), { encoding: 'utf-8' })
    res.end()
  },
)

app.get('/api/blogs', async (_, res) => {
  if (fs.existsSync(blogPath)) {
    await readFile(blogPath, { encoding: 'utf-8' }).then(response => JSON.parse(response))
  }
  res.json(blogs)
})

app.get('/api/blogs/:id', (req, res) => {
  const blogById = blogs.find(blog => {
    return blog.id === req.params.id
  })
  res.json(blogById)
})

app.listen(PORT, () => console.log('Iam on:', PORT))
