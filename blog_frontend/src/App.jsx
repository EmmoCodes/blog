import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import AdminForm from './components/AdminForm/AdminForm.jsx'
import BlogDetails from './components/BlogDetails/BlogDetails.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpanel" element={<AdminForm />} />
        <Route path="/details/:id" element={<BlogDetails />} />
      </Routes>
    </>
  )
}

export default App
