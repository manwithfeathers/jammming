import React from "react";



function SearchBar(props) {
    return (
        
        <div>
            <input type="text" id="searchBar" value={props.search} onChange={props.onChange}></input>
            <button onClick={props.findSimilar}>Find Similar</button>
        </div>
    )
}

export default SearchBar;