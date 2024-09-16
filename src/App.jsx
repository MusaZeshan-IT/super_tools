import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import WritingTool from './pages/WritingTool'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing-tools/:toolUrlName" element={<WritingTool />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
