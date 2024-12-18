import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Home from './assets/pages/Home'
function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
