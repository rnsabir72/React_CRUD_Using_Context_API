import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Signin from './components/Signin'
import Signup from './components/Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Contact />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
