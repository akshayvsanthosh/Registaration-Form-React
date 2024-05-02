import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Details from './Pages/Details'
import { useState } from 'react'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Details/>} path='/details'/>
      </Routes>
    </>
  )
}

export default App
