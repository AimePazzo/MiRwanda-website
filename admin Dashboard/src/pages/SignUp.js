import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  useEffect, useState } from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import axios from 'axios';


function SignUp() {


  const [users, setUsers] = useState([])
  const [input, setInput] = useState({})

  const hanldeAdd =  e =>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values,[name]: value}));
    console.log(input);
   }
   
 
   const nav = useNavigate();
  const hanldeSubmit = e =>{


    e.preventDefault();
    let formData = new FormData();
    formData.append('firstname',input.firstname)
    formData.append('lastname',input.lastname)
    formData.append('email',input.email)
    formData.append('password',input.password)
    formData.append('confirmpassword',input.confirmpassword)
    if (input.password === input.confirmpassword){
      
      axios({
        method:'post',
        url :'http://localhost:80/mirwanda_php/index.php',
        data: formData,
        config : {headers: {'Content-Type' : 'multipart/form-data'}}
      }
      ).then(function (params) {
        console.log(params.data)
        alert('New record successfull Added');
        nav('/login')
      })
      .catch(function (params){
        console.log(params)
      })
      
    }else{
      alert('password doesnot match!!');
    }
  }

  return (
    <>
    <Meta title ="SignUp" />
    <BreadCrumb title ="SignUp" />
    <div className='login-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 d-flex align-items-center justify-content-center'>
            <div className='login-card'>
              <h3 className='text-center mb-4'>Create Account</h3>
              <form className='d-flex flex-column gap-10' onSubmit={hanldeSubmit}>
              <div className="form-floating">
                <input type="text" className="form-control" placeholder="First Name" name='firstname' onChange={hanldeAdd}/>
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control"  placeholder="Last Name" name='lastname' onChange={hanldeAdd}/>
                <label htmlFor="floatingPassword">Last Name</label>
              </div>
              <div className="form-floating">
                <input type="email" className="form-control"  placeholder="Email" name='email' onChange={hanldeAdd}/>
                <label htmlFor="floatingPassword">Email</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control"  placeholder="Password" name='password' onChange={hanldeAdd} />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control"  placeholder="ConfirmPassword" name='confirmpassword' onChange={hanldeAdd}/>
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>
              <div className='mt-1'>
                  <div className='d-flex justify-content-center align-items-center gap-15'>
                    <input type="submit" id="submit" value="Signup" className='button border-0' />
                  </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp