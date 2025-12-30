import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_small.jpg"
        alt="bg-img"/>
      </div>
      <form className='absolute w-[29%] p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md'>
        <h1 className='text-3xl font-bold pb-6'>Sign In</h1>
        <input className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Email or mobile number'/>
        <input className='rounded-sm p-4 my-2 w-full bg-transparent border-2' type ="password" placeholder='Password' />
        <button className='px-4 py-2 rounded-md my-2 w-full bg-red-600 font-bold'>Sign In</button>
        <p className='py-4'>New to Netflix-gpt? <a className='font-bold'>Sign up Now.</a></p>
      </form>
    </div>
  )
}

export default Login