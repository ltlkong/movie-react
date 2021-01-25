import React from 'react';
import { Link } from 'react-router-dom';
import SearchMovie from './SearchMovie'

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </Link>
      <SearchMovie {...props}/>
    </header>
  )
}