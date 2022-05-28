import React from 'react'

function Teams() {
  return (
    <div className="absolute w-full bottom-[-4120px] md:bottom-[-2550px] lg:bottom-[-1950px]">
      <div className="border border-[#102337] border-l-[#00D8EC] border-4 flex justify-center items-center">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">TEAMS</h2>
      </div>

      <div className="mt-[60px] mb-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-self-center mx-10 lg:mx-40">
        <div className="relative w-[250px] lg:w-[300px] h-[300px] lg:h-[300px] cursor-pointer">
          <img className="" src="teams1.png" alt="" />
        </div>
        <div className="relative w-[250px] lg:w-[300px] h-[300px] lg:h-[300px] cursor-pointer">
          <img className="" src="teams2.jpg" alt="" />
        </div>
        <div className="relative w-[250px] lg:w-[300px] h-[300px] lg:h-[300px] cursor-pointer">
          <img className="" src="teams3.jpg" alt="" />
        </div>
        <div className="relative w-[250px] lg:w-[300px] h-[300px] lg:h-[300px] cursor-pointer">
          <img className="" src="teams4.jpg" alt="" />
        </div>
        <div className="relative w-[250px] lg:w-[300px] h-[300px] lg:h-[300px] cursor-pointer">
          <img className="" src="teams5.jpg" alt="" />
        </div>
      </div>    
    </div>
  )
}

export default Teams