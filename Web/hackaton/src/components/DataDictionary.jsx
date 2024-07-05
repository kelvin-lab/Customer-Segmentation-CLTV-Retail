import React from 'react';

const DataDictionary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 overflow-y-auto h-[calc(100vh-20px)]">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Diccionario de datos</h1>
        <p className="text-lg text-gray-700 mb-4">
          El conjunto de datos contiene información detallada sobre las transacciones de ventas de la tienda.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Descripción de las Columnas</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Columna</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>invoice_no</td>
                <td>Número de factura generado para cada transacción.</td>
              </tr>
              <tr>
                <th>2</th>
                <td>stock_code</td>
                <td>Código único que identifica cada producto vendido.</td>
              </tr>
              <tr>
                <th>3</th>
                <td>description</td>
                <td>Descripción del producto vendido.</td>
              </tr>
              <tr>
                <th>4</th>
                <td>quantity</td>
                <td>Cantidad de unidades vendidas de cada producto en la factura.</td>
              </tr>
              <tr>
                <th>5</th>
                <td>invoice_date</td>
                <td>Fecha y hora en que se emitió la factura.</td>
              </tr>
              <tr>
                <th>6</th>
                <td>unit_price</td>
                <td>Precio unitario del producto en la factura.</td>
              </tr>
              <tr>
                <th>7</th>
                <td>customer_id</td>
                <td>Identificación única del cliente que realizó la compra.</td>
              </tr>
              <tr>
                <th>8</th>
                <td>region</td>
                <td>Región o ubicación del cliente.</td>
              </tr>
              <tr>
                <th>9</th>
                <td>total</td>
                <td>Total de la venta, calculado como la cantidad vendida multiplicada por el precio unitario.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataDictionary;

