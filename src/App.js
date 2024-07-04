import React from 'react'
import Nav from './Nav'
import Intro from './Intro'
import './App.css'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
export default function App() {
  return (
    <div className='App'>
        <Nav/>
        <Intro/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>

  )
}
