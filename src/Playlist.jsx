import React, {useState} from "react";

export default function Playlist(props) {
  

    return (
        <div>
            <h1>Playlist</h1>
            {props.playlist.map(song => (
                <p>{song.name}</p>
            ))

            }
            
        </div>
    )
 
}