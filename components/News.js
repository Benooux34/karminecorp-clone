import React from 'react'

function News() {
  return (
    <div className="absolute w-full">
      <div className="mt-[160px] lg:mt-[60px] border border-[#102337] border-l-[#00D8EC] border-4 flex justify-center items-center">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">LATEST NEWS</h2>
      </div>

      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[30px] place-items-center justify-self-center mx-10 lg:mx-40">
        <div className="relative w-[300px] lg:w-[350px] h-[300px] lg:h-[350px] cursor-pointer">
          <img className="opacity-60" src="img1.jpg" alt="" />
          <span className="absolute w-[70%] left-[10px] pl-2 bottom-3 border border-transparent border-l-[#00D8EC] border-4 text-white text-xl font-bold opacity-0 hover:opacity-100">LA KARMINE CORP REMPORTE LES AMAZON EUROPEAN MASTERS ET RÉALISE LE THREE-PEAT</span>
        </div>
        <div className="relative w-[300px] lg:w-[350px] h-[300px] lg:h-[350px] cursor-pointer">
          <img className="opacity-60" src="img2.jpg" alt="" />
          <span className="absolute w-[70%] left-[10px] pl-2 bottom-3 border border-transparent border-l-[#00D8EC] border-4 text-white text-xl font-bold opacity-0 hover:opacity-100">La Karmine Corp crée son roster VALORANT !</span>
        </div>
        <div className="relative w-[300px] lg:w-[350px] h-[300px] lg:h-[350px] cursor-pointer">
          <img className="opacity-60" src="img3.png" alt="" />
          <span className="absolute w-[70%] left-[10px] pl-2 bottom-3 border border-transparent border-l-[#00D8EC] border-4 text-white text-xl font-bold opacity-0 hover:opacity-100">ekWateur DEVIENT PARTENAIRE DE LA KARMINE CORP</span>
        </div>
        <div className="relative w-[300px] lg:w-[350px] h-[300px] lg:h-[350px] cursor-pointer">
          <img className="opacity-60" src="img4.png" alt="" />
          <span className="absolute w-[70%] left-[10px] pl-2 bottom-3 border border-transparent border-l-[#00D8EC] border-4 text-white text-xl font-bold opacity-0 hover:opacity-100">LA KARMINE CORP VOUS PRÉSENTE SON MAILLOT COLLECTOR EUM</span>
        </div>
        <div className="relative w-[300px] lg:w-[350px] h-[300px] lg:h-[350px] cursor-pointer">
          <img className="opacity-60" src="img5.jpg" alt="" />
          <span className="absolute w-[70%] left-[10px] pl-2 bottom-3 border border-transparent border-l-[#00D8EC] border-4 text-white text-xl font-bold opacity-0 hover:opacity-100">DOS AU MUR : le film de la Karmine Corp aux LFL days à Nice</span>
        </div>
        <div className="relative w-[300px] lg:w-[350px] h-[300px] lg:h-[350px] cursor-pointer">
          <img className="opacity-60" src="img6.jpg" alt="" />
          <span className="absolute w-[70%] left-[10px] pl-2 bottom-3 border border-transparent border-l-[#00D8EC] border-4 text-white text-xl font-bold opacity-0 hover:opacity-100">Un nouveau partenaire : NZXT</span>
        </div>
      </div>
      
    </div>
  )
}

export default News