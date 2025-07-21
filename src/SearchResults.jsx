import React from "react";

export default function SearchResults(props) {
    return (
        <div>
            {props.songs.map((song, index) =>  (
                <p key={index}>{song.artist}: {song.name}</p>
            ))}
       </div>  
    );
}
