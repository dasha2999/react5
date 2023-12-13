import { useState, useEffect } from 'react'
import './searchbar.scss'

export const SearchBar = ({whenClick}) => {
    const [inputText, setInputText] = useState('')

    function handleChange({target: {value}}) {
        setInputText(value)
        whenClick(value)
    }

    useEffect(() => {
        const listener = (event) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                // console.log('Нажали Enter')
                whenClick(inputText)
            }
        }
        document.addEventListener('keydown', listener)
        return () => {
            document.removeEventListener('keydown', listener)
        }
    },[inputText])

    // console.log(inputText)

    return (
        <div className="search">
            <h2>Search Bar</h2>
            <input value={inputText} onChange={handleChange} type="text" className="search-input"/>
            {/* <input onChange={(e) => {console.log(e.target.value)}} type="text" className="search-input"/> */}
            <button onClick={() => whenClick(inputText)} className="search-button">Find user</button>
        </div>
    )
}