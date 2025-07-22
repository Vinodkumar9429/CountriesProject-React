import React from 'react'

const Searchbar = ({setQuery}) => {
  return (
    <div className='w-2/3 relative'>
        <i className="ri-search-line absolute top-3 left-5" />
      <input type="text"  
      onChange={(e)=>setQuery(e.target.value.toLowerCase())}
      className='pl-10 py-2 border-1 w-full rounded-xl focus:outline-0' placeholder="Search"/>
    </div>
  )
}

export default Searchbar
