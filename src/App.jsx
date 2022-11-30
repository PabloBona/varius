

import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Flags from './Components/Country'
 
function App() {
  const [countries, setCountries] = useState()
  const [inputTest, setinputTest] = useState(`spa`)

//https://restcountries.com/v3.1/lang/spa

useEffect(() => {
  const URL =  `https://restcountries.com/v3.1/lang/${inputTest}`
  axios.get(URL)
  .then( res => {setCountries(res.data) })
  .catch( e => console.log(e))
}, [inputTest])
 
const handleSubmit = (e) => {
  e.preventDefault()
  setinputTest(event.target.inputTest.value);
}

console.log(inputTest);
  return (
    <div className="App">
      <h1> Countries - {countries?.[0].languages.spa} </h1>
      <form onSubmit={handleSubmit}>
        <input id="inputTest" type="text" />
        <button>Search</button>
      </form>
      {
        countries?.map(country => (
          <article key={country.population}>
            <img className='flags' src={country.flags.png} alt="" />
            <h2> {country.name.common} </h2>
            <h2> {country.capital[0]} </h2>
          </article>
        ))

      }
       
    </div>
  )
}

export default App

