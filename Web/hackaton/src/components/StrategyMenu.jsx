import React from 'react';

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
    <section className="w-3/4 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-50 p-6 rounded-lg shadow-lg">
     <h1 className="text-2xl font-bold text-gray-900">Recommended Strategies</h1>
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Strategy</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
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
                    src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Hart Hagerty</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br />
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        {/* row 2 */}
        <tr>
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
                    src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Brice Swyre</div>
                <div className="text-sm opacity-50">China</div>
              </div>
            </div>
          </td>
          <td>
            Carroll Group
            <br />
            <span className="badge badge-ghost badge-sm">Tax Accountant</span>
          </td>
          <td>Red</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        {/* row 3 */}
        <tr>
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
                    src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Marjy Ferencz</div>
                <div className="text-sm opacity-50">Russia</div>
              </div>
            </div>
          </td>
          <td>
            Rowe-Schoen
            <br />
            <span className="badge badge-ghost badge-sm">Office Assistant I</span>
          </td>
          <td>Crimson</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        {/* row 4 */}
        <tr>
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
                    src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Yancy Tear</div>
                <div className="text-sm opacity-50">Brazil</div>
              </div>
            </div>
          </td>
          <td>
            Wyman-Ledner
            <br />
            <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
          </td>
          <td>Indigo</td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
      {/* foot */}

    </table>
  </section>
  );
};

export default StrategyMenu;
