import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
 import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import { Signin } from './components/auth/Signin'
import  Signup  from './components/auth/Signup'
import { Home } from './components/Home'
import  {Dashboard}  from './components/Dashboard'
import Alert from './components/layouts/Alert'
import { Navbar } from './components/layouts/Navbar'
import { loadUser } from './reducers/auth'

export const Rout = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  },[])
  return (
    <Router>
    <Navbar />
    <br /><br />
    <Alert />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signin' element = {<Signin />} />
            <Route path='/signup' element = {<Signup />} />
            <Route path='/dashboard' element = {<Dashboard />} />
        </Routes>
    </Router>
  )
}
