import React,{useEffect} from 'react'
import axios from "axios";

const SerachFont = () => {
    const handleFetchFont = async()=>{
        const res = await axios.get("http://localhost:3000/api/data?q=your_search_term")
        console.log(res.data)
        }
  return (
    <button onClick={handleFetchFont}>
        Fetch Font

    </button>
  )
}

export default SerachFont