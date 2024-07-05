import React from 'react';
import distribucion from '../images/distrubicion_de_recencia.jpeg';
import segmentRecency from '../images/recencia_por_segmento.jpeg';
import gastos from '../images/grafica_de_clusters.jpeg';
import clients from '../images/conteo_por_segmento.jpeg';

const RFMAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-10">
      <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Aplicación del método RFM</h1>
        
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <div className="card bg-base-100 shadow-xl w-full">
              <figure>
                <img
                  className="w-full"
                  src={distribucion}
                  alt="Distribución de Recencia"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Distribución de Compras</h2>
                <p>Distribución de días de espera entre compras de los clientes.</p>
                <p className="text-lg text-gray-700 mb-4">
                  Lo que observamos en esta gráfica es la distribución de clientes por su antigüedad. La mayor concentración de clientes 
                  se encuentra en el rango de 0 a 6 meses, lo que sugiere que la empresa tiene una alta tasa de adquisición de nuevos 
                  clientes. A medida que aumenta la antigüedad, el número de clientes disminuye, lo que indica que la empresa tiene cierta 
                  rotación de clientes.
                </p>
              </div>
            </div>
          </div>

          <div id="item2" className="carousel-item w-full">
            <div className="card bg-base-100 shadow-xl w-full">
              <figure>
                <img
                  className="w-full"
                  src={segmentRecency}
                  alt="Recencia por segmento"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Distribución de Antigüedad</h2>
                <p>Distribución de clientes por antigüedad.</p>
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
              </div>
            </div>
          </div>

          <div id="item3" className="carousel-item w-full">
            <div className="card bg-base-100 shadow-xl w-full">
              <figure>
                <img
                  className="w-full"
                  src={gastos}
                  alt="Distribución de Gastos"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Distribución de Gastos</h2>
                <p>Distribución de clientes por rangos de gastos.</p>
                <p className="text-lg text-gray-700 mb-4">
                  La presencia de clientes que gastan más de $1000 indica que la empresa tiene segmentos de clientes con mayor poder adquisitivo 
                  que realizan compras de alto valor. Sin embargo, el número relativamente bajo de clientes en este segmento sugiere que existe un 
                  potencial para aumentar las ventas entre estos clientes.
                </p>
              </div>
            </div>
          </div>

          <div id="item4" className="carousel-item w-full">
            <div className="card bg-base-100 shadow-xl w-full">
              <figure>
                <img
                  className="w-full"
                  src={clients}
                  alt="Clientes por segmento"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Segmentación de Clientes</h2>
                <p className="text-lg text-gray-700 mb-4">
                  La segmentación de clientes se basa en la frecuencia de compra, el monto gastado y el tiempo desde la última compra. Se identificaron 5 segmentos de clientes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li><span className="font-semibold">Potencial:</span> Clientes con actividad superior a la media, ideales para programas que los conviertan en clientes leales o de alto valor.</li>
                  <li><span className="font-semibold">Leal:</span> Clientes valiosos que realizan compras repetidas y recomiendan nuestros productos o servicios.</li>
                  <li><span className="font-semibold">Activo:</span> Clientes que compran regularmente, representando una gran oportunidad de crecimiento mediante estrategias de satisfacción y lealtad.</li>
                  <li><span className="font-semibold">Alto valor:</span> Clientes que generan la mayor parte de los ingresos, con foco en mantener su satisfacción y lealtad.</li>
                  <li><span className="font-semibold">Cliente Churn:</span> Clientes que han dejado de comprar, siendo crucial analizar las razones y tomar medidas para evitar futuras pérdidas.</li>
                </ul>
                <p>Segmentación de clientes según el análisis RFM.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
      </div>
    </div>
  );
}

export default RFMAnalysis;
