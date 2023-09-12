import React from 'react'
import '../../App.scss'
import { Link, NavLink } from 'react-router-dom'
import BlogList from '../BlogList/BlogList.jsx'
import Navbar from '../shared/Navbar.jsx'

function Home() {
  return (
    <>
      <Navbar />
      <section>
        <BlogList />
      </section>
    </>
  )
}

export default Home
