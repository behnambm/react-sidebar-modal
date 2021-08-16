import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './sidebar.css'
import { links, social } from '../data'
import { useGlobalContext } from '../context'

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
      <button className='close-sidebar' onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className='sidebar-header'>
        <h3>My Sidebar</h3>
      </div>

      <ul className='links'>
        {links.map((link) => {
          const { id, url, icon, text } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className='social'>
        {social.map((item) => {
          const { id, url, icon } = item
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
