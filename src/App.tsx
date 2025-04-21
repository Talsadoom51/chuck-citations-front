import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const chuckCitations = [
    "The only thing I can't do is die.",
    "I don't need a weapon. My body is my weapon.",
    "I don't need a reason to fight. I just do it.",
    "I don't need a plan. I just do it.",
  ]

  const getRandomCitation = () => {
    const randomIndex = Math.floor(Math.random() * chuckCitations.length)
    return chuckCitations[randomIndex]
  }

  const appVersion = import.meta.env.VITE_APP_VERSION

  return (
    <>
      <div className='bg-blue-200 p-16 rounded-xl shadow-xl'>
        <h1>{getRandomCitation()}</h1>
      </div>

      <br />
      <br />
      <br />

      <h4>App version: {appVersion} </h4>

    </>
  )
}

export default App
