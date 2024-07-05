import React, { useState } from 'react';
import DTiempo from '../images/AED/1.jpg';
import VentasDiaMesAno from '../images/AED/2.jpg';
import MenorVolumen from '../images/AED/3.png';
import MayorVolumen from '../images/AED/4.png';
import EvolucionValor1 from '../images/AED/5.jpg';
import EvolucionValor2 from '../images/AED/6.jpg';
import EvolucionValor3 from '../images/AED/7.png';

const Exploratory = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentImage('');
  };

  const data = {
    titles: [
      "Distribución del tiempo de vida del Cliente en nuestra tienda",
      "Distribución de Ventas por día/mes/año y región",
      "Top 10 regiones con menor volumen de compra",
      "Top 10 regiones con mayor volumen de compra",
      "Evolución del valor promedio por compra a lo largo del tiempo",
      "Evolución del valor promedio por compra a lo largo del tiempo",
      "Top 10 productos más vendidos",
    ],
    texts: [
      "La visualización nos damos cuenta que hay una gran cantidad de nuestros clientes entre el rango de los 0 a los 50 días, por lo que pueden ser clientes recientes comprando en nuestra tienda lo cual es bueno, o también pueden ser clientes que ya dejaron de comprar y debemos buscar la forma de retomarlos.",
      "La estacionalidad de ventas es bastante uniforme a lo largo del año, todas las regiones consumen nuestros productos, más o menos de la misma manera, salvo esos valores atípicos que se pueden observar en enero y septiembre que pueden ser un buen boost si logramos trabajaras bien.",
      "Recomendamos un análisis más a fondo con lo que respecta a los países, que se encuentra al fondo del índice de compra, para tener claro la real razón del bajo índice de ventas, tal vez un centro de distribución puede levantar los números de esos sectores o tal vez sea mejor concentrarse en regiones con mayor potencial.",
      "El Reino Unido es la región con el mayor volumen de compras por lejos. Sin embargo, a la fecha de hoy, debemos tomar esta información con precaución, ya que los datos fueron recopilados durante el revuelo del Brexit. Tal vez sea necesario analizar más a fondo este sector. Aun así, no podemos ignorar lo mucho que se distancia de las demás regiones.",
      "Podemos observar en el gráfico anterior 2 anomalías de compras, las cuales al verificar la primera es un cliente que ha realizado ya varias compras con nosotros y el otro es un cliente que sus primeras 2 compras fueron pequeñas pero luego el 9 de diciembre de 2020 realiza una compra grande de (80995) paper craft little birdie, el cual da un total de 168469.60. Este último cliente en particular nos sugiere la posibilidad de que existan clientes que compran mayoreo de ciertos productos, para los cuales se podrían crear estrategias de marketing especiales.",
      "En este análisis, excluimos intencionalmente los dos valores atípicos del gráfico anterior para enfocarnos en la evolución del promedio de compra de manera más detallada. Observamos que la mayoría de los clientes tienen un promedio de compra por debajo de los 1000, pero también notamos una cantidad significativa de clientes cuyo promedio supera esta cifra. Para mejorar estos resultados, se pueden implementar estrategias como las mencionadas anteriormente para incentivar a los clientes con promedios de compra inferiores a 1000 a aumentar sus compras hacia este umbral o lo más cercano posible a él.",
      "En esta gráfica podemos ver los productos más vendidos. Una solución para aumentar el porcentaje de venta de los productos menos populares podría ser vincularlos con aquellos que tienen mayores ventas o, en su defecto, eliminarlos para dar espacio a otros artículos que puedan generar una mayor rentabilidad."
    ],
    images: [
      DTiempo,
      VentasDiaMesAno,
      MenorVolumen,
      MayorVolumen,
      EvolucionValor1,
      EvolucionValor2,
      EvolucionValor3
    ]
  };

  return (
    <div>
      <div className="flex flex-wrap justify-around gap-7 p-5">
        {data.titles.map((title, index) => (
          <div key={index} className="card min-h-300 w-1/3 bg-base-100 shadow-xl">
            <div className="relative h-64" onClick={() => handleImageClick(data.images[index])}>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-opacity-50"></div>
              <img
                className="absolute inset-0 w-full h-full object-contain"
                src={data.images[index]}
                alt="graphic"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold mb-2">{title}</h2>
              <p className="text-base text-gray-700 mb-4">
                {data.texts[index]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <dialog id="image_modal" className="modal w-full" open>
          <div className="modal-box w-11/12 max-w-5xl">
            <img src={currentImage} alt="Enlarged graphic" className="w-full object-content" />
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Exploratory;
