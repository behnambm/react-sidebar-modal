import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './modal.css'
import { useGlobalContext } from '../context'

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <div className={`modal-wrapper ${isModalOpen && 'show-modal'}`}>
      <div className='modal-container'>
        <div className='modal-header'>
          <h3>modal header title</h3>

          <button className='close-modal' onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
        <div className='modal-content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            explicabo deleniti aliquam praesentium illum aspernatur possimus
            laboriosam corporis minima, veritatis earum quos eius harum iste
            placeat obcaecati a modi quibusdam?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal
