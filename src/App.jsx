import React from 'react'
import './App.css'
import { routes } from './routes'
import { useRoutes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

export const App = () => {
  const elements = useRoutes(routes)
  return (
    <>
      {elements}
      <Toaster position="bottom-right" reverseOrder={false}/>
    </>
  )
}

export default App