import React, { useState } from 'react'
import './App.css'
import { fetchWeatherData, fetchextendedforcast } from './api/wheather'
import SimpleCard from './Components/Card'
import CardList from './Components/CardList'

function App () {
  const [city, setCity] = useState(' ')
  const [data, setData] = useState([])
  const [extendedforcast, setExtendedforcast] = useState([])


  const showWhether = async e => {
    e.preventDefault()
    if (!city) {
      window.alert('Please add city')
    }
    try {
      const res = await fetchWeatherData(city)
      const forcastresult = await fetchextendedforcast(city)
      setData(res)
      if (forcastresult) {
        setExtendedforcast(forcastresult)
      }
    } catch (error) {
      window.alert(error.message)
    }
  }

  return (
    <div className='text-center'>
      <h1>React Wheather </h1>
      <form
        class='form-inline my-4  w-50 d-flex mx-auto'
        onSubmit={showWhether}
      >
        <input
          class='form-control mr-sm-2'
          type='search'
          placeholder=' type city name'
          aria-label='Search'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
      <div className='mx-auto'>
        {typeof data.main != 'undefined' ? (
          <>
            <SimpleCard data={data} />
          </>
        ) : (
          <div></div>
        )}
      </div>
      {extendedforcast.cod === '200' ? (
        <div className='mx-auto d-flex flex-start'>
          <CardList extendedforcast={extendedforcast} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default App
