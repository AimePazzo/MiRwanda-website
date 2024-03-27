import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  useEffect, useState } from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import axios from 'axios';


function SignUp() {


  const [users, setUsers] = useState([])
  const [input, setInput] = useState({})

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
              <form className='d-flex flex-column gap-10' >
              <div className="form-floating">
                <input type="text" className="form-control" placeholder="First Name" name='firstname' />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control"  placeholder="Last Name" name='lastname' />
                <label htmlFor="floatingPassword">Last Name</label>
              </div>
              <div className="form-floating">
                <input type="email" className="form-control"  placeholder="Email" name='email' />
                <label htmlFor="floatingPassword">Email</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control"  placeholder="Password" name='password'  />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control"  placeholder="ConfirmPassword" name='confirmpassword' />
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