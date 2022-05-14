import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {signin} from '../../reducers/auth'

 export const Signin = () => {
  const isAuthenticated = useSelector(state => state.Auth.isAuthenticated)

  const dispatch = useDispatch();

  const [formData , setFormData ] = useState({
    formData:{
      email:'',
      password:'',
    }
  })

  const {email,password} = formData ;

  const onChang = e => setFormData({...formData , [e.target.name] : e.target.value});
   
  const onSubmit = e =>{
    e.preventDefault();
      dispatch(signin(formData));
  }
  if(isAuthenticated){
    return   <Navigate to="/dashboard" />
   }
  return (
    <div className='container'>
    <form className='mt-5' onSubmit={e=>onSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} name='email' onChange={e=>onChang(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">this site use gravatar to generate your avatar</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={e=>onChang(e)} name='password' className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

