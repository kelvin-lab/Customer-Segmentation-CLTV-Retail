import React from 'react';
import idea from '../images/idea.png';

const strategies = [
  {
    title: "Programas de fidelización",
    description: "Implementar programas de fidelización que ofrezcan descuentos, puntos, acceso anticipado a nuevos productos o servicios, y eventos exclusivos.",
  },
  {
    title: "Mejorar el servicio al cliente",
    description: "Asegurar que los canales de servicio al cliente sean accesibles y fáciles de usar, y que los empleados estén capacitados para brindar un servicio de alta calidad.",
  },
  {
    title: "Analizar razones de abandono",
    description: "Realizar encuestas de salida o entrevistas a clientes perdidos para entender las razones por las que se van.",
  },
  {
    title: "Analizar factores de fidelización",
    description: "Investigar los factores que impulsan la fidelización de los clientes que realizan más de 100 compras.",
  },
  {
    title: "Personalizar comunicaciones de marketing",
    description: "Personalizar las comunicaciones de marketing basadas en el historial de compras de cada cliente.",
  },
  {
    title: "Analizar factores que influyen en el gasto",
    description: "Investigar los factores que influyen en el gasto de los clientes en diferentes rangos de precios.",
  },
  {
    title: "Aumentar el gasto promedio",
    description: "Implementar estrategias para aumentar el gasto promedio de los clientes, como descuentos por volumen y promociones especiales.",
  },
  {
    title: "Atraer y fidelizar a clientes de alto valor",
    description: "Implementar estrategias de marketing personalizadas para clientes que gastan más de $1000, ofreciendo productos y servicios exclusivos.",
  },
];

const StrategyMenu = () => {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-800 via-purple-950 to-blue-900 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-white">Recommended Strategies</h1>
      
      <table className="table ">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th className='text-white  text-xl '>Strategy</th>
            <th className='text-white text-xl'>Description</th>
          </tr>
        </thead>
        <tbody>
          {strategies.map((strategy, index) => (
            <tr key={index}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={idea}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-white">{strategy.title}</div>
                  </div>
                </div>
              </td>
              <td className='text-white'>
                {strategy.description}
                <br />
              </td>
              <th>
                <button className="btn btn-ghost bg-white btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

    </section>
  );
};

export default StrategyMenu;
