import React from 'react'
import { FaBars } from 'react-icons/fa'
import './home.css'

function Home() {
  return (
    <div>
      <button className='sidebar-btn'>
        <FaBars />
      </button>
      <button className='modal-btn'>Show modal</button>
    </div>
  )
}

export default Home
