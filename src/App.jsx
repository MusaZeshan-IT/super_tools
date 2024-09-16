import React from 'react'
import Navbar from './components/common/Navbar'
import './App.css'
import Hero from './components/Hero'
import WritingTools from './components/WritingTools'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <WritingTools />
    </div>
  )
}

export default App
