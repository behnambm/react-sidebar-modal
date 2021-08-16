import React, { useContext } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const data = {
    isModalOpen,
    openModal,
    closeModal,
  }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  const context = useContext(AppContext)
  return context
}
