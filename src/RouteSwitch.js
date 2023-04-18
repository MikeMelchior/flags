import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Database from './Components/Database'

export default function RouteSwitch() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/database' element={<Database />} />
      </Routes>
    </Router>
  )
}
