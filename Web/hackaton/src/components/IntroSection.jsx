import React from 'react';


const IntroSection = () => {
  return (
    <div className="hero min-h-screen bg-hero-pattern">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center flex flex-col">
      <div className="max-w- flex gap-7">
        <div className='flex flex-col'>
            
        <h1 className="mb-5 text-5xl font-bold">Segmentación de Clientes </h1>
            
        </div>
         <div className="w-1/3 flex flex-col">
         
          <span> 🌟 Este análisis busca explorar y comprender las características y comportamientos de los clientes de nuestra tienda en línea, especializada en productos creativos. 🎨🛒 </span>

         </div>

      </div>
    </div>
    
    
  </div>
  );
};

export default IntroSection;
