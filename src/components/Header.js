import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';
import {toggleGptSearchView} from "../utils/gptSlice"

const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = ()=> {
    signOut(auth).then(()=>{
      // navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      //signin
      if(user){
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid : uid, email: email, displayName: displayName, photoURL: photoURL}))
        navigate("/browse");
      }
      else{
         //signOut
         dispatch(removeUser());
         navigate("/");
         
      }
    });
    return () => unsubscribe();
  }, [])

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }
  return (
    <div className='absolute w-screen py-2 px-32 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' 
        src={LOGO}
        alt="netflix-logo"/>
        {user && (<div className='flex p-2 items-center'>
          <button className='py-2 px-4 mx-4 my-2 font-semibold hover:scale-105 transition-transform duration-200 bg-gray-300 rounded-md'
          onClick={handleGptSearchClick}>
            GPT Search
          </button>
          <img className='w-12 h-12 hover:scale-110 transition-transform duration-200' alt="user-icon"
          src={user?.photoURL}/>
          <img 
          onClick={handleSignOut}
          className="w-8 h-8 mx-3 cursor-pointer hover:scale-110 transition-transform duration-200 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7Od7nESEWjJnmVSEdzztJ-kwOWY8Yl9v5Q&s"
          alt="signout-icon"
          />

        </div>)}

    </div>
  )
}

export default Header