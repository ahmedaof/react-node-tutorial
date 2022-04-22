import React, { useState } from 'react'
import { connect } from 'react-redux';
import setAlert from '../../action/setAlert'

 const Signup = ({setAlert}) => {


  const [formData , setFormData ] = useState({
    formData:{
      name:'',
      email:'',
      password:'',
      password2:'',
      role:'',
    }
  })

  const {email,name,password,password2,role} = formData ;

  const onChang = e => setFormData({...formData , [e.target.name] : e.target.value});
   
  const onSubmit = e =>{
    e.preventDefault();
    if(password !== password2){
      setAlert("password not match" , 'danger')
    }else{
      console.log(formData);
    }
  }
  return (
    <div className='container'>
    <form className='mt-5' onSubmit={e=>onSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
    <input type="name" value={name} name='name' onChange={e=>onChang(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} name='email' onChange={e=>onChang(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">this site use gravatar to generate your avatar</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={e=>onChang(e)} name='password' className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password2</label>
    <input type="password" name='password2' onChange={e=>onChang(e)} value={password2} className="form-control" id="exampleInputPassword1" />
  </div>
  <select name="role" value={role} onChange={e=>onChang(e)} className="form-select" aria-label="Default select example">
  <option >Open this select menu</option>
  <option value="1">admin</option>
  <option value="0">user</option>

</select>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default connect(null ,{setAlert})(Signup)