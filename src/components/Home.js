import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import './home.css'

function Home() {
  const { openModal, openSidebar } = useGlobalContext()

  return (
    <div>
      <button className='sidebar-btn' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='modal-btn' onClick={openModal}>
        Show modal
      </button>
    </div>
  )
}

export default Home
