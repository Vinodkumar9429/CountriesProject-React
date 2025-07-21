import React from 'react'
import contriesList from '../contriesList'
import SingleCard from './SingleCard'

const Countrycard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-y-20 pt-10'>

        {
            contriesList.map((country)=>{
                return <SingleCard 
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                />
            })
        
        }

    </div>
  )
}

export default Countrycard
