import "./App.css"
import React, { useState, useEffect } from "react"

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data))
  }, [])
  return (
    <div className='App'>
      {countries.map((country) => (
        <p key={country.name}>{country.name}</p>
      ))}
    </div>
  )
}

export default App
