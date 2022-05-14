import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const Dashboard = () => {
    const isAuthenticated = useSelector(state => state.Signup.isAuthenticated)
    if(!isAuthenticated){
     return   <Navigate to="/signin" />
    }
  return (
    <div>dashboard</div>
  )
}
