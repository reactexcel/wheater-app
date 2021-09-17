import React from 'react'


export default function CardList ({ extendedforcast }) {
  const newData = extendedforcast.list.filter((item, index) => index % 8 === 0)

  const umbrella = []
  const jacket = []

  const data = newData.map((item, i) => {
    if (item.weather[0].main === 'Clouds') {
      umbrella.push(item)
    } else if (item.weather[0].main === 'Clear') {
      jacket.push(item)
    }
  })

  return (
    <div>
      <div className='d-flex flex-row flex-wrap w-50 mx-auto '>
        {newData.map((item, index) => {
          return (
            <div
              className='card mx-2 my-4 shadow rounded-lg mx-auto'
              style={{ width: '18rem' }}
              key={index}
            >
              <div>
                <p className="my-2 text-primary" >
                {item.dt_txt.substring(0,10)}
                  </p>
                <p>Temprature: {item.main.temp} &deg;C</p>
                <div className='d-flex justify-content-center  text-center'>
                  <p className='mx-2'>Max: {item.main.temp_max} &deg;C</p>
                  <p>Min: {item.main.temp_min} &deg;C</p>
                </div>
                <div>
                  {item.weather.map(items => {
                    return <h4>{items.description}</h4>
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <div>
         
          <h1>Best day to sell umbrella</h1>
          {umbrella.map(item => (
            <h4 className='text-primary'>{item.dt_txt.substring(0, 10)}</h4>
          ))}
        </div>
        <div>
          {' '}
          <h1>Best day to sell jacket</h1>
          {jacket.map(item => (
            <h4 className='text-primary'>{item.dt_txt.substring(0, 10)}</h4>
          ))}
        </div>
      </div>
    </div>
  )
}
