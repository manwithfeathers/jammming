import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from "./SearchResults"
import songList from "./SongList"


function App() {
  

  return (
    <>
      <div>
        
        
        
        <p>Adam's Song App</p>
        <SearchBar />
        <SearchResults songs={songList}/>
       

      
      </div>
    </>
  )
}

export default App
