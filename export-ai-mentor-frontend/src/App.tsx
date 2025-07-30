import { useState } from 'react'
import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
function App() {
  const [] = useState(0)

  return (
     <MantineProvider>
   <h1 className="text-5xl text-amber-600 font-bold underline">
    Welcome To Our Project !!
  </h1>
    </MantineProvider>
  )
}

export default App
