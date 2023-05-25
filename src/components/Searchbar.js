import React from "react";
import searchIcon from "../assets/icon-search.svg";

export default function Searchbar(props){
    const searchPlaceholder = `Search for ${window.location.pathname==="/home"?"Movies or TV Series":window.location.pathname==="/movie"?"Movies":window.location.pathname==="/tv"?"TV series":"Bookmarks"}`;
    return(
        <div className="searchbar">
            <img src={searchIcon} id="searchbar--icon"></img>
            <input id="searchbar--input" className="medium-text" name="searchbar" type="text" placeholder={searchPlaceholder} value={props.value} onChange={props.onchange}></input>
        </div>
    )
}

