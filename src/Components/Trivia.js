import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

const Trivia = () => {
  const [countries, setCountries] = useState({})
  const [country, setCountry] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [level, setLevel] = useState(1)
  const selectedAnswer = useRef('');

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    const keys = Object.keys(countries)
    let randomPick = countries[keys[Math.floor(Math.random() * keys.length)]]
    for (let country in countries) {
      if (countries[country] === randomPick) setCountryCode(country)
    }
    setCountry(randomPick)
  }, [countries, level])

  const getCountries = async () => {
    const response = await fetch('https://flagcdn.com/en/codes.json')
    const data = await response.json();
    setCountries(data)
  }

  const createMultipleChoiceArray = () => {
    let correctAnswer = country;
    let countriesPool = Object.keys(countries)
    const pickRandom = () => {
      let result;
      let randomNum = Math.floor(Math.random() * countriesPool.length);
      result = countriesPool.splice(randomNum, 1)
      return countries[result]
    }
    let arr = [];
    for (let i = 0; i < 3; i++) {
      let randomCountry = pickRandom()
      if (randomCountry !== correctAnswer) arr.push(randomCountry)
    }
    arr.splice(Math.floor(Math.random() * arr.length), 0, correctAnswer)
    return arr;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedAnswer.current === '') return
    if (selectedAnswer.current === country) alert('Nice!')
    else alert(`The correct answer was ${country}`)
    setLevel(prevLevel => prevLevel + 1)
    selectedAnswer.current = ''
  }
  
  let answers = createMultipleChoiceArray();
  console.log(answers, country)
  return (
    <div>
      <p className='home'><Link to={'/'}>Home</Link></p>
      <h1>Flag Trivia!</h1>
      <div className="flag">
        <img src={`https://flagcdn.com/w320/${countryCode}.png`} alt="" />
      </div>
      <div className="multiple-choice">
        <p>Which country or region does this flag belong to?</p>
        <form action="">
          {answers.map(answer => (
            <p key={answer} onChange={e => selectedAnswer.current = e.target.id}>
              <label>{answer}</label>
              <input type="radio" name="answer" id={answer} />
            </p>
          ))}
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Trivia