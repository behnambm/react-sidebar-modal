import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './modal.css'

function Modal() {
  return (
    <div className='modal-wrapper '>
      <div className='modal-container'>
        <button className='close-modal'>
          <FaTimes />
        </button>
        <h3>modal header title</h3>
      </div>
    </div>
  )
}

export default Modal
