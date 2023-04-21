import React from 'react'
import blogdata from '../data/blog'

function Header() {
  return (
    <div>
        <header>
            <h1>
                {blogdata.name}

            </h1>
        </header>
    </div>
  )
}

export default Header