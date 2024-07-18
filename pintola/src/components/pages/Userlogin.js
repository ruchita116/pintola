import React from 'react'
import { useState } from 'react';
import "./Style.css"

const Userlogin = () => {
      const [isLogin, setIsLogin] = useState(true);
    
      const toggleForm = () => {
        setIsLogin(!isLogin);
      };
    
      return (
        <>
          <div className='hellobtns'>
            <div
              className={`btn-child ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </div>
            <div
              className={`btn-child ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </div>
          </div>
    
          <div className={`helloform ${isLogin ? 'show' : 'show'}`}>
            <div className='form-child'>
              <div className='heading'>
                <h1 className='title'>Customer Login</h1>
                <div className='divider'></div>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email address*</label><br />
                <input type='text' id='email' name='email' placeholder='Email address' />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password*</label><br />
                <input type='password' id='password' name='password' placeholder='Password' />
              </div>
              <input type='submit' value='Login' className='submit-btn' />
              <p className='switch' onClick={toggleForm}>New Customer? Sign up</p>
            </div>
          </div>
    
          <div className={`helloform ${!isLogin ? 'show' : 'hide'}`}>
            <div className='form-child'>
              <div className='heading'>
                <h1 className='title'>Create Account</h1>
                <div className='divider'></div>
              </div>
              <div className='form-group'>
                <label htmlFor='firstname'>First name</label><br />
                <input type='text' id='firstname' name='firstname' placeholder='First name' />
              </div>
              <div className='form-group'>
                <label htmlFor='lastname'>Last name</label><br />
                <input type='text' id='lastname' name='lastname' placeholder='Last name' />
              </div>
              <div className='form-group'>
                <label htmlFor='email-signup'>Email address*</label><br />
                <input type='text' id='email-signup' name='email-signup' placeholder='Email address' />
              </div>
              <div className='form-group'>
                <label htmlFor='password-signup'>Password*</label><br />
                <input type='password' id='password-signup' name='password-signup' placeholder='Password' />
              </div>
              <input type='submit' value='Sign Up' className='submit-btn' />
              <p className='switch' onClick={toggleForm}>Returning Customer? Login</p>
            </div>
          </div>
        </>
 
    )
 
}


export default Userlogin