import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const mobileNo = useRef(null);

  const handleButtonClick = () => {
    if (!email.current || !password.current) return;

  if (isSignInForm) {
    // Sign In Validation
    const message = checkValidData(
      email.current?.value,
      password.current?.value
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
    if (!name.current || !mobileNo.current) return;
    const message = checkValidData(
      email.current?.value,
      password.current?.value,
      name.current?.value,
      mobileNo.current?.value
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
        displayName: name.current?.value, photoURL:USER_AVATAR
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
        <img className='h-screen object-cover'
        src={BG_URL}
        alt="bg-img"/>
      </div>
      <form
      onSubmit={(e) => e.preventDefault()}
       className='absolute w-full md:w-[29%] p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md'>
        <h1 className='text-3xl font-bold pb-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name}className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Full Name'/>)}
        <input ref={email} className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Email'/>
        {!isSignInForm && (<input ref={mobileNo} className='rounded-sm p-4 my-2 w-full bg-transparent border-2 ' type ="text" placeholder='Mobile Number'/>)}
        <input ref={password} className='rounded-sm p-4 my-2 w-full bg-transparent border-2' type ="password" placeholder='Password' />
        <p className='text-red-400 font-bold text-md py-2'>{errorMessage}</p>
        <button type="button" className='px-4 py-2 rounded-md my-2 w-full bg-red-600 font-bold' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4'><span onClick={toggleSignInForm} className='cursor-pointer font-bold'>
        {isSignInForm? "New to Netflix-gpt? SignUp Now." : "Already a User? SignIn Now."}</span>
        </p>
      </form>
    </div>
  )
}

export default Login


