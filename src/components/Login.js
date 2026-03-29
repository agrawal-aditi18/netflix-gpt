import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const mobileNo = useRef(null);

  const handleButtonClick = () => {

  if (isSignInForm) {
    // Sign In Validation
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // Sign In Logic
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log(user);
      // navigate("/browse");
    })
    .catch((error) => {
      setErrorMessage(error.code + " - " + error.message);
    });

  } else {
    // Sign Up Validation
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value,
      mobileNo.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // Sign Up Logic
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL: "https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }).then(() => {
        const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid : uid, email: email, displayName: displayName, photoURL: photoURL}))
                

      }).catch((error) => {
        setErrorMessage(error.message);
      });
      // console.log(user);
      // navigate("/browse");
    })
    .catch((error) => {
      setErrorMessage(error.code + " - " + error.message);
    });
  }
};

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
      <form
      onSubmit={(e) => e.preventDefault()}
       className='absolute w-[29%] p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md'>
        <h1 className='text-3xl font-bold pb-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name}className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Full Name'/>)}
        <input ref={email} className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Email'/>
        {!isSignInForm && (<input ref={mobileNo} className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Mobile Number'/>)}
        <input ref={password} className='rounded-sm p-4 my-2 w-full bg-transparent border-2' type ="password" placeholder='Password' />
        <p className='text-red-400 font-bold text-md py-2'>{errorMessage}</p>
        <button className='px-4 py-2 rounded-md my-2 w-full bg-red-600 font-bold' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4'><span onClick={toggleSignInForm} className='cursor-pointer font-bold'>
        {isSignInForm? "New to Netflix-gpt? SignUp Now." : "Already a User? SignIn Now."}</span>
        </p>
      </form>
    </div>
  )
}

export default Login


