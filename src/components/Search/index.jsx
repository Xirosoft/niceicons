import { useState } from "react";
import useStore from "@/data/store";
import Typewriter from 'typewriter-effect'


const Search = props => {
  const { searchTerm, setSearchTerm } = useStore()
  const [ searchFocus, setSearchFocus ] = useState(false)

  const onChangeHandler  = e => {
    setSearchTerm({value : e.target.value})
  }
  // const onFocusSearch = e => {
  //   console.log(e)
  //   setSearchFocus(true)
  // }

  return (
    <div className="search__inner" style={props.style}>
      {/* <select name="cat" className='search__cat'>
        <option value="cat1">Cat One</option>
        <option value="cat2">Cat Two</option>
        <option value="cat3">Cat Three</option>
        <option value="cat4">Cat Four</option>
      </select> */}

      <div className='search__inputgrp'>
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: searchFocus ? '#5834cc': '#111514'}}>
          <path d="M7.66732 13.9999C11.1651 13.9999 14.0007 11.1644 14.0007 7.66659C14.0007 4.16878 11.1651 1.33325 7.66732 1.33325C4.16951 1.33325 1.33398 4.16878 1.33398 7.66659C1.33398 11.1644 4.16951 13.9999 7.66732 13.9999Z" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.6673 14.6666L13.334 13.3333" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <input 
          className='search__input'
          type="text"
          placeholder='Search icons from over 5000+ collections'
          onChange = {e => onChangeHandler(e)}
          onFocus={() => setSearchFocus(true) }
          onBlur={() => setSearchFocus(false) }
          />
        {
          !searchTerm &&
            <Typewriter
              options={{
                strings: ['Search icons from over 5000+ collections', 'archive-add', 'arrow-left', 'folder', 'user', 'heart-add'],
                autoStart: true,
                loop: true,
              }}
            />
        }
      </div>
    </div>
  )
}

export default Search