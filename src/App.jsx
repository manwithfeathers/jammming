import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from "./SearchResults"
import songList from "./SongList"
import Playlist from "./Playlist"



function App() {

  
  const [playlist, setPlaylist] = useState([])

  const addSong = (song) => {
    setPlaylist(prev => [...prev, song]);
  }

  

  return (
    <>
      <div>
        
        
        
        <p>Adam's Song App</p>
        <SearchBar />
        <SearchResults songs={songList}/>
        <Playlist playlist={songList}/>
      
       

      
      </div>
    </>
  )
}

export default App
