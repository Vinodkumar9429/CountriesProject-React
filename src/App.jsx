import React, { useState } from 'react'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Filter from './components/filter'
import Countrycard from './components/Countrycard'
const App = () => {
  const [query, setQuery]  = useState("");

  return (
    
    <div className='h-screen w-screen box-border flex flex-col items-center gap-y-4 overflow-x-hidden relative'>
      <Header 
      part1={"Which Color Is Your Country ?"}
      part2={<i className="ri-moon-line"></i>}
      />

    <div className='w-full h-full px-6'>

      <div className='flex flex-col gap-y-3 md:flex-row pt-40 justify-center gap-3'>
        <Searchbar setQuery={setQuery} />

        <Filter />
      </div>

        <Countrycard query={query} />
      </div>

  

    </div>
  )
}

export default App
