import React, { useState } from 'react';
import SerachFont from './SerachFont';
import axios from "axios";

const SearchComponent = ({setFontList}) => {

  const [query,SetQuery] = useState("")
  console.log(query)

  const handleClick= async() =>{
   const res = await axios.get(`https://styler-backend.vercel.app/api/data?q=${query}`)
    // console.log(res.data)
    // SetResponse(res.data)
    setFontList(res?.data?.items)
  }
  return (
    <div class="search-wrapper">
    <input class="search-input" type="text" placeholder="Search" value={query} onChange={(e)=>{SetQuery(e.target.value)}} />
    <button onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24" >
      <defs></defs>
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
    </svg>
    </button>
  </div>
  );
};

export default SearchComponent;
