import React, { useState, useEffect } from 'react'
import '../styles.css'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'

const Database = () => {
  const [countries, setCountries] = useState({})
  const [countriesArray, setCountriesArray] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    setCountriesArray(getCountriesArray(countries))
  }, [countries])

  const getCountriesArray = (obj) => {
    let countriesArray = []
    for (let country in obj) {
      countriesArray = [...countriesArray, obj[country]]
    }
    countriesArray = countriesArray.sort((a, b) => a < b ? -1 : 1)
    return countriesArray
  }

  const getCountries = async () => {
    const response = await fetch(`https://flagcdn.com/en/codes.json`)
    const data = await response.json();
    setCountries(data)
  }

  function getCountryByCode(countries, code) {
    return Object.keys(countries).find(key => countries[key] === code);
  }

  
  return (
    <div className='database'>
      <p className='home'><Link to={'/'}>Home</Link></p>
      <h1>Flag Database</h1>
      <div className="list">
        {countriesArray.map(c =>
           <p className='country' 
            key={uniqid()}>
            <a href={`https://flagcdn.com/w320/${getCountryByCode(countries, c)}.png`}>
                {c}
            </a>
            </p>)}
      </div>
    </div>
  )
}

export default Database