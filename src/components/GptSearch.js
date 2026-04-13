import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  
  return (
     <>
      <div
      className="fixed top-0 left-0 w-full h-screen bg-cover bg-center -z-10"
      style={{ backgroundImage: `url(${BG_URL})` }}
      ></div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch