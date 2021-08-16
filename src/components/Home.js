import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import './home.css'

function Home() {
  const { openModal } = useGlobalContext()

  return (
    <div>
      <button className='sidebar-btn'>
        <FaBars />
      </button>
      <button className='modal-btn' onClick={openModal}>
        Show modal
      </button>
    </div>
  )
}

export default Home
