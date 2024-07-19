import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/" className='link'>Home</Link>
            </li>
            <li>
                <Link to="/about" className='link'>About</Link>
            </li>
            <li>
                <Link to="/store" className='link'>Store</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default Header
