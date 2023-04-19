import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Trivia = () => {
  const [countries, setCountries] = useState({})
  const [country, setCountry] = useState({})

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = async () => {
    const response = await fetch('https://flagcdn.com/en/codes.json')
    const data = await response.json();
    console.log(data)
    // setCountries(data)
  }


  return (
    <div>
      <p className='home'><Link to={'/'}>Home</Link></p>
      <h1>Coming Soon!</h1>

    </div>
  )
}

export default Trivia