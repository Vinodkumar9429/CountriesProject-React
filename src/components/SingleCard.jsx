import React from 'react'

const SingleCard = ({name, flag, population, region, capital}) => {
  return (
    <div className='w-72 h-[400px] rounded-xl shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden'>
      <a className="country-card h-full w-full flex flex-col" href={`/country.html?name=${name}`}>
        <img src={flag} className='w-full h-1/2 object-cover object-center' />
        <div className='flex flex-col h-1/2 w-full gap-y-2 py-2'>
        <h1 className='font-general-sans font-extrabold text-xl px-6 pt-5'>{name}</h1>
        <h3 className='font-general-sans font-medium px-12'>Population : {population}</h3>
        <h3 className='font-general-sans font-medium px-12'>Region : {region}</h3>
        <h3 className='font-general-sans font-medium px-12'>Captial : {capital}</h3>

        </div>

      </a>
    </div>
  )
}

export default SingleCard
