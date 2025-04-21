import './App.css'
import { chuckCitations } from './assets/data'

function App() {

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
