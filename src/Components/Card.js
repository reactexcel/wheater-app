import React from 'react'
import moment from 'moment'

export default function SimpleCard ({ data }) {
  return (
    <>
      {data ? (
        <div className='card w-50 mx-auto shadow rounded-lg'>
          <div className='d-flex justify-content-between bg-light py-1 pt-2 px-2'>
            <h4 className='card-title d-flex justify-content-start'>
              Current Wheather
            </h4>
            <p className='day'>
              {moment().format('dddd')}, <span>{moment().format('LL')}</span>
            </p>
          </div>

          <div className='card-body'>
            <div className='d-flex justify-content-start '>
              <div className=' mt-4 w-50'>
                <h5 className='text-primary'>{data.name}</h5>
                <p className='temp'>Temprature: {data.main.temp} &deg;C</p>
                <p className='description'>{data.weather[0].main}</p>

                <div className='d-flex justify-content-between  py-1 pt-2 px-2'>
                  <p className='sunrise-sunset'>
                    Sunrise-{' '}
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString(
                      'en-IN'
                    )}
                  </p>
                  <p className='sunrise-sunset'>
                    Sunset-{' '}
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString(
                      'en-IN'
                    )}
                  </p>
                </div>
              </div>

              <div className='w-50'>
                <p className='temp'>
                  Feels-like: {data.main.feels_like} &deg;C
                </p>
                <div className='d-flex justify-content-center '>
                  <p className='temp px-2'>Max: {data.main.temp_max} &deg;C</p>
                  <p className='temp'>Min: {data.main.temp_min} &deg;C</p>
                </div>
                <p className='temp'>Humidity: {data.main.humidity} %</p>

                <p>Description: {data.weather[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
