import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/HomePage/Home.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact me/Contact.jsx'
import Resume from './components/Resume/Resume.jsx'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'
import Blog from './components/blog/Blog.jsx'
import Model from './components/Model/Model.jsx'
import Html from './components/blog/Html.jsx'
import Css from './components/blog/Css.jsx'
import Js from './components/blog/Js.jsx'
import Demo from './components/blog/Demo.jsx'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/3dmodel' element={<Model />} />
        <Route path='/htmldoc' element={<Html />} />
        <Route path='/cssdoc' element={<Css />} />
        <Route path='/demo' element={<Demo />}/>
        <Route path='/js' element={<Js />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
