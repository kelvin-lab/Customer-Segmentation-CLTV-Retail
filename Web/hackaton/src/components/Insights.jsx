import React from 'react';

const insightsData = [
  {
    emoji: "📅",
    text: "Distribución de las Ventas por Mes: Los meses con mayores ventas son septiembre, octubre y noviembre. En diciembre hay una baja en las ventas."
  },
  {
    emoji: "🔄",
    text: "Análisis de la Frecuencia de Compra: La mayoría de los clientes regresa a comprar dentro de los 50 días posteriores."
  },
  {
    emoji: "📊",
    text: "Segmentación de Clientes: Clasificación basada en el comportamiento de compra (frecuentes, ocasionales, nuevos, etc.)."
  },
  {
    emoji: "💵",
    text: "Valor Promedio de las Compras: Entre $200 y $1000; algunos clientes compran por encima de $8,000."
  },
  {
    emoji: "🏆",
    text: "Análisis de Productos más Rentables: Los productos más vendidos son el papel craft little birdie y el medium ceramic top storage jar."
  },
  {
    emoji: "📈",
    text: "Tasa de Retención de Clientes: No se pudo determinar con precisión debido a la falta de datos históricos."
  },
  {
    emoji: "🌍",
    text: "Comportamiento de Compra por Región: Reino Unido destaca por las ganancias generadas."
  },
  {
    emoji: "🔍",
    text: "Integridad de los datos: Mezcla en las facturas entre ingresos por ventas y pagos de servicios."
  }
];

const Insights = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Insights</h2>
      <ul className="list-disc pl-5">
        {insightsData.map((insight, index) => (
          <li key={index} className="mb-2">
            <span className="mr-2">{insight.emoji}</span>
            {insight.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Insights;
