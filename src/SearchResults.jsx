import React from "react";

export default function SearchResults(props) {
    return (
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", border: 10}}>
            {props.artists.map((artist, index) =>  (
                <><p key={index}>{artist.name}</p><button onClick={() => props.addArtist(artist)}>Add Artist</button></>
            ))}
       </div>  
    );
}
