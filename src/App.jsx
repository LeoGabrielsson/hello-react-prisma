import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState()

  async function fetchData() {
    await fetch('http://localhost:3000')
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <button onClick={() => fetchData()}>Hämta data</button>
    </>
  )
}

export default App
