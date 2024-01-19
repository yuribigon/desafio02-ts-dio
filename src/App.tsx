/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout } from './components/Layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './components/AppContext/AppContext'
import MainRoutes from './routes'
import { createLocalStorage, getlAllLocalStorage } from './services/storage'


function App() {

  !getlAllLocalStorage() && createLocalStorage();
  
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
