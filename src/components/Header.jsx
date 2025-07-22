import React, { useState } from 'react'

const Header = ({part1, part2}) => {
    const [isDark, setIsDark] = useState(false);
    const toggleDark = ()=>{
        setIsDark((prev) => !prev);
    };
  return (
    <nav className='min-w-7xl h-20 py-5 fixed backdrop-blur-2xl flex justify-center sm:justify-evenly items-center px-4 sm:px-10 z-50 bg-black/10 rounded-2xl gap-5'>
      <div 
      className='md:text-2xl font-medium font-clash-display'>
        {part1}
      </div>
      <div 
      className={`text-xl md:text-3xl flex justify-center items-center gap-3 px-3 py-1 rounded-full cursor-pointer hover:shadow-xl ${isDark ? "bg-black" : "bg-white"} transition-all duration-400`}
      onClick={toggleDark}
    >
          {isDark ? <i className="ri-moon-fill text-yellow-600"></i> : part2} 
        <p className={`hidden md:block text-sm font-general-sans font-medium ${isDark ? "text-white" : "text-black"}`}>Dark Mode</p>
      </div>
    </nav>
  )
}

export default Header
