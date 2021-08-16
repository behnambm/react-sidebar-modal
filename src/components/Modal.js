import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './modal.css'
import { useGlobalContext } from '../context'

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <div className={`modal-wrapper ${isModalOpen && 'show-modal'}`}>
      <div className='modal-container'>
        <button className='close-modal' onClick={closeModal}>
          <FaTimes />
        </button>
        <h3>modal header title</h3>
      </div>
    </div>
  )
}

export default Modal
