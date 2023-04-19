import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Database from './Components/Database'
import Trivia from './Components/Trivia'

const RouteSwitch = () => (
  <HashRouter>
    <Routes>
      <Route path='/' Component={App} />
      <Route path='/database' Component={Database} />
      <Route path='/trivia' Component={Trivia} />
    </Routes>
  </HashRouter>
)

export default RouteSwitch