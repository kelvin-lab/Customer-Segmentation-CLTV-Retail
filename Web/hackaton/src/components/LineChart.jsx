import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],// aqui iria la data que me mandan del análisis
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      // Destruir la instancia previa del gráfico si existe
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartContainer.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          // Configuración opcional de opciones de gráfico aquí
        }
      });
    }

    return () => {
      // Limpiar y destruir el gráfico al desmontar el componente
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartContainer} width="400" height="400"></canvas>
    </div>
  );
};

export default LineChart;
