import React, { useContext, useState } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const data = {
    isModalOpen,
    openModal,
    closeModal,
    isSidebarOpen,
    openSidebar,
    closeSidebar,
  }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  const context = useContext(AppContext)
  return context
}
