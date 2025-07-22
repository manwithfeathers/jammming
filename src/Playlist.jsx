import React, {useState} from "react";

export default function Playlist(props) {
  

    return (
        <div>
        
            {props.playlist.map(artist => (
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", border: 10}}>
                <><p>{artist.name}</p><button name={artist.name} onClick={()=> props.removeItem(artist.name)}>Remove</button></>
            </div>
            ))
            }
            
        </div>
    )
 
}