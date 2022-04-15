import React from 'react'
 import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import { Signin } from './components/auth/Signin'
import { Signup } from './components/auth/Signup'
import { Home } from './components/Home'

export const Rout = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signin' element = {<Signin />} />
            <Route path='/signup' element = {<Signup />} />
        </Routes>
    </Router>
  )
}
