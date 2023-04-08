import { useContext } from 'react'
import { AppContext } from './App.context'

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error(`${useAppContext.name} must be used within a Provider.`)
  }

  return context
}
