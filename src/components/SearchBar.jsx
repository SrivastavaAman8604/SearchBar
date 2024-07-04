import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'

export const SearchBar = ({ setResult }) => {
    
    const[input,setInput] = useState("")
    
    const fetchData = (value) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            const result = json.filter((user)=> {
                return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
            })
            // console.log(result)
            setResult(result)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-box'/>
            <input type="text" placeholder='Type to search...' value={input} onChange={(e)=>handleChange(e.target.value)}/>
        </div>
    )
}
