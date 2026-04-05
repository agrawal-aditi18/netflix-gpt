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
  return (
    <div className='absolute w-screen py-2 px-32 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' 
        src={LOGO}
        alt="netflix-logo"/>
        {user && (<div className='flex p-2'>
          <img className='w-12 h-12' alt="user-icon"
          src={user?.photoURL}/>
          <button onClick={handleSignOut} className='mx-3 font-bold text-white'>(Sign Out)</button>
        </div>)}

    </div>
  )
}

export default Header