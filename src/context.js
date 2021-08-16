import React, { useContext } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const data = {}

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  const context = useContext(AppContext)
  return context
}
