import React from 'react'

const Country = (country) => {
  return (
    <div>      {
        countries?.map(country => (
          <article >
            <img className='flags' src={country.flags.png} alt="" />
            <h2> {country.name.common} </h2>
            <h2> {country.capital[0]} </h2>
          </article>
        ))

      }</div>
  )
}

export default Country