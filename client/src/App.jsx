import { useContext, useState } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecurtierLogin from './components/RecurtierLogin'
import { AppContext } from './context/AppContext'

function App() {
 
const {showRecurtierLogin} = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <>
    { showRecurtierLogin && <RecurtierLogin/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/apply-job/:id' element={<ApplyJob/>}/>
      <Route path='/applications' element={<Applications/>}/>
    </Routes>
    </>
  )
}

export default App
