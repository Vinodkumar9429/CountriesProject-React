import React from 'react'

const Filter = () => {
  return (
      <select className='border-1 w-2/6 md:w-1/6 px-4 py-2 rounded-2xl'>
        <option value="" disabled>Select Country</option>
        <option value="asia">Asia</option>
        <option value="america">America</option>
        <option value="africa">Africa</option>
        <option value="europe">Europe</option>
        <option value="europe">Europe</option>
      </select>
  )
}

export default Filter
