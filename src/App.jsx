import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from "./SearchResults"
import songList from "./SongList"
import Playlist from "./Playlist"



function App() {

  const apikey = "1054617-Listenin-EC8F7582";
  const endpoint = 'https://tastedive.com/api/similar?q=' 
  const linkString = "&type=music&k="
  

  
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [similarArtists, setSimilarArtists] = useState([])
  const [search, setSearch] = useState("");
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
 
  const addArtist = (artist) => {
    setPlaylist(prev => [...prev, artist]);
  }

  const removeItem = (artist) => {
    setPlaylist(playlist => playlist.filter(item => item.name !== artist))
  }

  function handleUserInput(e) {
    setPlaylistName(e.target.value);
  }

  function handleSubmit() {
    alert(`Playlist name is ${playlistName} and the playlist is ${playlist.length} tracks long`);
  }

  const findSimilar = async () => {
    console.log(search)
    const artist = search.replace(" ", "+");
    const url = `/api/api/similar?q=${artist}${linkString}${apikey}`;
    console.log(url)
    
    
    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json.similar.results)
    setSimilarArtists(json.similar.results)
    
  } catch (error) {
    alert(error.message);
  }
  }
  



  return (
    <>
      <div>
        <h1>Similar Artist Finder</h1>
        <SearchBar findSimilar={findSimilar} onChange={handleSearch} search={search} />
        <SearchResults artists={similarArtists} addArtist={addArtist} />
        <h1>Playlist</h1>
        <input type="text" value={playlistName} onChange={handleUserInput}></input>
        <Playlist playlist={playlist} removeItem={removeItem}/>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </>
  )
}

export default App
