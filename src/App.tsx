import { Layout } from './components/Layout/Layout'
import { Box } from '@chakra-ui/react'
import { Card } from './components/Card/Card'

function App() {

  return (
    <>
      <Box minHeight='100vh' backgroundColor="black">
        <Layout>
          <Card />
        </Layout>
      </Box>
    </>
  )
}

export default App
