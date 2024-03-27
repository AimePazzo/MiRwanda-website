import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <Meta title ="Login" />
    <BreadCrumb title ="Login" />
    <div className='login-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 d-flex align-items-center justify-content-center'>
            <div className='login-card'>
              <h3 className='text-center mb-4'>Login</h3>
              <form className='d-flex flex-column gap-10'>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Email" />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
                <div className='mt-1'>
                  <Link to='/forgot-password' className='forgot-password'>Forgot Password</Link>
                  <div className='d-flex justify-content-center align-items-center gap-15'>
                    <button className='button border-0'>Login</button>
                    <Link to='/signup' className='button signup'>SignUp</Link>
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

export default Login