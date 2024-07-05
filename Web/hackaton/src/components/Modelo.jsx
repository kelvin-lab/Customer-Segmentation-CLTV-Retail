import React from 'react';
import kmeans from '../images/Modelo/kmeans.jpeg';

const Modelo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      
      <div className="flex flex-wrap gap-5 p-8">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">📊 Segmentación de Clientes</h2>
            <p>La gráfica muestra la segmentación de clientes utilizando el algoritmo K-means.</p>
            <p>El eje X representa el tiempo desde la última compra y el eje Y el gasto total.</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">⭐ Clúster Activo</h2>
            <p>Compras recientes y gasto significativo. Los más valiosos.</p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">💎 Clúster Leal</h2>
            <p>Compras constantes, gasto moderado. Muy leales.</p>
          </div>
        </div>
             
        <img src={kmeans} alt="Segmentación de Clientes" />
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">💰 Clúster Alto Valor</h2>
            <p>Una compra grande. Potencial valioso.</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">🌟 Clúster Potencial</h2>
            <p>Compras recientes, gasto moderado. Potencial valioso.</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">🕒 Clúster Cliente Perdido</h2>
            <p>No han comprado en mucho tiempo. No valiosos.</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">📈 Tendencias Activo</h2>
            <p>Aumentando. Nuevos clientes valiosos.</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">📉 Tendencias Leal</h2>
            <p>Disminuyendo. Perdiendo clientes leales.</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">🔄 Tendencias Alto Valor</h2>
            <p>Fluctuando. Atracción inconsistente.</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="bg-blue-500 w-full h-40"></figure>
          <div className="card-body">
            <h2 className="card-title">⬇️ Tendencias Cliente Perdido</h2>
            <p>Disminuyendo. Mejor retención de clientes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modelo;
