import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Trending from './trending'
import Playlist from './Playlist'
import Player from './components/player'
import SignUp from './Auth/Signup'
import LoginPage from './Auth/LoginPage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './assets/pages/HomePage'

const App = () => {
  return (<>

    

    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/home' element={<HomePage />} />


    </Routes>

  </>
  )
}

export default App