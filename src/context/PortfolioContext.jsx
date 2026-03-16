import { createContext, useMemo } from 'react'
import { portfolioData } from '../data/portfolioData'

export const PortfolioContext = createContext(null)

export function PortfolioProvider({ children }) {
  const value = useMemo(() => portfolioData, [])
  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
}
