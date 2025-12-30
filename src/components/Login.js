import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_small.jpg"
        alt="bg-img"/>
      </div>
      <form className='absolute w-[29%] p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md'>
        <h1 className='text-3xl font-bold pb-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Full Name'/>)}
        {!isSignInForm && (<input className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Email'/>)}
        {!isSignInForm && (<input className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Mobile Number'/>)}
        {isSignInForm && (<input className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Email or mobile number'/>)}
        <input className='rounded-sm p-4 my-2 w-full bg-transparent border-2' type ="password" placeholder='Password' />
        <button className='px-4 py-2 rounded-md my-2 w-full bg-red-600 font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4'><span onClick={toggleSignInForm} className='cursor-pointer font-bold'>
        {isSignInForm? "New to Netflix-gpt? SignUp Now." : "Already a User? SignIn Now."}</span>
        </p>
      </form>
    </div>
  )
}

export default Login