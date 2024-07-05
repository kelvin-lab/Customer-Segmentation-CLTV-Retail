import React from 'react';

const RFMAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col space-y-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Aplicación del método RFM</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          Se realizó un análisis para visualizar cuántos días suelen esperar los clientes hasta su siguiente compra. 
          Como se observa, la mayoría de los clientes suelen esperar entre 50 y 70 días entre sus compras.
        </p>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Gráfica de análisis de compras"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Distribución de Compras</h2>
            <p>Distribución de días de espera entre compras de los clientes.</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-4">
          Lo que observamos en esta gráfica es la distribución de clientes por su antigüedad. La mayor concentración de clientes 
          se encuentra en el rango de 0 a 6 meses, lo que sugiere que la empresa tiene una alta tasa de adquisición de nuevos 
          clientes. A medida que aumenta la antigüedad, el número de clientes disminuye, lo que indica que la empresa tiene cierta 
          rotación de clientes.
        </p>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Gráfica de antigüedad de clientes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Distribución de Antigüedad</h2>
            <p>Distribución de clientes por antigüedad.</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-4">
          Se muestra una distribución típica de clientes por antigüedad, con una alta concentración de nuevos clientes y una 
          disminución gradual a medida que aumenta la antigüedad. Esto sugiere que la empresa es efectiva en la adquisición de 
          nuevos clientes, pero necesita mejorar sus estrategias de retención para mantener a los clientes a lo largo del tiempo.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Se observa que la mayoría de los clientes se encuentran en el rango de $0 a $200, mientras que es menos común que los clientes 
          gasten más de $1000. La alta concentración de clientes en el rango de $0 a $200 sugiere que la empresa tiene una base de clientes 
          amplia y diversa, con muchos clientes que realizan compras de bajo valor.
        </p>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Gráfica de gastos de clientes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Distribución de Gastos</h2>
            <p>Distribución de clientes por rangos de gastos.</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-4">
          La presencia de clientes que gastan más de $1000 indica que la empresa tiene segmentos de clientes con mayor poder adquisitivo 
          que realizan compras de alto valor. Sin embargo, el número relativamente bajo de clientes en este segmento sugiere que existe un 
          potencial para aumentar las ventas entre estos clientes.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Se realizó una segmentación de clientes con base en la frecuencia con la que compran en la tienda, el monto que suelen gastar en sus 
          compras y el tiempo transcurrido desde su última compra. Se obtuvieron 5 segmentos que dividen a los clientes en:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
          <li><span className="font-semibold">Potencial:</span> Son clientes con actividad superior a la media, en los cuales podemos 
          formar algún programa específico para incentivarlos a convertirlos en clientes leales o de alto valor.</li>
          <li><span className="font-semibold">Leal:</span> En este grupo encontraremos a los clientes valiosos para la empresa, ya que son 
          propensos a realizar compras repetidas y recomendar nuestros productos o servicios a otros.</li>
          <li><span className="font-semibold">Activo:</span> Clientes que compran nuestros productos de manera regular, sin llegar a superar 
          el promedio de compras o visitas. Este segmento representa la mayor oportunidad de crecimiento para la empresa. Se deben implementar 
          estrategias para aumentar la satisfacción y la lealtad de estos clientes.</li>
          <li><span className="font-semibold">Alto valor:</span> Estos clientes generan la mayor parte de los ingresos para la empresa. Es 
          importante enfocarse en este segmento para mantener su satisfacción y lealtad.</li>
          <li><span className="font-semibold">Cliente Churn:</span> Estos clientes ya no compran nuestros productos. Es de vital importancia 
          enfocarse en este segmento y analizar las razones por las que estos clientes se han perdido y tomar medidas para evitar que otros 
          clientes se pierdan en el futuro.</li>
        </ul>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Gráfica de segmentación de clientes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Segmentación de Clientes</h2>
            <p>Segmentación de clientes según el análisis RFM.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RFMAnalysis;
