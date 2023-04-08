import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { AppProvider } from '@/contexts'

import { SWRConfig } from 'swr'

const interGoogleFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const fetcher = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}
    >
      <div className={`${interGoogleFont.variable} font-sans`}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </div>
    </SWRConfig>
  )
}

export default App
